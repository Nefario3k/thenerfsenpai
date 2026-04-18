<template>
	<section class="tw:mb-4 tw:overflow-hidden">
		<p
			class="tw:sm:text-base tw:text-sm tw:font-bold tw:text-tc-primary tw:mb-4 tw:sm:px-12 tw:px-4"
		>
			Testimonials ↘
		</p>
		<section class="tw:sm:py-8 tw:space-y-16">
			<HorizontalScroll ref="horizontalScrollRef" @metrics="onMetrics">
				<div
					class="tw:grid tw:gap-8 tw:grid-flow-col tw:min-w-max tw:sm:px-12 tw:px-4"
				>
					<div
						v-for="(testimonial, testimonialIndex) in testimonials"
						:key="testimonial.name"
					>
						<div
							class="tw:md:w-200 tw:w-[36.6rem] tw:min-w-min tw:h-full tw:min-h-200 tw:border tw:border-tc-tertiary tw:relative tw:md:p-8 tw:p-5 tw:flex tw:flex-col tw:justify-between tw:gap-10 tw:isolate tw:group useNestedTransition"
						>
							<!-- dots -->
							<div
								v-for="i in 4"
								:key="i"
								class="tw:absolute tw:md:w-5 tw:md:h-5 tw:w-3.5 tw:h-3.5 tw:md:group-hover:w-full tw:md:group-hover:h-full tw:-z-10"
								:class="{
									'tw:left-0 tw:top-0': i === 1,
									'tw:right-0 tw:top-0': i === 2,
									'tw:left-0 tw:bottom-0': i === 3,
									'tw:right-0 tw:bottom-0': i === 4,
									'tw:bg-bc-1': testimonialIndex % 3 === 0,
									'tw:bg-bc-2': testimonialIndex % 3 === 1,
									'tw:bg-bc-3': testimonialIndex % 3 === 2,
								}"
							></div>
							<!-- quote -->
							<div
								class="tw:sm:text-lg tw:text-sm tw:text-tc-secondary tw:font-normal tw:md:group-hover:text-white no-scrollbar"
							>
								"
								<div v-html="testimonial.quote" class="tw:inline"></div>
								"
							</div>
							<!-- author -->
							<a
								:href="testimonial.link"
								target="_blank"
								class="tw:flex tw:items-center tw:gap-2 tw:border-0 tw:ring-0 tw:cursor-pointer"
							>
								<NuxtImg
									v-if="testimonial.image"
									:src="testimonial.image"
									:alt="testimonial.name"
									width="100"
									height="100"
									loading="lazy"
									class="tw:w-15 tw:h-15 tw:object-cover tw:object-top tw:rounded-full tw:shrink-0"
								/>
								<div class="tw:text-tc-secondary tw:md:group-hover:text-white">
									<h3
										class="tw:sm:text-lg tw:text-sm tw:font-bold tw:font-verdana tw:capitalize"
									>
										{{ testimonial.name }}
									</h3>
									<p
										class="tw:text-xs tw:font-verdana tw:first-letter:uppercase tw:line-clamp-1"
										:title="testimonial.role"
									>
										{{ testimonial.role }}
									</p>
								</div>
							</a>
						</div>
					</div>
				</div>
			</HorizontalScroll>
			<!-- controls -->
			<div class="tw:flex tw:items-center tw:gap-5 tw:sm:px-12 tw:px-4">
				<!-- scroll location -->
				<div
					class="tw:relative tw:flex-auto tw:h-[3px] tw:bg-bc-secondary tw:overflow-hidden tw:rounded-3"
				>
					<div
						class="tw:absolute tw:top-0 tw:h-full tw:bg-tc-link tw:rounded-3 tw:min-w-px tw:transition-none!"
						:style="thumbStyle"
					></div>
				</div>
				<!-- left navigation -->
				<button
					type="button"
					class="tw:w-10 tw:h-10 tw:bg-tc-primary flex_center tw:hover:bg-tc-link tw:cursor-pointer tw:group tw:disabled:opacity-40 tw:disabled:cursor-not-allowed tw:disabled:hover:bg-tc-primary useNestedTransition"
					aria-label="Previous testimonials"
					:disabled="!canScrollPrev"
					@click="scrollPrev"
				>
					<svg
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<mask
							id="testimonials_scroll_mask_prev"
							style="mask-type: alpha"
							maskUnits="userSpaceOnUse"
							x="0"
							y="0"
							width="24"
							height="24"
						>
							<path
								d="M24 0H0V24H24V0Z"
								fill="#D9D9D9"
								class="tw:fill-bc-primary tw:group-hover:fill-white"
							/>
						</mask>
						<g mask="url(#testimonials_scroll_mask_prev)">
							<path
								d="M10 18L4 12L10 6L11.4 7.45L7.85 11H20V13H7.85L11.4 16.55L10 18Z"
								fill="#E2E7EA"
								class="tw:fill-bc-primary tw:group-hover:fill-white"
							/>
						</g>
					</svg>
				</button>
				<!-- right navigation -->
				<button
					type="button"
					class="tw:w-10 tw:h-10 tw:bg-tc-primary flex_center tw:hover:bg-tc-link tw:cursor-pointer tw:group tw:disabled:opacity-40 tw:disabled:cursor-not-allowed tw:disabled:hover:bg-tc-primary useNestedTransition"
					aria-label="Next testimonials"
					:disabled="!canScrollNext"
					@click="scrollNext"
				>
					<svg
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						class="tw:rotate-180"
					>
						<mask
							id="testimonials_scroll_mask_next"
							style="mask-type: alpha"
							maskUnits="userSpaceOnUse"
							x="0"
							y="0"
							width="24"
							height="24"
						>
							<path
								d="M24 0H0V24H24V0Z"
								fill="#D9D9D9"
								class="tw:fill-bc-primary tw:group-hover:fill-white"
							/>
						</mask>
						<g mask="url(#testimonials_scroll_mask_next)">
							<path
								d="M10 18L4 12L10 6L11.4 7.45L7.85 11H20V13H7.85L11.4 16.55L10 18Z"
								fill="#E2E7EA"
								class="tw:fill-bc-primary tw:group-hover:fill-white"
							/>
						</g>
					</svg>
				</button>
			</div>
		</section>
	</section>
</template>

<script lang="ts" setup>
	import type { HorizontalScrollMetrics } from "~/components/HorizontalScroll.vue";

	const horizontalScrollRef = ref<{
		scrollByDirection: (direction: -1 | 1) => void;
	} | null>(null);

	const SCROLL_EPS = 1;

	const metrics = ref<HorizontalScrollMetrics>({
		scrollLeft: 0,
		scrollWidth: 0,
		clientWidth: 0,
	});

	const onMetrics = (payload: HorizontalScrollMetrics) => {
		metrics.value = payload;
	};

	const scrollRange = computed(() =>
		Math.max(0, metrics.value.scrollWidth - metrics.value.clientWidth)
	);

	const isScrollable = computed(() => scrollRange.value > SCROLL_EPS);

	const thumbStyle = computed(() => {
		const { scrollLeft, scrollWidth, clientWidth } = metrics.value;
		const range = scrollWidth - clientWidth;
		if (range <= SCROLL_EPS || scrollWidth <= 0) {
			return { width: "100%", left: "0%" };
		}
		const wPct = (clientWidth / scrollWidth) * 100;
		const leftPct = (scrollLeft / range) * (100 - wPct);
		return {
			width: `${wPct}%`,
			left: `${leftPct}%`,
		};
	});

	const canScrollPrev = computed(
		() => isScrollable.value && metrics.value.scrollLeft > SCROLL_EPS
	);

	const canScrollNext = computed(
		() =>
			isScrollable.value &&
			metrics.value.scrollLeft < scrollRange.value - SCROLL_EPS
	);

	const scrollPrev = () => {
		horizontalScrollRef.value?.scrollByDirection(-1);
	};

	const scrollNext = () => {
		horizontalScrollRef.value?.scrollByDirection(1);
	};

	interface TypeTestimonial {
		name: string;
		role: string;
		image: string;
		quote: string;
		link: string;
	}
	const testimonials = ref<TypeTestimonial[]>([
		{
			name: "Ibidapo Adeolu",
			role: "Software Developer/Engineer",
			image:
				"https://media.licdn.com/dms/image/v2/D4D03AQENjmZD0c4UlA/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1667416179452?e=1778112000&v=beta&t=s1n2r01LFc6Nm-ZY7_aFoz61CiusiZdppHbDGocFogE",
			quote:
				"I had the pleasure of working with Davies for two years+, and I can confidently say that he is one of the most dedicated and talented frontend developers I've collaborated with. <br/><br/>He is a fast learner, highly detail-oriented, and always brings smart, efficient solutions to the table. His ability to quickly adapt to new technologies and frameworks makes him a valuable asset to any team. I highly recommend him!",
			link: "https://www.linkedin.com/in/ibidapo-adeolu-19066b66/",
		},
		{
			name: "Adebimpe Adeniyi",
			role: "Manual QA Engineer | High Software Quality & Content Review | SDLC & STLC | Test Case Design & Evaluation Specialist",
			image:
				"https://media.licdn.com/dms/image/v2/D4D35AQHwQD5L7VZSeg/profile-framedphoto-shrink_100_100/B4DZoCtGwOJMAs-/0/1760981970319?e=1777050000&v=beta&t=ymFgtcg_6ZS5MnZADfGZ7lM4Ev3PLctXUp8NJlmn3f8",
			quote:
				"I've had the pleasure of working with Davies, and he's one of those developers you can always count on. He's skilled, pays attention to detail, and tackles challenges head-on without losing focus. <br/><br/>Beyond his technical abilities, he's a great team player, easy to work with, reliable, and always willing to help. Any team would be lucky to have him!",
			link: "https://www.linkedin.com/in/adebimpe-adeniyi/",
		},
		{
			name: "Jude Onohwosafe",
			role: "Senior Software Engineer | Fintech Co-Founder (Utilify) | Scalable Systems Architect | AI Researcher",
			image:
				"https://media.licdn.com/dms/image/v2/D4D03AQGwqDW8dL3zYA/profile-displayphoto-scale_100_100/B4DZzXI2kNHwAg-/0/1773135948896?e=1778112000&v=beta&t=U5x8bigBR8iXUt0vx95BhH7a-bIn5PQCSMby_dsVH84",
			quote:
				"Davies is a skilled and dedicated front-end developer. He creates clean, responsive, and user-friendly websites using modern web technologies.<br/><br/>He's also a quick learner, a great problem solver, and a team player. If you need a reliable front-end developer, I highly recommend him!",
			link: "https://www.linkedin.com/in/jude-onohwosafe/",
		},
		{
			name: "Kenneth Chidera Eze",
			role: "Founder @dekenlab, Product Designer | Product Manager | AWS Ambassador | Creating immersive design solutions for Startups and Fintech, Edutech, Ecommerce and SaaS businesses.",
			image:
				"https://media.licdn.com/dms/image/v2/D4D03AQHgrvLovlURdg/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1702458948592?e=1778112000&v=beta&t=dcNPHURNy98INTZMYxp0EIfw-4GC17b4aBpHOCDxl7Y",
			quote:
				"I worked with Davies for over two years, during which he showed apt skills in technology use, attention to details and commitment to his crafted. He demonstrated good work ethics and proper communication skills. No doubt he will thrive and Excel very well anywhere.",
			link: "https://www.linkedin.com/in/kennethchidera/",
		},
		{
			name: "Femi Shotola",
			role: "Senior Software Engineer - AI Sytems Risk Assessment | FinTech | Cloud | Node JS | Laravel | Vue Js | React | Angular",
			image:
				"https://media.licdn.com/dms/image/v2/C4D03AQFlvy6sDgUQdQ/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1668026353914?e=1778112000&v=beta&t=RY686kxIhhugCFKv4bXg7KLzOvvNNH1vEVGD4MN4cAY",
			quote: `Where to start? Davies is a gem, a rare asset in the business of building safe, secure and innovative software applications.
				<br/>
				Let me list a few of his qualities.
				<br/><br/>
				<ol class="tw:list-decimal tw:list-outside tw:*:pl-4 tw:pl-4">
					<li><strong>Innovative</strong>: He is highly innovative in solving problems.</li>
					<li><strong>Resilient</strong>: He won't give up till it's done.</li>
					<li><strong>Creative</strong>: He will find a way, no matter how \"impossible\" the task.</li>
					<li><strong>Progressive</strong>: Davies is always on top and always willing to quickly pick up the latest trends and best practices in software engineering.</li>
					<li><strong>Willing to Learn</strong>: He's willing to improve, learn and grow.</li>
					<li><strong>Bold</strong>: He will communicate his ideas clearly and passionately.</li>
				</ol>
				<br/>
				In short, Davies will be an asset to any team, because of his work ethic, intelligence and speed of delivery.
				<br/>
				I will recommend him anytime, anyday.`,
			link: "https://www.linkedin.com/in/femi-shotola/",
		},
		{
			name: "Osaro Igbinovia",
			role: "Lead Backend Engineer | Distributed Systems | DevOps",
			image:
				"https://media.licdn.com/dms/image/v2/D4D03AQEUsxF7sgB74g/profile-displayphoto-scale_100_100/B4DZ0F3Qq.J4Ac-/0/1773919871736?e=1778112000&v=beta&t=kpZ8aZ79runsueNibRqkTXTZE8cBmAwgB1Tpooi9vWQ",
			quote:
				"Davies worked on the development of my portfolio website, and I am thoroughly impressed by his expertise and professionalism as a Frontend Engineer. Davies demonstrated exceptional attention to detail, creativity, and a deep understanding of modern web technologies. He ensured the website was not only visually appealing but also highly functional and responsive across all devices. I highly recommend Davies for any Frontend Engineer role.<br/><br/>Davies' ability to translate ideas into a seamless user experience is remarkable, and his collaborative approach made the entire process smooth and efficient. I highly recommend Davies to anyone looking for a skilled and reliable frontend engineer who consistently delivers high-quality results.",
			link: "https://www.linkedin.com/in/osaroigb",
		},
		{
			name: "Chizoba Ugwuoke",
			role: "Full Stack Developer (PHP/Laravel, Vue/Nuxt, Flutter)",
			image:
				"https://media.licdn.com/dms/image/v2/C4D03AQE8hg89J60RKA/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1659621232780?e=1778112000&v=beta&t=3RXpPeOl5ijAT2UPCcWpePtxPMVbFPHGWveP4G_gkAY",
			quote:
				"Davies is a seasoned and dedicated web developer who has a keen interest in details and the timely delivery of assigned tasks.",
			link: "https://www.linkedin.com/in/chizobam/",
		},
	]);
</script>

<style></style>
