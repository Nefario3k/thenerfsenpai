/**
 * Single source of truth for site identity used by `nuxt.config.ts` (site config,
 * schema.org identity, default head) and the SEO composables in `app/composables`.
 */

export const SITE_NAME = "TheNerfSenpai";

export const SITE_DEFAULT_URL = "https://thenerfsenpai.com";

export const SITE_DESCRIPTION =
	"Davies Okpeta (TheNerfSenpai) is a senior fullstack web developer building mission-critical software with React, Next.js, Vue, Nuxt and TypeScript.";

export const SITE_KEYWORDS =
	"Davies Okpeta, TheNerfSenpai, Fullstack Developer, Senior Web Developer, React, Next.js, Vue, Nuxt, JavaScript, TypeScript, Tailwind CSS, Portfolio";

/** Default social preview image: 1200x630, opaque background, in `public/`. */
export const DEFAULT_OG_IMAGE = {
	path: "/og-image.png",
	width: 1200,
	height: 630,
	alt: "TheNerfSenpai logo",
	type: "image/png",
} as const;

export const TWITTER_HANDLE = "@daviesokpeta";

export const CONTACT_EMAIL = "thenerfsenpai@gmail.com";

/** WhatsApp number in international format, digits only (used for wa.me links). */
export const WHATSAPP_NUMBER = "2348118968777";
/** The same number formatted for people to read. */
export const WHATSAPP_DISPLAY = "+234 811 896 8777";

export const SOCIAL_PROFILES = [
	"https://github.com/Nefario3k",
	"https://x.com/daviesokpeta",
	"https://www.linkedin.com/in/davies-o-b60a801b0/",
] as const;

export const PERSON = {
	name: "Davies Okpeta",
	alternateName: SITE_NAME,
	jobTitle: "Senior Fullstack Web Developer",
	image: "https://res.cloudinary.com/da7ucu50f/image/upload/q_auto/f_auto/DaviesOkpeta_Headshot_2026-02-02_uzyjwo.jpg",
	knowsAbout: ["React", "Next.js", "Vue", "Nuxt", "TypeScript", "JavaScript", "Tailwind CSS"],
} as const;
