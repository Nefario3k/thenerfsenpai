import { PROJECT_SLUGS } from "~~/shared/projectSlugs";

export default defineSitemapEventHandler(() => {
	return PROJECT_SLUGS.map((slug) => ({
		loc: `/projects/${slug}`,
	}));
});
