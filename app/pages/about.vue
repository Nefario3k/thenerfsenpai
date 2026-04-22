<template>
	<section key="about" class="transIn">
		<!-- top section -->
		<section
			class="tw:sm:px-12 tw:px-4 tw:pb-10 tw:border-b tw:border-bc-stroke tw:overflow-hidden"
		>
			<h1
				v-gsap.splitText.words.from="{
					opacity: 0,
					x: -30,
					stagger: 0.1,
				}"
				class="tw:sm:text-[5.4rem] tw:text-8 tw:font-normal tw:font-zalando tw:leading-tight"
			>
				Meet your new<br />
				favourite developer
			</h1>
		</section>
		<!-- image section -->
		<section class="tw:sm:px-12 tw:px-4">
			<div
				class="tw:grid tw:md:grid-cols-2 tw:grid-cols-1 tw:gap-10 tw:py-16 tw:border-b tw:border-bc-stroke"
			>
				<div>
					<div class="tw:md:sticky tw:md:top-56 tw:md:left-0">
						<p
							v-gsap.from="{
								opacity: 0,
								x: -30,
								duration: 0.5,
							}"
							class="tw:font-medium tw:text-lg"
						>
							The Nerf Senpai
						</p>
						<p
							v-gsap.from="{
								opacity: 0,
								x: -30,
								duration: 0.9,
							}"
							class="tw:font-medium tw:text-base tw:text-tc-secondary"
						>
							Creative Developer
						</p>
					</div>
				</div>
				<!-- image -->
				<div
					class="tw:overflow-hidden tw:w-full tw:md:h-[73.3rem] tw:h-[44.3rem] tw:block tw:rounded-4"
				>
					<NuxtImg
						src="https://res.cloudinary.com/da7ucu50f/image/upload/q_auto/f_auto/v1776844501/DaviesOkpeta_Headshot_2026-02-02_uzyjwo.jpg"
						width="100%"
						height="100%"
						alt="TheNerfSenpai"
						class="tw:w-auto tw:h-auto tw:block tw:object-contain tw:object-top tw:rounded-4"
						v-gsap.from="{
							opacity: 0,
							scale: 1.5,
							duration: 1,
						}"
					/>
				</div>
			</div>
		</section>
		<!-- profile section -->
		<section class="tw:sm:px-12 tw:px-4">
			<div class="tw:py-16 tw:border-b tw:border-bc-stroke tw:space-y-10">
				<h2
					class="tw:sm:text-base tw:text-sm tw:font-bold tw:text-tc-primary"
					v-gsap.whenVisible.reverse.from="{
						opacity: 0.5,
						y: 30,
						duration: 0.5,
					}"
				>
					Profile ↘
				</h2>
				<div
					class="tw:sm:text-xl tw:text-base tw:font-normal tw:text-tc-secondary tw:font-verdana"
					v-gsap.whenVisible.reverse.from="{
						opacity: 0.5,
						y: 30,
						duration: 0.5,
					}"
				>
					🚀 Experienced Software Engineer | Building Scalable Systems
					<br />
					<br />
					Welcome to my profile! 👋
					<br />
					<br />
					I specialize in frontend development, focusing on scalable,
					distributed systems that deliver high performance and reliability. My
					expertise lies in crafting resilient UI with tested UX, optimizing app
					performance and DOM updates, and creating solutions for modern
					problems.
					<br />
					<br />
					<strong>💻 Frontend Development Expertise</strong>: Designing and
					implementing frontend systems for seamless user experiences, from
					eCommerce to CMS to AI.
					<br />
					<br />
					<strong>💻 Backend Development Expertise</strong>: Creating backend
					systems that form the foundation of seamless user experiences. I focus
					on solving complex problems with robust, efficient, and maintainable
					solutions.
					<br />
					<br />
					<ul class="tw:list-disc tw:list-outside tw:pl-4!">
						<li>
							<strong>Microservices Architecture</strong>: Breaking down
							monolithic systems into scalable, modular services.
						</li>
						<li>
							<strong>API Development</strong>: Designing and implementing
							high-performance, secure APIs.
						</li>
						<li>
							<strong>Database Optimization</strong>: Proficient in SQL and
							NoSQL databases, focusing on performance and scalability.
						</li>
						<li>
							<strong>Backend Solutions</strong>: Utilizing PHP/Laravel or
							Node.js to build systems that handle high volume requests and
							processes.
						</li>
					</ul>
					<br />
					📈 Driving Impact Through Thoughtful Solutions: Delivering frontend
					systems that drive measurable results, including:
					<br />
					<br />
					<ul class="tw:list-disc tw:list-outside tw:pl-4!">
						<li>
							Refactoring systems for improved scalability and performance.
						</li>
						<li>Implementing easy-to-use components in Vue.js and React.js.</li>
						<li>
							Building event-driven systems for seamless component
							communication.
						</li>
						<li>Curating dynamic content for SEO-optimized pages.</li>
						<li>
							Developing AI conversation, video, text-to-speech, and chat
							systems.
						</li>
					</ul>
					<br />
					<strong>🧠 Passion for Learning and Innovation</strong>: Staying ahead
					by exploring new tools and methodologies. Committed to delivering
					innovative solutions, whether through cutting-edge frameworks or
					enhancing legacy systems.
					<br />
					<br />
					<strong>🌍 Collaborative and Adaptable</strong>: Experienced in
					working with diverse teams, adapting to fast-paced environments, and
					valuing clear communication and teamwork.
					<br />
					<br />
					<strong>💬 Let’s Connect</strong>: Excited to collaborate on
					challenging projects, share knowledge, and connect with professionals
					passionate about engineering scalable solutions. If you’re interested
					in frontend or backend development, I’d love to hear from you!
					<br />
					<br />
					<strong>📧 Contact Me</strong>: Reach out via LinkedIn messaging or at
					<a
						href="mailto:thenerfsenpai@gmail.com"
						class="tw:text-tc-link tw:underline tw:font-medium tw:rounded-sm tw:focus-visible:outline-none tw:focus-visible:ring-2 tw:focus-visible:ring-tc-link tw:focus-visible:ring-offset-2 tw:focus-visible:ring-offset-bc-primary"
						>thenerfsenpai@gmail.com</a
					>
					for inquiries, opportunities, or just a friendly chat. <br /><br />

					Together, let’s create systems that scale and drive impact. 🌟
				</div>
			</div>
		</section>
		<!-- Tools & Tech ↘ -->
		<section class="tw:sm:px-12 tw:px-4">
			<div
				class="tw:grid tw:md:grid-cols-2 tw:grid-cols-1 tw:gap-10 tw:py-16 tw:border-b tw:border-bc-stroke"
			>
				<div>
					<h2
						v-gsap.whenVisible.reverse.from="{
							opacity: 0.5,
							y: 30,
							duration: 0.5,
						}"
						class="tw:sm:text-base tw:text-sm tw:font-bold tw:text-tc-primary tw:md:sticky tw:md:top-56 tw:md:left-0"
					>
						Tools & Tech ↘
					</h2>
				</div>
				<aside class="tw:sm:space-y-8 tw:space-y-4">
					<div
						v-for="(element, index) in techStack"
						:key="element.title"
						:class="`tw:space-y-4 ${
							index !== 0
								? 'tw:-mt-4 tw:sm:pt-8 tw:pt-4 tw:border-t-3 tw:border-solid tw:border-bc-tertiary'
								: ''
						}`"
						v-gsap.whenVisible.reverse.from="{
							opacity: 0.5,
							y: 30,
							duration: 0.5,
						}"
					>
						<h3
							class="tw:text-medium tw:sm:text-4xl tw:text-8 tw:text-tc-primary"
						>
							{{ element.title }}
						</h3>
						<div class="tw:md:columns-4 tw:sm:columns-3 tw:columns-2 tw:gap-4">
							<template v-for="item in element.content" :key="item">
								<p
									v-gsap.whenVisible.reverse.from="{
										opacity: 0.5,
										x: 30,
										duration: 0.5,
										stagger: 0.1,
									}"
									class="tw:text-sm tw:text-tc-secondary tw:font-verdana tw:pb-4"
								>
									{{ item }}
								</p>
							</template>
						</div>
					</div>
				</aside>
			</div>
		</section>
		<!-- Career ↘ -->
		<section class="tw:sm:px-12 tw:px-4">
			<div
				class="tw:grid tw:md:grid-cols-2 tw:grid-cols-1 tw:gap-10 tw:py-16 tw:border-b tw:border-bc-stroke"
			>
				<div>
					<h2
						v-gsap.whenVisible.reverse.from="{
							opacity: 0.5,
							y: 30,
							duration: 0.5,
						}"
						class="tw:sm:text-base tw:text-sm tw:font-bold tw:text-tc-primary tw:md:sticky tw:md:top-56 tw:md:left-0"
					>
						Career ↘
					</h2>
				</div>
				<aside>
					<Accordion
						type="single"
						collapsible
						class="tw:sm:space-y-8 tw:space-y-4"
						v-model="openedProject"
					>
						<AccordionItem
							v-for="(job, index) in careerHistory"
							:key="`${job.company}-${job.role}-${index}`"
							:value="index.toString()"
							:class="`tw:border-b-0 ${
								index !== 0
									? `tw:-mt-4 tw:sm:pt-8 tw:pt-4 tw:border-t-3 tw:border-solid ${
											index.toString() ===
											(parseInt(openedProject) + 1).toString()
												? 'tw:border-tc-link'
												: 'tw:border-bc-tertiary'
									  }`
									: ''
							}`"
							v-gsap.whenVisible.reverse.from="{
								opacity: 0.5,
								y: 30,
								duration: 0.5,
								stagger: 0.1,
							}"
						>
							<AccordionTrigger
								class="tw:space-y-4 tw:text-left tw:flex tw:items-center tw:justify-between tw:cursor-pointer tw:gap-4 tw:w-full tw:no-underline! tw:border-0! tw:outline-none!"
							>
								<div>
									<p
										:class="`tw:text-medium tw:sm:text-4xl tw:text-8 ${
											index.toString() === openedProject
												? 'tw:text-tc-link'
												: 'tw:text-tc-primary'
										}`"
									>
										{{ job.company }}
									</p>
									<p
										class="tw:mt-1 tw:text-base tw:font-medium tw:text-tc-secondary tw:font-zalando"
									>
										{{ job.role }}
										<span
											v-if="job.employmentType"
											class="tw:text-tc-secondary"
										>
											· {{ job.employmentType }}
										</span>
									</p>
									<p
										v-if="job.duration || job.location"
										class="tw:mt-1 tw:text-sm tw:text-tc-secondary tw:font-zalando"
									>
										<template v-if="job.duration">{{ job.duration }}</template>
										<span v-if="job.location">
											<template v-if="job.duration"> · </template
											>{{ job.location }}
										</span>
									</p>
								</div>
							</AccordionTrigger>
							<AccordionContent class="tw:border-0! tw:outline-none!">
								<ul
									class="tw:list-disc tw:list-outside tw:pl-4 tw:space-y-2 tw:text-sm tw:text-tc-secondary tw:font-verdana"
								>
									<li v-for="line in job.descriptions" :key="line">
										{{ line }}
									</li>
								</ul>
							</AccordionContent>
						</AccordionItem>
					</Accordion>
				</aside>
			</div>
		</section>
		<!-- GitHub contributions ↘ -->
		<section class="tw:sm:px-12 tw:px-4 tw:overflow-hidden">
			<div class="tw:space-y-10 tw:py-16">
				<h2
					class="tw:sm:text-base tw:text-sm tw:font-bold tw:text-tc-primary"
					v-gsap.whenVisible.reverse.from="{
						opacity: 0.5,
						x: -30,
						duration: 0.5,
					}"
				>
					GitHub contributions ↘
				</h2>
				<aside>
					<GitHubContributions
						:pending="contributionsPending"
						:error="contributionsError"
						:payload="contributionsPayload"
					/>
				</aside>
			</div>
		</section>
		<!-- break -->
		<Break />
	</section>
</template>

<script lang="ts" setup>
	import GitHubContributions from "@/components/about/GitHubContributions.vue";
	import {
		Accordion,
		AccordionContent,
		AccordionItem,
		AccordionTrigger,
	} from "@/components/ui/accordion";
	import type { GitHubContributionsResponse } from "../../shared/githubContributions";

	const { $getState } = useNuxtApp();

	const contributions = await useFetch<GitHubContributionsResponse>(
		"/api/github/contributions",
		{
			key: "github-contributions",
		}
	);

	const contributionsPending = computed(() => contributions.pending.value);
	const contributionsError = computed(() => contributions.error.value);
	const contributionsPayload = computed(() => contributions.data.value ?? null);

	const techStack = computed(() => $getState("techStack"));
	const careerHistory = computed(() => $getState("careerHistory"));

	const openedProject = ref<string>("0");
	usePortfolioSeo({
		title: "Davies Okpeta | About",
		description:
			"Senior Software Engineer. Portfolio showcasing work with React, Next.js, Vue, Nuxt and modern web technologies.",
		ogImage: "/images/dark-lg-logo.png",
	});
</script>

<style></style>
