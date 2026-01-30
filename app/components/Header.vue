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
		<!-- sticky top -->
		<header
			class="tw:sticky tw:top-0 tw:left-0 tw:bg-bc-primary tw:px-3 tw:py-8 tw:w-full"
		>
			<div class="max-container">
				<NuxtLink to="/" class="tw:text-tc-primary tw:text-2xl tw:font-bold">
					TheNerfSenpai
				</NuxtLink>
			</div>
		</header>
	</section>
</template>

<script lang="ts" setup>
	const isDark = useDark();
</script>

<style></style>
