<template>
	<section>
		<!-- fixed image left -->
		<Header />
		<section
			class="tw:mx-auto tw:w-full tw:max-w-640 tw:relative tw:px-3 tw:isolate"
		>
			<span
				class="tw:max-w-[16rem] tw:w-full tw:min-w-0 tw:shrink tw:bg-cover tw:bg-no-repeat bg-left-column tw:transition-none! tw:absolute tw:top-0 tw:left-0 tw:h-full tw:-z-10 tw:border-l tw:border-bc-stroke tw:border-dashed"
			/>
			<main
				class="max-container tw:border-x tw:border-dashed tw:border-bc-stroke tw:py-22 tw:transition-none! tw:bg-bc-primary tw:min-h-screen"
			>
				<slot />
			</main>
			<span
				class="tw:max-w-[16rem] tw:w-full tw:min-w-0 tw:shrink tw:bg-cover tw:bg-no-repeat bg-right-column tw:transition-none! tw:absolute tw:top-0 tw:right-0 tw:h-full tw:-z-10 tw:border-r tw:border-bc-stroke tw:border-dashed"
			/>
		</section>
	</section>
</template>

<script lang="ts" setup>
	const colorScheme = useDark();
</script>

<style></style>
