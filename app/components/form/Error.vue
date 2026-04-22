<template>
	<p v-if="message" :id="id" role="alert" :class="errorClass">
		{{ message }}
	</p>
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
			"transIn tw:text-sm tw:font-bold tw:font-verdana tw:text-red-500",
			props.class
		)
	);
</script>
