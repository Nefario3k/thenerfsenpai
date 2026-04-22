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

	const emailJsScript = document.querySelector<HTMLScriptElement>(
		'script[src="https://cdn.emailjs.com/sdk/2.3.2/email.min.js"]'
	);

	emailJsScript?.addEventListener("load", initializeEmailJs, { once: true });
});
