<script setup lang="ts">
	import type { AccordionContentProps } from "reka-ui";
	import type { HTMLAttributes } from "vue";
	import { reactiveOmit } from "@vueuse/core";
	import { AccordionContent } from "reka-ui";
	import { cn } from "@/lib/utils";

	const props = defineProps<
		AccordionContentProps & { class?: HTMLAttributes["class"] }
	>();

	const delegatedProps = reactiveOmit(props, "class");
</script>

<template>
	<AccordionContent
		data-slot="accordion-content"
		v-bind="delegatedProps"
		class="tw:data-[state=closed]:animate-accordion-up tw:data-[state=open]:animate-accordion-down tw:overflow-hidden tw:text-sm"
	>
		<div :class="cn('tw:pt-0 tw:pb-4', props.class)">
			<slot />
		</div>
	</AccordionContent>
</template>
