<template>
	<section
		v-if="list.length > 0"
		class="tw:relative tw:md:p-12 tw:p-4 tw:isolate"
	>
		<div
			v-for="dimension in dimensionDivClasses"
			:class="dimension"
			:key="dimension"
		/>
		<div
			class="tw:absolute tw:left-0 tw:top-0 tw:w-full tw:h-full tw:-z-10 tw:sm:space-y-[51.2rem] tw:space-y-152"
		>
			<template v-for="i in lineLength" :key="i">
				<div
					class="tw:border-y tw:border-bc-stroke tw:md:border-dashed tw:border-solid tw:w-full tw:md:h-12 tw:h-4"
				/>
			</template>
		</div>
		<section
			class="tw:grid tw:md:grid-cols-2 tw:grid-cols-1 tw:md:gap-12 tw:gap-4"
		>
			<template v-for="item in list" :key="item.slug">
				<NuxtLink
					:to="`/projects/${item.slug}`"
					:aria-label="`View project: ${item.title}`"
					title="View Project"
					class="tw:bg-bc-primary-2 tw:sm:h-[51.2rem] tw:h-152 tw:w-full tw:md:p-8 tw:p-4 tw:relative tw:group tw:cursor-pointer tw:overflow-hidden"
					@click="$scrollPageToTop()"
					v-gsap.whenVisible.reverse.from="{
						opacity: 0,
						scale: 0.9,
						duration: 0.8,
					}"
				>
					<!-- image section -->
					<section
						class="tw:w-full tw:sm:h-[30.7rem] tw:h-86 tw:overflow-hidden tw:mb-5 useNestedTransition flex_center"
					>
						<NuxtImg
							:src="item.images.banner"
							:alt="`${item.title} banner image`"
							class="tw:w-full! tw:h-full! tw:object-fill tw:object-top tw:md:scale-100 tw:md:group-hover:scale-105"
							fit="fill"
							quality="50"
							format="webp"
							placeholder
							loading="lazy"
						/>
					</section>
					<!-- title section -->
					<h3
						class="tw:text-2xl tw:font-bold tw:group-hover:text-tc-link useNestedTransition tw:sm:line-clamp-3 tw:line-clamp-1"
						:title="item.title"
					>
						{{ item.title }}
					</h3>
					<p
						class="tw:text-sm tw:text-tc-secondary tw:sm:line-clamp-5 tw:line-clamp-3"
						:title="item.description"
					>
						{{ item.description }}
					</p>
					<!-- decorative arrow (card is a single link; avoid nested interactive elements) -->
					<span
						aria-hidden="true"
						class="flex_center tw:w-8 tw:h-8 tw:bg-tc-link tw:absolute tw:top-2 tw:right-2 tw:group-hover:w-16 tw:group-hover:h-16 tw:group-hover:bg-tc-link-2 useCubicNestedTransition tw:pointer-events-none"
					>
						<svg
							width="23"
							height="23"
							viewBox="0 0 23 23"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							class="tw:w-6 tw:h-6 tw:block tw:-rotate-45 tw:group-hover:w-12 tw:group-hover:h-12 tw:group-hover:rotate-0"
						>
							<path
								d="M17.3241 11.6672L12.7279 16.2634C12.6341 16.3572 12.5069 16.4099 12.3743 16.4099C12.2417 16.4099 12.1145 16.3572 12.0208 16.2634C11.927 16.1697 11.8743 16.0425 11.8743 15.9099C11.8743 15.7773 11.927 15.6501 12.0208 15.5563L15.7636 11.8135L5.65682 11.814C5.52414 11.814 5.39689 11.7613 5.30307 11.6674C5.20925 11.5736 5.15654 11.4464 5.15654 11.3137C5.15654 11.181 5.20925 11.0538 5.30307 10.9599C5.39689 10.8661 5.52414 10.8134 5.65682 10.8134L15.7636 10.8138L12.0208 7.07104C11.927 6.97727 11.8743 6.8501 11.8743 6.71749C11.8743 6.58488 11.927 6.4577 12.0208 6.36393C12.1145 6.27017 12.2417 6.21749 12.3743 6.21749C12.5069 6.21749 12.6341 6.27017 12.7279 6.36393L17.3241 10.9601C17.4178 11.0539 17.4705 11.1811 17.4705 11.3137C17.4705 11.4463 17.4178 11.5735 17.3241 11.6672Z"
								fill="var(--tw-color-bc-secondary)"
							/>
						</svg>
					</span>
				</NuxtLink>
			</template>
		</section>
	</section>
</template>

<script lang="ts" setup>
	interface TypeProps {
		list?: TypeProjects[];
	}
	const props = withDefaults(defineProps<TypeProps>(), {
		list: () => [],
	});
	const { $getState } = useNuxtApp();

	const viewportWidth = computed(() => $getState("viewportWidth"));

	const dimensionDivClasses = ref([
		"tw:border-r tw:border-bc-stroke tw:md:border-dashed tw:border-solid tw:absolute tw:left-0 tw:top-0 tw:md:w-12 tw:w-4 tw:h-full",
		"tw:border-l tw:border-bc-stroke tw:md:border-dashed tw:border-solid tw:absolute tw:right-0 tw:top-0 tw:md:w-12 tw:w-4 tw:h-full",
		"tw:border-x tw:border-bc-stroke tw:md:border-dashed tw:border-solid tw:absolute tw:left-1/2 tw:-translate-x-1/2 tw:top-0 tw:md:w-12 tw:w-4 tw:h-full tw:md:block tw:hidden",
	]);
	const lineLength = computed(() =>
		viewportWidth.value && viewportWidth.value >= 960
			? Math.round(props.list.length / 2 + 1)
			: props.list.length + 1
	);
</script>

<style></style>
