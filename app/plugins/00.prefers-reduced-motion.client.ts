export default defineNuxtPlugin((nuxtApp) => {
	const prefersReducedMotion = ref(
		typeof window !== "undefined" &&
			window.matchMedia("(prefers-reduced-motion: reduce)").matches
	);
	nuxtApp.provide("prefersReducedMotion", prefersReducedMotion);
});
