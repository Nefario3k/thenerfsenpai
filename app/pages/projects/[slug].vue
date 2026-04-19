<template>
	<section v-if="project" :key="project.slug" class="transIn">
		<!-- top section -->
		<section
			class="tw:sm:px-12 tw:px-4 tw:md:pb-12 tw:pb-10 tw:space-y-10 tw:border-b tw:border-bc-stroke"
		>
			<!-- logo -->
			<div class="tw:flex tw:gap-3 tw:items-center">
				<NuxtImg
					v-if="project.images.icon"
					:src="project.images.icon"
					width="100%"
					height="100%"
					alt="Project logo`"
					class="tw:w-auto tw:min-w-10 tw:h-full tw:max-h-20 tw:object-contain tw:object-center tw:shrink-0"
					densities="x1 x2"
					preload
					placeholder
					fit="cover"
					quality="100"
				/>
				<h1
					class="tw:sm:text-[6.4rem] tw:text-8 tw:font-normal tw:font-zalando tw:leading-tight"
				>
					{{ project.title }}
				</h1>
			</div>
			<!-- image -->
			<section
				class="tw:w-full tw:sm:h-[66.1rem] tw:h-70 tw:overflow-hidden tw:shadow"
			>
				<NuxtImg
					:src="project.images.banner"
					width="100%"
					height="100%"
					:alt="`${project.title} banner image`"
					class="tw:w-full tw:h-full tw:object-cover tw:object-top"
					densities="x1 x2"
					loading="lazy"
					placeholder
					fit="cover"
					quality="100"
				/>
			</section>
			<!-- client section -->
			<section class="tw:space-y-5">
				<section
					class="tw:grid tw:grid-cols-1 tw:md:grid-cols-4 tw:sm:grid-cols-2 tw:gap-5"
				>
					<template v-for="item in clientData" :key="item.label">
						<div class="tw:flex tw:flex-col">
							<span
								class="tw:text-sm tw:font-medium tw:text-tc-secondary tw:uppercase tw:font-inter"
								>{{ item.label }}</span
							>
							<span
								class="tw:text-base tw:text-tc-primary tw:first-letter:uppercase tw:font-inter"
								>{{ item.value || "N/A" }}</span
							>
						</div>
					</template>
				</section>
				<!-- link -->
				<a
					:href="project.link"
					target="_blank"
					title="Visit Live Project"
					class="tw:text-sm tw:py-3 tw:text-tc-link tw:font-medium useNestedTransition tw:hover:text-tc-link-2 tw:border-b tw:border-transparent tw:border-dashed tw:hover:border-tc-link-2"
					v-if="project.link"
				>
					Visit Live Project →
				</a>
			</section>
		</section>
		<!-- info section -->
		<section
			class="tw:sm:px-12 tw:px-4 tw:md:py-16 tw:py-10 tw:md:space-y-20 tw:space-y-10"
		>
			<!-- intro -->
			<div class="tw:grid tw:md:grid-cols-2 tw:grid-cols-1 tw:gap-4">
				<div>
					<p
						class="tw:sm:text-base tw:text-sm tw:font-bold tw:text-tc-primary tw:shrink-0 tw:md:sticky tw:md:top-56 tw:md:left-0"
					>
						Intro ↘
					</p>
				</div>
				<aside class="">
					<p
						class="tw:text-normal tw:sm:text-lg tw:text-sm tw:text-tc-secondary tw:first-letter:uppercase"
					>
						{{ project.description }}
					</p>
				</aside>
			</div>
			<!-- intro image -->
			<section
				class="tw:w-full tw:sm:h-[66.1rem] tw:h-70 tw:overflow-hidden tw:shadow"
			>
				<NuxtImg
					:src="project.images.intro"
					width="100%"
					height="100%"
					alt="Intro banner image`"
					class="tw:w-full tw:h-full tw:object-cover tw:object-top"
					densities="x1 x2"
					loading="lazy"
					placeholder
					fit="cover"
					quality="100"
				/>
			</section>
			<!-- challenges -->
			<div class="tw:grid tw:md:grid-cols-2 tw:grid-cols-1 tw:gap-4">
				<div>
					<p
						class="tw:sm:text-base tw:text-sm tw:font-bold tw:text-tc-primary tw:shrink-0 tw:md:sticky tw:md:top-56 tw:md:left-0"
					>
						Challenges ↘
					</p>
				</div>
				<aside class="tw:space-y-6">
					<p
						class="tw:text-normal tw:sm:text-lg tw:text-sm tw:text-tc-primary tw:first-letter:uppercase"
					>
						{{ project.challenge.title }}
					</p>
					<ul class="tw:list-disc tw:list-outside tw:space-y-2 tw:pl-6">
						<li
							v-for="challenge in project.challenge.contents"
							:key="challenge"
							class="tw:text-sm tw:text-tc-secondary tw:first-letter:uppercase"
						>
							{{ challenge }}
						</li>
					</ul>
				</aside>
			</div>
			<!-- challenges images -->
			<div
				v-if="
					project.images.challenges && project.images.challenges?.length > 0
				"
				class="tw:grid tw:md:grid-cols-2 tw:grid-cols-1 tw:gap-4"
			>
				<div
					v-for="(image, index) in project.images.challenges"
					:key="`image-${index}`"
					v-gsap.stagger.whenVisible.once.from="{
						opacity: 0,
						x: 50,
						duration: `${(index + 1) * 0.5}`,
						stagger: `${(index + 1) * 12}`,
					}"
				>
					<div class="tw:md:h-150 tw:h-96 tw:overflow-hidden tw:shadow">
						<NuxtImg
							:src="image"
							width="100%"
							height="100%"
							alt="Challenges image`"
							class="tw:w-full tw:h-full tw:object-cover tw:object-center"
							densities="x1 x2"
							loading="lazy"
							placeholder
							fit="cover"
							quality="100"
						/>
					</div>
				</div>
			</div>
			<!-- Technologies -->
			<div class="tw:grid tw:md:grid-cols-2 tw:grid-cols-1 tw:gap-4">
				<div>
					<p
						class="tw:sm:text-base tw:text-sm tw:font-bold tw:text-tc-primary tw:shrink-0 tw:md:sticky tw:md:top-56 tw:md:left-0"
					>
						Technologies ↘
					</p>
				</div>
				<aside class="">
					<p
						class="tw:text-normal tw:sm:text-lg tw:text-sm tw:text-tc-secondary tw:first-letter:uppercase"
					>
						{{ project.technology }}
					</p>
				</aside>
			</div>
			<!-- technology image -->
			<section
				class="tw:w-full tw:sm:h-[66.1rem] tw:h-70 tw:overflow-hidden tw:shadow"
			>
				<NuxtImg
					:src="project.images.technology"
					width="100%"
					height="100%"
					alt="Technology banner image`"
					class="tw:w-full tw:h-full tw:object-cover tw:object-top"
					densities="x1 x2"
					loading="lazy"
					placeholder
					fit="cover"
					quality="100"
				/>
			</section>
			<!-- solution -->
			<div class="tw:grid tw:md:grid-cols-2 tw:grid-cols-1 tw:gap-4">
				<div>
					<p
						class="tw:sm:text-base tw:text-sm tw:font-bold tw:text-tc-primary tw:shrink-0 tw:md:sticky tw:md:top-56 tw:md:left-0"
					>
						Solution ↘
					</p>
				</div>
				<aside class="tw:space-y-6">
					<p
						class="tw:text-normal tw:sm:text-lg tw:text-sm tw:text-tc-primary tw:first-letter:uppercase"
					>
						{{ project.solution.title }}
					</p>
					<p
						class="tw:text-normal tw:sm:text-lg tw:text-sm tw:text-tc-primary tw:first-letter:uppercase"
					>
						Deliverables:
					</p>
					<ul class="tw:list-disc tw:list-outside tw:space-y-2 tw:pl-6">
						<li
							v-for="deliverable in project.solution.deliverables"
							:key="deliverable"
							class="tw:text-sm tw:text-tc-secondary tw:first-letter:uppercase"
						>
							{{ deliverable }}
						</li>
					</ul>
					<p
						class="tw:text-normal tw:sm:text-lg tw:text-sm tw:text-tc-primary tw:first-letter:uppercase"
					>
						Impact:
					</p>
					<ul class="tw:list-disc tw:list-outside tw:space-y-2 tw:pl-6">
						<li
							v-for="impact in project.solution.impact"
							:key="impact"
							class="tw:text-sm tw:text-tc-secondary tw:first-letter:uppercase"
						>
							{{ impact }}
						</li>
					</ul>
				</aside>
			</div>
		</section>
		<!-- related works -->
		<section
			v-if="relatedWorks.length > 0"
			class="tw:border-t tw:border-bc-stroke"
		>
			<h4
				class="tw:sm:px-12 tw:px-4 tw:py-4 tw:text-sm tw:text-tc-secondary tw:font-medium"
			>
				Related Works ↘
			</h4>
			<ProjectWrapper :list="relatedWorks" />
		</section>
		<!-- break -->
		<Break :class="relatedWorks.length > 0 ? 'tw:border-t-0!' : ''" />
	</section>
</template>

<script lang="ts" setup>
	const { $getState } = useNuxtApp();
	const route = useRoute();
	const project = computed(() =>
		$getState("projects").find(
			(project: TypeProjects) => project.slug === route.params.slug
		)
	);
	if (!project.value) {
		throw createError({
			statusCode: 404,
			statusMessage: "Project not found",
		});
	}
	const clientData = computed(() => {
		return [
			{
				label: "Client",
				value: project.value?.client,
			},
			{
				label: "Type",
				value: project.value?.type,
			},
			{
				label: "Duration",
				value: project.value?.duration,
			},
			{
				label: "Year",
				value: project.value?.year,
			},
		];
	});
	const relatedWorks = computed(() => {
		return $getState("projects").filter(
			(item: TypeProjects) =>
				item.type === project.value?.type && item.slug !== project.value?.slug
		);
	});
</script>

<style></style>
