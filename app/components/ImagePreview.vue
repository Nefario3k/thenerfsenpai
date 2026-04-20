<template>
	<NuxtImg v-bind="props" :class="computedClass" @click="handleClick" />
</template>

<script lang="ts" setup>
	import { cn } from "~/lib/utils";
	interface TypeProps {
		src: string;
		alt: string;
		class?: string;
		width?: number | string;
		height?: number | string;
		fit?: "cover" | "contain" | "fill" | "inside" | "outside";
		quality?: number | string;
		preload?: boolean;
		placeholder?: boolean;
		densities?: string;
	}

	const props = withDefaults(defineProps<TypeProps>(), {
		src: "",
		alt: "",
		class: "",
		width: "100%",
		height: "100%",
		fit: "cover",
		quality: "100",
		preload: true,
		placeholder: true,
		densities: "x1 x2",
	});
	const { $setState } = useNuxtApp();

	const computedClass = computed(() => {
		return cn(props.class, "tw:block tw:cursor-pointer");
	});
	const handleClick = () => {
		$setState("backgroundBlur", props.src);
	};
</script>

<style></style>
