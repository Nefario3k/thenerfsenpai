import type { ComputedRef } from "vue";

/*
 * JSON-LD is produced by nuxt-schema-org (part of @nuxtjs/seo). The site-wide
 * Person identity, WebSite and WebPage nodes come from `schemaOrg.identity` in
 * `nuxt.config.ts`; these helpers only add what a given page knows on top.
 * Keep everything in that single graph: a hand-written <script type="application/ld+json">
 * would create duplicate, unlinked WebSite/Person nodes.
 */

/** About page: marks the page as a ProfilePage whose main entity is the site identity. */
export const useProfilePageStructuredData = () => {
	useSchemaOrg([
		defineWebPage({
			"@type": "ProfilePage",
			mainEntity: { "@id": "#identity" },
		}),
	]);
};

/** Contact page: a ContactPage about the site identity, plus breadcrumbs. */
export const useContactPageStructuredData = () => {
	useSchemaOrg([
		defineWebPage({
			"@type": "ContactPage",
			about: { "@id": "#identity" },
		}),
		defineBreadcrumb({
			itemListElement: [
				{ name: "Home", item: "/" },
				{ name: "Contact", item: "/contact" },
			],
		}),
	]);
};

/** Projects listing: a CollectionPage with an ItemList of project detail URLs. */
export const useProjectListStructuredData = (
	projects: ComputedRef<TypeProjects[]>
) => {
	useSchemaOrg([
		defineWebPage({ "@type": "CollectionPage" }),
		// Reactive input goes in as one computed: the definers' types do not accept a
		// getter on a single property such as `itemListElement`.
		defineItemList(
			computed(() => ({
				itemListElement: projects.value.map((p, index) => ({
					position: index + 1,
					name: p.title,
					url: `/projects/${p.slug}`,
				})),
			}))
		),
		defineBreadcrumb({
			itemListElement: [
				{ name: "Home", item: "/" },
				{ name: "Projects", item: "/projects" },
			],
		}),
	]);
};

/** Project detail: a CreativeWork authored by the site identity, plus breadcrumbs. */
export const useProjectStructuredData = (
	project: ComputedRef<TypeProjects | undefined>
) => {
	const { public: config } = useRuntimeConfig();
	const siteUrl = String(config.siteUrl ?? "").replace(/\/$/, "");
	// Raw (untyped) nodes are not resolved by nuxt-schema-org, so use absolute ids here.
	const identityId = `${siteUrl}/#identity`;

	useSchemaOrg([
		defineBreadcrumb(
			computed(() => ({
				itemListElement: [
					{ name: "Home", item: "/" },
					{ name: "Projects", item: "/projects" },
					{ name: project.value?.title ?? "Project" },
				],
			}))
		),
		() => {
			const p = project.value;
			if (!p) return null;
			const pageUrl = `${siteUrl}/projects/${p.slug}`;
			return {
				"@type": "CreativeWork",
				"@id": `${pageUrl}#creativework`,
				name: p.title,
				description: p.description,
				url: pageUrl,
				image: [p.images.banner, p.images.icon].filter(Boolean),
				genre: p.type,
				dateCreated: /^\d{4}$/.test(p.year) ? p.year : undefined,
				author: { "@id": identityId },
				creator: { "@id": identityId },
				mainEntityOfPage: { "@id": `${pageUrl}#webpage` },
			};
		},
	]);
};
