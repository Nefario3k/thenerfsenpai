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
				type: "application/ld+json",
				innerHTML: JSON.stringify(jsonLd),
			},
		],
	});
};
