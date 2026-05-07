<template>
	<section key="home" class="transIn">
		<!-- top section -->
		<section class="tw:sm:px-12 tw:px-4 tw:pb-12">
			<div class="tw:flex tw:items-center tw:gap-3 tw:sm:mb-66 tw:mb-60">
				<NuxtImg
					src="https://res.cloudinary.com/da7ucu50f/image/upload/q_auto/f_auto/DaviesOkpeta_Headshot_2026-02-02_uzyjwo.jpg"
					width="100%"
					height="100%"
					alt="TheNerfSenpai: Davies Okpeta profile picture"
					class="tw:sm:max-w-24 tw:sm:max-h-24 tw:max-w-16 tw:max-h-16 tw:w-auto! tw:h-auto! tw:block tw:object-cover tw:object-top tw:rounded-4 tw:aspect-square tw:shrink-0"
				/>
				<div>
					<p class="tw:font-medium tw:text-lg">The Nerf Senpai</p>
					<p class="tw:font-medium tw:text-base tw:text-tc-secondary">
						Creative Developer
					</p>
				</div>
			</div>

			<h1
				v-gsap.splitText.words.from="{
					opacity: 0,
					x: -30,
					stagger: 0.1,
				}"
				class="tw:sm:text-[5.4rem] tw:text-8 tw:font-normal tw:font-zalando tw:leading-tight tw:max-w-7xl"
			>
				Building mission-critical software with masterful engineering,
				purposeful design, and reliable functionality.
				<!-- Delivering mission-critical systems through disciplined engineering,
				intentional design, and dependable behavior. -->
			</h1>
		</section>
		<!-- mini projects section -->
		<ProjectWrapper :list="projects" />
		<!-- link -->
		<NuxtLink
			to="/projects"
			class="tw:text-sm tw:hover:text-tc-link tw:font-medium flex_center tw:h-11 tw:w-full useNestedTransition tw:rounded-sm tw:focus-visible:outline-none tw:focus-visible:ring-2 tw:focus-visible:ring-tc-link tw:focus-visible:ring-offset-2 tw:focus-visible:ring-offset-bc-primary"
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
	const { $getState } = useNuxtApp();
	const projects = computed(() => $getState("projects").slice(0, 4));
	usePortfolioSeo({
		title: "Davies Okpeta | Creative Developer",
		description:
			"Senior Fullstack Web Developer. Portfolio showcasing work with React, Next.js, Vue, Nuxt and modern web technologies.",
		ogImage: "/images/dark-lg-logo.png",
	});
</script>

<style></style>
