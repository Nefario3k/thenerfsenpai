import type { ComputedRef } from "vue";

const SITE_DESCRIPTION =
	"Davies Okpeta — Senior Fullstack Web Developer portfolio. React, Next.js, Vue, Nuxt and modern web technologies.";

export const useStructuredData = () => {
	const { public: config } = useRuntimeConfig();
	const siteUrl = (config.siteUrl as string)?.replace(/\/$/, "") ?? "";

	const personSchema = {
		"@type": "Person",
		name: "Davies Okpeta",
		url: siteUrl,
		jobTitle: "Senior Fullstack Web Developer",
		sameAs: [] as string[],
	};

	const websiteSchema = {
		"@type": "WebSite",
		name: "TheNerfSenpai",
		url: siteUrl,
		description: SITE_DESCRIPTION,
		author: {
			"@id": "#person",
		},
	};

	const graph = [
		{ ...personSchema, "@id": `${siteUrl}#person` },
		{
			...websiteSchema,
			author: { "@id": `${siteUrl}#person` },
		},
	];

	const jsonLd = {
		"@context": "https://schema.org",
		"@graph": graph,
	};

	useHead({
		script: [
			{
				key: "site-jsonld",
				type: "application/ld+json",
				innerHTML: JSON.stringify(jsonLd),
			},
		],
	});
};

/** JSON-LD for project detail: CreativeWork + BreadcrumbList (updates if `project` changes). */
export const useProjectStructuredData = (
	project: ComputedRef<TypeProjects | undefined>
) => {
	const { public: config } = useRuntimeConfig();
	const siteUrl = (config.siteUrl as string)?.replace(/\/$/, "") ?? "";

	const absUrl = (path: string) =>
		path.startsWith("http") ? path : `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;

	const projectJsonLd = computed(() => {
		const p = project.value;
		if (!p) return "";
		const pageUrl = `${siteUrl}/projects/${p.slug}`;
		const images = [
			absUrl(p.images.banner),
			p.images.icon ? absUrl(p.images.icon) : null,
		].filter(Boolean) as string[];
		const graph = [
			{
				"@type": "CreativeWork",
				"@id": `${pageUrl}#creativework`,
				name: p.title,
				description: p.description,
				url: pageUrl,
				image: images,
				author: { "@id": `${siteUrl}#person` },
			},
			{
				"@type": "BreadcrumbList",
				itemListElement: [
					{
						"@type": "ListItem",
						position: 1,
						name: "Home",
						item: siteUrl,
					},
					{
						"@type": "ListItem",
						position: 2,
						name: "Projects",
						item: `${siteUrl}/projects`,
					},
					{
						"@type": "ListItem",
						position: 3,
						name: p.title,
						item: pageUrl,
					},
				],
			},
		];
		return JSON.stringify({
			"@context": "https://schema.org",
			"@graph": graph,
		});
	});

	useHead({
		script: computed(() => {
			const innerHTML = projectJsonLd.value;
			if (!innerHTML) return [];
			return [
				{
					key: "project-page-jsonld",
					type: "application/ld+json",
					innerHTML,
				},
			];
		}),
	});
};
