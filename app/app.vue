<template>
	<NuxtLayout>
		<NuxtPage />
	</NuxtLayout>
</template>
<script setup lang="ts">
	const { manifestHref } = useThemeManifest();
	usePortfolioSeo();
	useStructuredData();
	useHead({
		link: [{ rel: "manifest", href: manifestHref }],
	});
</script>
