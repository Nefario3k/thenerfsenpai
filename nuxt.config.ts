import tailwindcss from "@tailwindcss/vite";
import { defineNuxtConfig } from "nuxt/config";
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: "2025-07-15",
	devtools: { enabled: true },
	devServer: {
		host: "0.0.0.0",
		port: parseInt(process.env.PORT || "8500"),
	},
	runtimeConfig: {
		githubToken: process.env.NUXT_GITHUB_TOKEN || "",
		public: {
			siteUrl: process.env.NUXT_PUBLIC_SITE_URL || "https://thenerfsenpai.com",
			githubLogin: process.env.NUXT_PUBLIC_GITHUB_LOGIN || "",
			emailjsPublicKey: process.env.NUXT_PUBLIC_EMAILJS_PUBLIC_KEY || "",
			emailjsServiceId: process.env.NUXT_PUBLIC_EMAILJS_SERVICE_ID || "",
			emailjsTemplateId: process.env.NUXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
		},
	},
	modules: [
		"@nuxt/image",
		"@nuxt/scripts",
		"@nuxtjs/seo",
		"@vueuse/nuxt",
		"@pinia/nuxt",
		"@vee-validate/nuxt",
		"@solar-icons/nuxt",
		"nuxt-lenis",
		"shadcn-nuxt",
		"v-gsap-nuxt",
		"notivue/nuxt",
	],
	shadcn: {
		/**
		 * Prefix for all the imported component.
		 * @default "Ui"
		 */
		prefix: "",
		/**
		 * Directory that the component lives in.
		 * Will respect the Nuxt aliases.
		 * @link https://nuxt.com/docs/api/nuxt-config#alias
		 * @default "@/components/ui"
		 */
		componentDir: "@/components/ui",
	},
	solarIcons: {
		// Prefix for auto-imported components (default: 'Solar')
		namePrefix: 'Solar',
		// Auto-import all icons as components (default: true)
		autoImport: true,
		// Inject global provider automatically (default: true)
		provider: true,
		// Default icon properties
		color: 'currentColor',
		size: 24,
		weight: 'Linear',
		mirrored: false,
	},
	site: {
		url: process.env.NUXT_PUBLIC_SITE_URL || "https://thenerfsenpai.com",
		name: "TheNerfSenpai",
		description:
			"Davies Okpeta — Senior Fullstack Web Developer portfolio. React, Next.js, Vue, Nuxt and modern web technologies.",
		defaultLocale: "en",
	},
	notivue: {
		position: "bottom-right",
		// Behavior settings
		pauseOnTabChange: true,
		pauseOnTouch: true,
		pauseOnHover: true,
		avoidDuplicates: true,
		limit: Infinity,
		animations: {
			enter: "Notivue__enter",
			leave: "Notivue__leave",
			clearAll: "Notivue__clearAll",
		},
		transition: "transform 0.35s cubic-bezier(0.5, 1, 0.25, 1)",
		// Theme and styling

		// Features
		notifications: {
			global: {
				duration: 19000,
			},
		},

		// Responsive settings
		teleportTo: "body",
		enqueue: true,
	},
	css: [
		"~/assets/css/font.css",
		"~/assets/css/variables.css",
		"~/assets/css/main.css",
		"~/assets/css/transitions.css",
		"notivue/notification.css",
		"notivue/animations.css",
	],
	nitro: {
		routeRules: {
			"/**": {
				headers: {
					"x-powered-by": "",
					"X-Frame-Options": "DENY",
				}
			}
		}
	},
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
			script: [
				{
					src: "https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js",
					crossorigin: "anonymous",
					type: "text/javascript",
				},
			],
		},
	},
	build: {
		transpile: ["vee-validate", "@vee-validate/rules"],
	},
	vite: {
		plugins: [tailwindcss()],
		optimizeDeps: {
			include: ["reka-ui", "@phosphor-icons/vue", "clsx", "tailwind-merge", "yup", "lenis"],
		},
	},
	sitemap: {
		sources: ["/api/__sitemap__/urls"],
		autoLastmod: true,
	},
	robots: {
		allow: ["/"],
	},
});
