<template>
	<section v-if="project" :key="project.slug" class="transIn"></section>
</template>

<script lang="ts" setup>
	const { $getState } = useNuxtApp();
	const route = useRoute();
	const project = computed(() =>
		$getState("projects").find(
			(project: TypeProjects) => project.slug === route.params.slug
		)
	);
	if (!project.value) {
		throw createError({
			statusCode: 404,
			statusMessage: "Project not found",
		});
	}
</script>

<style></style>
