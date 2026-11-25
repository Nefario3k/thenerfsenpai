<template>
	<section key="projects" class="transIn">
		<!-- top section -->
		<section class="tw:sm:px-12 tw:px-4 tw:pb-12 tw:overflow-hidden">
			<h1
				v-gsap.splitText.words.from="{
					opacity: 0,
					x: -30,
					stagger: 0.1,
				}"
				class="tw:sm:text-[5.4rem] tw:text-8 tw:font-normal tw:font-zalando tw:leading-tight"
			>
				Projects ↘
			</h1>
		</section>
		<!-- mini projects section -->
		<ProjectWrapper :list="projects" />
		<!-- break -->
		<Break class="tw:border-t-0!" />
	</section>
</template>

<script lang="ts" setup>
	const { $getState } = useNuxtApp();
	const projects = computed(() => $getState("projects"));
	usePortfolioSeo({
		title: "Projects by Davies Okpeta",
		description:
			"Projects by Davies Okpeta across fintech, education, healthcare, power, real estate and e-commerce, with the challenge, solution and technology behind each.",
	});
	useProjectListStructuredData(projects);
</script>

<style></style>
