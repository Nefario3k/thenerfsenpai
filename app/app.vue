<template>
	<lenis :options="lenisOptions">
		<NuxtLayout>
			<NuxtPage />
		</NuxtLayout>
	</lenis>
</template>
<script setup lang="ts">
	const { manifestHref } = useThemeManifest();
	const { $setState } = useNuxtApp();

	function updateViewportWidth() {
		$setState("viewportWidth", window.innerWidth);
	}
	usePortfolioSeo();
	useStructuredData();

	const prefersReducedMotion = inject<Ref<boolean>>(
		"prefersReducedMotion",
		ref(false)
	);
	const lenisOptions = computed(() => ({
		smooth: !prefersReducedMotion.value,
		duration: 1.2,
		autoRaf: true,
		direction: "vertical" as const,
	}));
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
