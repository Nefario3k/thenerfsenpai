<template>
	<section>
		<!-- nice image banner -->
		<NuxtImg
			:src="`/images/${isDark ? 'dark' : 'light'}-header.png`"
			alt="TheNerfSenpai"
			width="{100}"
			height="{100}"
			class="tw:w-full tw:h-11 tw:object-cover"
		/>
	</section>
</template>

<script lang="ts" setup>
	const isDark = useDark();
</script>

<style></style>
