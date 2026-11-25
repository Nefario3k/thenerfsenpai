import { type ComputedRef, type MaybeRefOrGetter, toValue } from "vue";
import {
	DEFAULT_OG_IMAGE,
	SITE_DESCRIPTION,
	SITE_KEYWORDS,
	SITE_NAME,
	TWITTER_HANDLE,
} from "~~/shared/site";

interface UsePortfolioSeoOptions {
	/** Page title without the site suffix; `titleTemplate` adds " | TheNerfSenpai". */
	title?: MaybeRefOrGetter<string | undefined>;
	description?: MaybeRefOrGetter<string | undefined>;
	/** Extra keywords appended to the site defaults. */
	keywords?: MaybeRefOrGetter<string | undefined>;
	/** Site path or absolute URL. Defaults to the 1200x630 site card. */
	ogImage?: MaybeRefOrGetter<string | undefined>;
	ogImageAlt?: MaybeRefOrGetter<string | undefined>;
	ogType?: "website" | "article" | "profile";
	/** Defaults to the current route path. */
	canonicalPath?: MaybeRefOrGetter<string | undefined>;
}

/**
 * Sets the page title, description, Open Graph / Twitter tags, keywords and
 * canonical link. Every option may be a plain value, a ref or a getter, so
 * tags follow reactive data (for example when navigating between projects).
 * Title and description are stripped of markup, and the description is
 * truncated to a search-snippet length.
 */
export const usePortfolioSeo = (options: UsePortfolioSeoOptions = {}) => {
	const { public: config } = useRuntimeConfig();
	const route = useRoute();
	const siteUrl = String(config.siteUrl ?? "").replace(/\/$/, "");

	const canonical = computed(() => {
		const canonicalPath = toValue(options.canonicalPath) || route.path;
		return seoUtils.toAbsoluteUrl(siteUrl, canonicalPath);
	});

	const title = computed(() => seoUtils.toPlainText(toValue(options.title)) || SITE_NAME);
	/** Social cards do not get `titleTemplate`, so add the site name explicitly. */
	const socialTitle = computed(() =>
		title.value === SITE_NAME ? SITE_NAME : `${title.value} | ${SITE_NAME}`
	);
	const description = computed(
		() => seoUtils.toMetaDescription(toValue(options.description)) || SITE_DESCRIPTION
	);
	const keywords = computed(() => {
		const extra = toValue(options.keywords)?.trim();
		return extra ? `${SITE_KEYWORDS}, ${extra}` : SITE_KEYWORDS;
	});

	const customImage = computed(() => toValue(options.ogImage) || "");
	const isDefaultImage = computed(() => !customImage.value);
	const ogImageUrl = computed(() =>
		seoUtils.toAbsoluteUrl(siteUrl, customImage.value || DEFAULT_OG_IMAGE.path)
	);
	const ogImageAlt = computed(
		() =>
			toValue(options.ogImageAlt) ||
			(isDefaultImage.value ? DEFAULT_OG_IMAGE.alt : `${title.value} preview`)
	);

	useSeoMeta({
		title,
		description,
		ogTitle: socialTitle,
		ogDescription: description,
		ogUrl: canonical,
		ogSiteName: SITE_NAME,
		ogType: options.ogType ?? "website",
		ogImage: ogImageUrl,
		ogImageAlt,
		// Dimensions are only known for the bundled default card.
		ogImageWidth: () => (isDefaultImage.value ? DEFAULT_OG_IMAGE.width : undefined),
		ogImageHeight: () => (isDefaultImage.value ? DEFAULT_OG_IMAGE.height : undefined),
		ogImageType: () => (isDefaultImage.value ? DEFAULT_OG_IMAGE.type : undefined),
		twitterCard: "summary_large_image",
		twitterSite: TWITTER_HANDLE,
		twitterCreator: TWITTER_HANDLE,
		twitterTitle: socialTitle,
		twitterDescription: description,
		twitterImage: ogImageUrl,
		twitterImageAlt: ogImageAlt,
	});

	useHead({
		link: [{ rel: "canonical", href: canonical }],
		meta: [{ name: "keywords", content: keywords }],
	});
};

/** Per-project route SEO; follows `project` when the client navigates between slugs. */
export const useProjectSeo = (project: ComputedRef<TypeProjects | undefined>) => {
	usePortfolioSeo({
		title: () => project.value?.title,
		description: () => project.value?.description,
		ogImage: () => project.value?.images.banner,
		ogImageAlt: () => (project.value ? `${project.value.title} banner` : undefined),
		ogType: "article",
		canonicalPath: () => (project.value ? `/projects/${project.value.slug}` : undefined),
		keywords: () =>
			[project.value?.type, project.value?.client].filter(Boolean).join(", ") || undefined,
	});
};
