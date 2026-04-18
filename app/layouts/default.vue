<template>
	<section :class="colorSchemeClass">
		<!-- fixed image left -->
		<Header />
		<section
			class="tw:mx-auto tw:w-full tw:max-w-640 tw:relative tw:px-3 tw:isolate"
		>
			<span
				class="tw:max-w-[16rem] tw:w-full tw:min-w-0 tw:shrink tw:bg-cover tw:bg-no-repeat bg-left-column tw:absolute tw:top-0 tw:left-0 tw:h-full tw:-z-10 tw:md:border-l tw:border-bc-stroke tw:md:border-dashed tw:border-solid"
			/>
			<main
				class="max-container tw:border-x tw:border-bc-stroke tw:sm:pt-22 tw:pt-10 tw:bg-bc-primary tw:min-h-screen"
			>
				<slot />
				<!-- footer -->
				<Footer />
			</main>
			<span
				class="tw:max-w-[16rem] tw:w-full tw:min-w-0 tw:shrink tw:bg-cover tw:bg-no-repeat bg-right-column tw:absolute tw:top-0 tw:right-0 tw:h-full tw:-z-10 tw:md:border-r tw:border-bc-stroke tw:md:border-dashed tw:border-solid"
			/>
		</section>
	</section>
</template>

<script lang="ts" setup>
	const colorScheme = useCookie<ColorScheme>("colorScheme");

	const colorSchemeClass = computed(() =>
		(colorScheme.value ?? "light") === "dark" ? "DARK-MODE" : "LIGHT-MODE"
	);

	onMounted(() => {
		if (!colorScheme.value && typeof window !== "undefined") {
			colorScheme.value = window.matchMedia("(prefers-color-scheme: dark)")
				.matches
				? "dark"
				: "light";
		}
	});
</script>

<style></style>
