<template>
	<section
		class="tw:sm:px-12 tw:px-4 tw:sm:mb-[12rem] tw:mb-15 tw:grid tw:md:grid-cols-2 tw:grid-cols-1 tw:gap-4 tw:sm:mt-12 tw:mt-8"
	>
		<div>
			<h2
				v-gsap.whenVisible.reverse.from="{
					opacity: 0,
					x: -30,
					duration: 0.5,
				}"
				class="tw:sm:text-base tw:text-sm tw:font-bold tw:text-tc-primary tw:shrink-0 tw:md:sticky tw:md:top-56 tw:md:left-0"
			>
				Focus ↘
			</h2>
		</div>
		<aside class="tw:sm:space-y-8 tw:space-y-4">
			<p
				v-for="(element, index) in focusElements"
				:key="element"
				:class="`tw:text-medium tw:sm:text-4xl tw:text-8 tw:text-tc-primary ${
					index !== 0
						? 'tw:sm:pt-8 tw:pt-4 tw:border-t-3 tw:border-solid tw:border-bc-tertiary'
						: ''
				}`"
				v-gsap.whenVisible.reverse.from="{
					opacity: 0.5,
					y: 30,
					duration: 0.5,
				}"
			>
				{{ element }}
			</p>
		</aside>
	</section>
</template>

<script lang="ts" setup>
	const focusElements = ref<string[]>([
		"Mission-Critical Software Engineering",
		"Fullstack Web Development",
		"Frontend Development",
		"Backend Development",
		"Database Management",
		"DevOps",
	]);
</script>

<style></style>
