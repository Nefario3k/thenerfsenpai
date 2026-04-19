<template>
	<section key="projects" class="transIn">
		<!-- top section -->
		<section class="tw:sm:px-12 tw:px-4 tw:pb-12">
			<h1
				class="tw:sm:text-[6.4rem] tw:text-8 tw:font-normal tw:font-zalando tw:leading-tight"
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
		title: "Davies Okpeta | Projects",
		description:
			"Projects by Davies Okpeta. Portfolio showcasing work with React, Next.js, Vue, Nuxt and modern web technologies.",
		ogImage: "/images/dark-lg-logo.png",
	});
</script>

<style></style>
