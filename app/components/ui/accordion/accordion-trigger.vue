<script setup lang="ts">
	import type { AccordionTriggerProps } from "reka-ui";
	import type { HTMLAttributes } from "vue";
	import { reactiveOmit } from "@vueuse/core";
	import { AccordionHeader, AccordionTrigger } from "reka-ui";
	import { cn } from "@/lib/utils";

	const props = defineProps<
		AccordionTriggerProps & { class?: HTMLAttributes["class"] }
	>();

	const delegatedProps = reactiveOmit(props, "class");
</script>

<template>
	<AccordionHeader class="flex">
		<AccordionTrigger
			data-slot="accordion-trigger"
			v-bind="delegatedProps"
			:class="
				cn(
					'tw:focus-visible:border-ring tw:focus-visible:ring-ring/50 tw:flex tw:flex-1 tw:items-start tw:justify-between tw:gap-4 tw:rounded-md tw:py-4 tw:text-left tw:text-sm tw:font-medium tw:transition-all tw:outline-none tw:hover:underline tw:focus-visible:ring-[3px] tw:disabled:pointer-events-none tw:disabled:opacity-50 tw:[&[data-state=open]>svg]:rotate-180 tw:[&[data-state=open]>svg]:text-tc-link',
					props.class
				)
			"
		>
			<slot />
			<slot name="icon">
				<SolarAltArrowDown
					class="tw:text-muted-foreground tw:pointer-events-none tw:size-6 tw:shrink-0 tw:translate-y-0.5 tw:transition-transform tw:duration-200"
					weight="BoldDuotone"
				/>
			</slot>
		</AccordionTrigger>
	</AccordionHeader>
</template>
