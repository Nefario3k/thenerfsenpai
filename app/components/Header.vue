<template>
	<section>
		<!-- nice image banner -->
		<aside
			class="bg-header tw:w-full tw:h-11 tw:bg-no-repeat tw:bg-cover"
		></aside>

		<!-- sticky top -->
		<header
			class="tw:sticky tw:top-0 tw:left-0 tw:bg-bc-primary tw:px-3 tw:py-8 tw:w-full tw:border-b tw:border-bc-stroke tw:border-dashed"
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
