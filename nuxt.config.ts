import tailwindcss from "@tailwindcss/vite";
import { defineNuxtConfig } from "nuxt/config";
import {
	PERSON,
	SITE_DEFAULT_URL,
	SITE_DESCRIPTION,
	SITE_KEYWORDS,
	SITE_NAME,
	SOCIAL_PROFILES,
} from "./shared/site";
import { PROJECTS } from "./shared/projects";

const siteUrl = process.env.NUXT_PUBLIC_SITE_URL || SITE_DEFAULT_URL;
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: "2025-07-15",
	devtools: { enabled: false },
	devServer: {
		host: "0.0.0.0",
		port: parseInt(process.env.PORT || "8500"),
	},
	runtimeConfig: {
		githubToken: process.env.NUXT_GITHUB_TOKEN || "",
		public: {
			siteUrl,
			githubLogin: process.env.NUXT_PUBLIC_GITHUB_LOGIN || "",
			emailjsPublicKey: process.env.NUXT_PUBLIC_EMAILJS_PUBLIC_KEY || "",
			emailjsServiceId: process.env.NUXT_PUBLIC_EMAILJS_SERVICE_ID || "",
			emailjsTemplateId: process.env.NUXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
		},
	},
	modules: [
		"@nuxt/image",
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
		url: siteUrl,
		name: SITE_NAME,
		description: SITE_DESCRIPTION,
		defaultLocale: "en",
	},
	schemaOrg: {
		// The site is about one person: this Person node is the graph's identity,
		// and WebSite/WebPage nodes link to it as author and publisher.
		identity: {
			type: "Person",
			name: PERSON.name,
			alternateName: PERSON.alternateName,
			jobTitle: PERSON.jobTitle,
			image: PERSON.image,
			url: siteUrl,
			sameAs: [...SOCIAL_PROFILES],
			knowsAbout: [...PERSON.knowsAbout],
		},
	},
	// @nuxtjs/seo 6 sub-modules, matching onl-website-fe:
	// - aiReady: publishes /llms.txt and an AI Content-Signal line in robots.txt.
	// - ogImage is off: the site uses a static 1200x630 card (public/og-image.png) and
	//   project banners, so no runtime image generation or NUXT_APP_SECRET is needed.
	aiReady: { enabled: true },
	ogImage: { enabled: false },
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
		// Prerender only the Markdown copies of each page. nuxt-ai-ready indexes them at
		// build time to fill /llms-full.txt; the HTML pages stay server-rendered so the
		// colour-scheme cookie and the live GitHub data on /about keep working.
		prerender: {
			routes: [
				"/index.md",
				"/about.md",
				"/projects.md",
				...PROJECTS.map((project) => `/projects/${project.slug}.md`),
			],
		},
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
				// charset, viewport and description come from Nuxt and the site config.
				// Pages override description and keywords through usePortfolioSeo().
				{ name: "keywords", content: SITE_KEYWORDS },
				{ name: "author", content: PERSON.name },
				{ name: "format-detection", content: "telephone=no" },
				{ name: "theme-color", content: "#f7f8fa", media: "(prefers-color-scheme: light)" },
				{ name: "theme-color", content: "#08070c", media: "(prefers-color-scheme: dark)" },
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
				// EmailJS is only needed by the contact form, so keep it off the critical
				// rendering path. plugins/emailjs.client.ts initialises it on load.
				{
					src: "https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js",
					crossorigin: "anonymous",
					type: "text/javascript",
					defer: true,
					tagPosition: "bodyClose",
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
			include: ["reka-ui", "clsx", "tailwind-merge", "yup", "lenis"],
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
