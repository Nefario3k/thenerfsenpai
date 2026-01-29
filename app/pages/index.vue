<template>
	<div>
		<h1 class="tw:text-3xl tw:font-bold tw:text-tc-primary">Color Scheme</h1>
	</div>
</template>

<script lang="ts" setup>
	const colorScheme = useDark();
	usePortfolioSeo({
		title: "Davies Okpeta",
		description:
			"Senior Fullstack Web Developer. Portfolio showcasing work with React, Next.js, Vue, Nuxt and modern web technologies.",
		ogImage: "/images/dark-lg-logo.png",
	});
</script>

<style></style>
