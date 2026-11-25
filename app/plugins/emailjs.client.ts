let emailJsInitialized = false;

export default defineNuxtPlugin(() => {
	const { public: config } = useRuntimeConfig();
	const publicKey = String(config.emailjsPublicKey ?? "");

	if (!publicKey || !import.meta.client || emailJsInitialized) {
		return;
	}

	const initializeEmailJs = () => {
		if (!window.emailjs?.init) return false;
		window.emailjs.init(publicKey);
		emailJsInitialized = true;
		return true;
	};

	if (initializeEmailJs()) return;

	// The SDK is a deferred script (see nuxt.config.ts app.head.script), so it may load after this plugin runs.
	const emailJsScript = document.querySelector<HTMLScriptElement>(
		'script[src*="@emailjs/browser"]'
	);

	emailJsScript?.addEventListener("load", initializeEmailJs, { once: true });
});
