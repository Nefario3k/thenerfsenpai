import type { ComputedRef } from "vue";

const DEFAULT_SITE_NAME = "TheNerfSenpai";
const DEFAULT_DESCRIPTION =
	"Davies Okpeta — Senior Fullstack Web Developer portfolio. React, Next.js, Vue, Nuxt and modern web technologies.";
const DEFAULT_OG_IMAGE_PATH = "/images/light-logo.png";
const DEFAULT_KEYWORDS =
	"Davies Okpeta, TheNerfSenpai, Fullstack Developer, Senior Web Developer, React, Next.js, Vue, Nuxt, JavaScript, TypeScript, Tailwind CSS, Portfolio";

interface UsePortfolioSeoOptions {
	title?: string;
	description?: string;
	keywords?: string;
	ogImage?: string;
	canonicalPath?: string;
}

export const usePortfolioSeo = (options: UsePortfolioSeoOptions = {}) => {
	const { public: config } = useRuntimeConfig();
	const route = useRoute();
	const siteUrl = (config.siteUrl as string)?.replace(/\/$/, "") ?? "";

	const canonicalPath = options.canonicalPath ?? route.path;
	const path = canonicalPath.startsWith("/") ? canonicalPath : `/${canonicalPath}`;
	const canonical = `${siteUrl}${path}`;

	const title = options.title ?? "TheNerfSenpai";
	const description = options.description ?? DEFAULT_DESCRIPTION;
	const keywords = options.keywords
		? `${DEFAULT_KEYWORDS}, ${options.keywords}`.trim()
		: DEFAULT_KEYWORDS;

	const ogImageRaw = options.ogImage ?? DEFAULT_OG_IMAGE_PATH;
	const ogImageUrl =
		ogImageRaw.startsWith("http") ? ogImageRaw : `${siteUrl}${ogImageRaw.startsWith("/") ? ogImageRaw : `/${ogImageRaw}`}`;

	useSeoMeta({
		title,
		description,
		ogTitle: title,
		ogDescription: description,
		ogImage: ogImageUrl,
		ogUrl: canonical,
		ogSiteName: DEFAULT_SITE_NAME,
		ogType: "website",
		twitterCard: "summary_large_image",
		twitterTitle: title,
		twitterDescription: description,
		twitterImage: ogImageUrl,
	});

	useHead({
		link: [{ rel: "canonical", href: canonical }],
		meta: [{ name: "keywords", content: keywords }],
	});
};

/** Per-project route SEO; updates when `project` ref changes (e.g. client navigates between slugs). */
export const useProjectSeo = (project: ComputedRef<TypeProjects | undefined>) => {
	watch(
		project,
		(p) => {
			if (!p) return;
			const extra = [p.technology, p.type, p.client].filter(Boolean).join(", ");
			usePortfolioSeo({
				title: p.title,
				description: p.description,
				ogImage: p.images.banner,
				canonicalPath: `/projects/${p.slug}`,
				keywords: extra,
			});
		},
		{ immediate: true }
	);
};
