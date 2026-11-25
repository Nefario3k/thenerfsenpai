<template>
	<div v-if="message" :id="id" role="alert" :class="errorClass">
		<SolarDangerTriangle weight="Broken" />
		<p class="tw:text-sm tw:font-bold tw:font-verdana tw:text-red-500">
			{{ message }}
		</p>
	</div>
</template>

<script lang="ts" setup>
	import { cn } from "~/lib/utils";

	interface FormErrorProps {
		message?: string | null;
		id?: string;
		class?: string;
	}

	const props = withDefaults(defineProps<FormErrorProps>(), {
		message: "",
		id: "",
		class: "",
	});

	const errorClass = computed(() =>
		cn(
			"transIn tw:text-sm tw:font-bold tw:font-verdana tw:text-red-500 tw:mt-1 tw:flex tw:items-center tw:gap-2",
			props.class
		)
	);
</script>
