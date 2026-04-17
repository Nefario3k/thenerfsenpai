<template>
	<section>
		<!-- top section -->
		<section class="tw:sm:px-12 tw:px-4 tw:pb-12">
			<div class="tw:flex tw:items-center tw:gap-3 tw:sm:mb-66 tw:mb-60">
				<NuxtImg
					src="/images/temp/user.jpg"
					width="100"
					height="100"
					alt="TheNerfSenpai"
					class="tw:sm:w-24 tw:sm:h-24 tw:w-16 tw:h-16 tw:block tw:object-cover tw:object-center tw:rounded-4 tw:aspect-square tw:shrink-0"
				/>
				<div>
					<h3 class="tw:font-medium tw:text-lg">The Nerf Senpai</h3>
					<h4 class="tw:font-medium tw:text-base tw:text-tc-secondary">
						Creative Developer
					</h4>
				</div>
			</div>

			<h1
				class="tw:sm:text-[6.4rem] tw:text-8 tw:font-normal tw:font-zalando tw:leading-tight"
			>
				Building immersive digital<br />
				interfaces with mastery<br />
				and purposeful design.
			</h1>
		</section>
		<!-- mini projects section -->
		<ProjectWrapper />
		<!-- link -->
		<NuxtLink
			to="/projects"
			class="tw:text-sm tw:hover:text-tc-link tw:font-medium flex_center tw:h-11 tw:w-full"
		>
			More Projects →
		</NuxtLink>
		<!-- break -->
		<Break />
		<!-- focus section -->
		<HomeFocus />
		<!-- facts section -->
		<HomeFacts />
		<!-- testimonials section -->
		<HomeTestimonials />
		<!-- break -->
		<Break />
	</section>
</template>

<script lang="ts" setup>
	usePortfolioSeo({
		title: "Davies Okpeta | Mission-Critical Software Engineer",
		description:
			"Senior Fullstack Web Developer. Portfolio showcasing work with React, Next.js, Vue, Nuxt and modern web technologies.",
		ogImage: "/images/dark-lg-logo.png",
	});
</script>

<style></style>
