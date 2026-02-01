<template>
	<NuxtLayout>
		<NuxtPage />
	</NuxtLayout>
</template>
<script setup lang="ts">
	const { manifestHref } = useThemeManifest();
	const { $setState } = useNuxtApp();

	function updateViewportWidth() {
		$setState("viewportWidth", window.innerWidth);
	}
	usePortfolioSeo();
	useStructuredData();
	useHead({
		link: [{ rel: "manifest", href: manifestHref }],
	});
	onMounted(() => {
		$setState("viewportWidth", window.innerWidth);
		window.addEventListener("resize", updateViewportWidth);
	});
	onUnmounted(() => {
		window.removeEventListener("resize", updateViewportWidth);
	});
</script>
