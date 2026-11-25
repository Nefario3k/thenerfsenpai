import { PROJECTS } from "~~/shared/projects";

/** Project detail pages, with their banner image for image search. */
export default defineSitemapEventHandler(() => {
	return PROJECTS.map((project) => ({
		loc: `/projects/${project.slug}`,
		images: [{ loc: project.images.banner, title: project.title }],
	}));
});
