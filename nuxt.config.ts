import tailwindcss from "@tailwindcss/vite";
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: "2025-07-15",
	devtools: { enabled: true },
	devServer: {
		host: "0.0.0.0",
		port: parseInt(process.env.PORT || "8500"),
	},
	modules: ["@nuxt/image", "@nuxt/scripts"],
	css: ["~/assets/css/variables.css", "~/assets/css/main.scss"],
	app: {
		head: {
			link: [
				// Favicon – inverted
				{
					rel: "icon",
					type: "image/x-icon",
					href: "/light/favicon.ico",
					media: "(prefers-color-scheme: dark)",
				},
				{
					rel: "icon",
					type: "image/x-icon",
					href: "/dark/favicon.ico",
					media: "(prefers-color-scheme: light)",
				},
				{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" },

				// Apple touch icon – inverted (same as favicon)
				{
					rel: "apple-touch-icon",
					href: "/light/apple-touch-icon.png",
					media: "(prefers-color-scheme: dark)",
				},
				{
					rel: "apple-touch-icon",
					href: "/dark/apple-touch-icon.png",
					media: "(prefers-color-scheme: light)",
				},
			],
		},
	},
	vite: {
		plugins: [tailwindcss()],
	},
});
