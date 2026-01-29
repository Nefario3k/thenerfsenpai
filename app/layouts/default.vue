<template>
	<section>
		<!-- fixed image left -->
		<!-- <NuxtImg
			src="/images/dark-left-column.png"
			alt="TheNerfSenpai"
			width="{100}"
			height="{100}"
			class="tw:fixed tw:top-0 tw:left-0 tw:w-auto tw:h-dvh tw:object-cover"
		/> -->
		<Header />
		<slot />
	</section>
</template>

<script lang="ts" setup>
	const colorScheme = useDark();
</script>

<style></style>
