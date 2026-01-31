<template>
	<section class="">
		<!-- fixed image left -->
		<!-- <NuxtImg
			src="/images/dark-left-column.png"
			alt="TheNerfSenpai"
			width="{100}"
			height="{100}"
			class="tw:fixed tw:top-0 tw:left-0 tw:w-auto tw:h-dvh tw:object-cover"
		/> -->
		<Header />
		<section class="tw:px-3 tw:flex-auto">
			<main
				class="max-container tw:border-x tw:border-dashed tw:border-bc-stroke tw:min-h-screen tw:py-22"
			>
				<slot />
			</main>
		</section>
	</section>
</template>

<script lang="ts" setup>
	const colorScheme = useDark();
</script>

<style></style>
