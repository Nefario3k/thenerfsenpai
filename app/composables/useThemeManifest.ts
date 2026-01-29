// app/composables/useThemeManifest.ts
export const useThemeManifest = () => {
	const manifestHref = ref("/light/site.webmanifest");

	if (import.meta.client) {
		const setFromPreference = () => {
			manifestHref.value = window.matchMedia("(prefers-color-scheme: dark)")
				.matches
				? "/light/site.webmanifest" // dark preference → light manifest (inverted)
				: "/dark/site.webmanifest";
		};
		setFromPreference();
		window
			.matchMedia("(prefers-color-scheme: dark)")
			.addEventListener("change", setFromPreference);
	}

	return { manifestHref };
};
