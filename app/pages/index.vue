<template>
	<section>
		<!-- top section -->
		<section class="tw:sm:px-12 tw:px-8 tw:pb-12">
			<div class="tw:flex tw:items-center tw:gap-3 tw:mb-66">
				<NuxtImg
					src="/images/temp/user.jpg"
					width="100"
					height="100"
					alt="TheNerfSenpai"
					class="tw:w-24 tw:h-24 tw:min-w-24 tw:block tw:object-cover tw:object-center tw:rounded-4"
				/>
				<div>
					<h3 class="tw:font-medium tw:text-lg">The Nerf Senpai</h3>
					<h4 class="tw:font-medium tw:text-base">Creative Developer</h4>
				</div>
			</div>

			<h1 class="tw:text-[6.4rem] tw:font-normal tw:font-zalando tw:leading-16">
				Building immersive digital<br />
				interfaces with mastery<br />
				and purposeful design.
			</h1>
		</section>
		<!-- mini projects section -->
		<ProjectWrapper />
	</section>
</template>

<script lang="ts" setup>
	usePortfolioSeo({
		title: "Davies Okpeta",
		description:
			"Senior Fullstack Web Developer. Portfolio showcasing work with React, Next.js, Vue, Nuxt and modern web technologies.",
		ogImage: "/images/dark-lg-logo.png",
	});
</script>

<style></style>
