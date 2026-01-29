import tailwindcss from "@tailwindcss/vite";
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: "2025-07-15",
	devtools: { enabled: true },
	devServer: {
		host: "0.0.0.0",
		port: parseInt(process.env.PORT || "8500"),
	},
	runtimeConfig: {
		public: {
			siteUrl: process.env.NUXT_PUBLIC_SITE_URL || "https://thenerfsenpai.com",
		},
	},
	modules: ["@nuxt/image", "@nuxt/scripts", "@nuxtjs/seo"],
	site: {
		url: process.env.NUXT_PUBLIC_SITE_URL || "https://thenerfsenpai.com",
		name: "TheNerfSenpai",
		description:
			"Davies Okpeta — Senior Fullstack Web Developer portfolio. React, Next.js, Vue, Nuxt and modern web technologies.",
		defaultLocale: "en",
	},
	css: ["~/assets/css/variables.css", "~/assets/css/main.scss"],
	app: {
		head: {
			titleTemplate: "%s | TheNerfSenpai",
			htmlAttrs: { lang: "en" },
			meta: [
				{ charset: "utf-8" },
				{
					name: "viewport",
					content: "width=device-width, initial-scale=1",
				},
				{
					name: "description",
					content:
						"Davies Okpeta — Senior Fullstack Web Developer portfolio. React, Next.js, Vue, Nuxt and modern web technologies.",
				},
				{
					name: "keywords",
					content:
						"Davies Okpeta, TheNerfSenpai, Fullstack Developer, Senior Web Developer, React, Next.js, Vue, Nuxt, JavaScript, TypeScript, Tailwind CSS, Portfolio",
				},
			],
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
