<template>
	<section key="contact" class="transIn">
		<!-- top section -->
		<section class="tw:sm:px-12 tw:px-4 tw:pb-12 tw:overflow-hidden">
			<h1
				v-gsap.splitText.words.from="{
					opacity: 0,
					x: -30,
					stagger: 0.1,
				}"
				class="tw:sm:text-[5.4rem] tw:text-8 tw:font-normal tw:font-zalando tw:leading-tight tw:max-w-7xl"
			>
				Tell me what you're building.
			</h1>
			<p
				class="tw:sm:text-xl tw:text-base tw:text-tc-secondary tw:font-verdana tw:mt-6 tw:max-w-[60ch]"
			>
				Share a few details about your project, role or idea and I'll reply
				by email.
			</p>
		</section>

		<!-- form + other channels -->
		<section
			class="tw:grid tw:md:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] tw:grid-cols-1 tw:border-t tw:border-bc-stroke"
		>
			<!-- form -->
			<div class="tw:sm:px-12 tw:px-4 tw:py-16">
				<h2
					class="tw:sm:text-base tw:text-sm tw:font-bold tw:text-tc-primary tw:mb-10"
				>
					Send a message ↘
				</h2>
				<ContactForm />
			</div>

			<!-- other ways to reach me -->
			<aside
				aria-labelledby="contact-channels-heading"
				class="tw:sm:px-12 tw:px-4 tw:py-16 tw:md:border-l tw:md:border-t-0 tw:border-t tw:border-bc-stroke tw:md:border-dashed tw:border-solid"
			>
				<h2
					id="contact-channels-heading"
					class="tw:sm:text-base tw:text-sm tw:font-bold tw:text-tc-primary tw:mb-10"
				>
					Other ways to reach me ↘
				</h2>
				<ul class="tw:border-t tw:border-bc-stroke tw:border-dashed">
					<li
						v-for="channel in channels"
						:key="channel.label"
						class="tw:border-b tw:border-bc-stroke tw:border-dashed"
					>
						<a
							:href="channel.href"
							:target="channel.external ? '_blank' : undefined"
							:rel="channel.external ? 'noopener noreferrer' : undefined"
							:aria-label="
								channel.external
									? `${channel.label}: ${channel.value} (opens in a new tab)`
									: `${channel.label}: ${channel.value}`
							"
							class="tw:group tw:flex tw:flex-col tw:gap-1 tw:py-5 tw:rounded-sm tw:focus-visible:outline-none tw:focus-visible:ring-2 tw:focus-visible:ring-tc-link tw:focus-visible:ring-offset-2 tw:focus-visible:ring-offset-bc-primary"
						>
							<span class="tw:text-sm tw:text-tc-secondary">
								{{ channel.label }}
							</span>
							<span
								class="tw:text-base tw:font-medium tw:text-tc-primary tw:group-hover:text-tc-link tw:break-all useNestedTransition"
							>
								{{ channel.value }}
							</span>
						</a>
					</li>
				</ul>
				<!-- resume -->
				<a
					:href="RESUME_DOWNLOAD_URL"
					aria-label="Download Davies Okpeta's resume (PDF)"
					class="tw:group tw:mt-10 tw:flex tw:items-center tw:justify-between tw:gap-4 tw:rounded-3 tw:border-2 tw:border-dashed tw:border-bc-stroke tw:hover:border-tc-link tw:px-5 tw:py-4 tw:focus-visible:outline-none tw:focus-visible:ring-2 tw:focus-visible:ring-tc-link tw:focus-visible:ring-offset-2 tw:focus-visible:ring-offset-bc-primary useNestedTransition"
				>
					<span class="tw:flex tw:flex-col tw:gap-1">
						<span class="tw:text-sm tw:text-tc-secondary">Resume</span>
						<span
							class="tw:text-base tw:font-medium tw:text-tc-primary tw:group-hover:text-tc-link useNestedTransition"
						>
							Download PDF
						</span>
					</span>
					<SolarDownloadMinimalistic
						aria-hidden="true"
						class="tw:w-6 tw:h-6 tw:shrink-0 tw:text-tc-primary tw:group-hover:text-tc-link useNestedTransition"
					/>
				</a>
				<!-- WhatsApp: a QR code only helps when the visitor is on another screen -->
				<figure class="tw:md:flex tw:hidden tw:items-center tw:gap-4 tw:mt-10">
					<SvgQrCode
						class="tw:w-24 tw:h-24 tw:min-w-24 tw:rounded-sm"
						accessible-label="QR code to chat with Davies Okpeta on WhatsApp"
					/>
					<figcaption class="tw:text-sm tw:text-tc-secondary tw:max-w-[22ch]">
						Scan with your phone to chat on WhatsApp.
					</figcaption>
				</figure>
			</aside>
		</section>
		<!-- break -->
		<Break />
	</section>
</template>

<script lang="ts" setup>
	import {
		CONTACT_EMAIL,
		RESUME_DOWNLOAD_URL,
		SOCIAL_PROFILES,
		WHATSAPP_DISPLAY,
		WHATSAPP_NUMBER,
	} from "~~/shared/site";

	interface TypeContactChannel {
		label: string;
		value: string;
		href: string;
		external: boolean;
	}

	const profile = (host: string) =>
		SOCIAL_PROFILES.find((url) => url.includes(host)) ?? "";

	/** Shows a profile URL without the protocol, "www." or a trailing slash. */
	const displayUrl = (url: string) =>
		url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");

	const channels: TypeContactChannel[] = [
		{
			label: "Email",
			value: CONTACT_EMAIL,
			href: `mailto:${CONTACT_EMAIL}`,
			external: false,
		},
		{
			label: "WhatsApp",
			value: WHATSAPP_DISPLAY,
			href: `https://wa.me/${WHATSAPP_NUMBER}`,
			external: true,
		},
		...[
			{ label: "LinkedIn", host: "linkedin.com" },
			{ label: "GitHub", host: "github.com" },
			{ label: "X", host: "x.com" },
		]
			.map(({ label, host }) => ({ label, url: profile(host) }))
			.filter(({ url }) => url)
			.map(({ label, url }) => ({
				label,
				value: displayUrl(url),
				href: url,
				external: true,
			})),
	];

	usePortfolioSeo({
		title: "Contact Davies Okpeta",
		description: `Contact Davies Okpeta (TheNerfSenpai) about a web project, a role or a collaboration. Send a message, email ${CONTACT_EMAIL} or connect on LinkedIn.`,
	});
	useContactPageStructuredData();
</script>

<style></style>
