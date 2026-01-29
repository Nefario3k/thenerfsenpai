<template>
	<NuxtLayout>
		<NuxtPage />
	</NuxtLayout>
</template>
<script setup lang="ts">
	const { manifestHref } = useThemeManifest();

	useHead({
		link: [{ rel: "manifest", href: manifestHref }],
	});
</script>
