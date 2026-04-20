<template>
	<div :class="colorSchemeClass">
		<a
			href="#main-content"
			class="skip-to-main tw:fixed tw:left-3 tw:top-3 tw:z-100 tw:-translate-y-[200%] tw:focus:translate-y-0 tw:transition-transform tw:duration-200 tw:ease-out tw:bg-bc-primary tw:text-tc-primary tw:px-4 tw:py-2 tw:rounded-sm tw:text-sm tw:font-medium tw:ring-2 tw:ring-tc-link tw:ring-offset-2 tw:ring-offset-bc-primary"
		>
			Skip to main content
		</a>
		<!-- fixed image left -->
		<Header />
		<section
			class="tw:mx-auto tw:w-full tw:max-w-640 tw:relative tw:px-3 tw:isolate"
		>
			<span
				class="tw:max-w-[16rem] tw:w-full tw:min-w-0 tw:shrink tw:bg-cover tw:bg-no-repeat bg-left-column tw:absolute tw:top-0 tw:left-0 tw:h-full tw:-z-10 tw:md:border-l tw:border-bc-stroke tw:md:border-dashed tw:border-solid"
			/>
			<main
				id="main-content"
				tabindex="-1"
				class="max-container tw:border-x tw:border-bc-stroke tw:sm:pt-22 tw:pt-10 tw:bg-bc-primary tw:min-h-screen tw:outline-none"
			>
				<slot />
				<!-- footer -->
				<Footer />
			</main>
			<span
				class="tw:max-w-[16rem] tw:w-full tw:min-w-0 tw:shrink tw:bg-cover tw:bg-no-repeat bg-right-column tw:absolute tw:top-0 tw:right-0 tw:h-full tw:-z-10 tw:md:border-r tw:border-bc-stroke tw:md:border-dashed tw:border-solid"
			/>
		</section>
	</div>
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
