<template>
	<!-- nice image banner -->
	<aside
		class="bg-header tw:w-full tw:h-11 tw:bg-no-repeat tw:bg-cover tw:md:block tw:hidden"
	></aside>

	<!-- sticky top -->
	<header
		class="tw:sticky tw:top-0 tw:left-0 tw:px-3 tw:w-full tw:border-b tw:border-bc-stroke tw:md:border-dashed tw:border-solid tw:z-10 tw:bg-bc-primary/70 tw:backdrop-blur-sm"
	>
		<div
			class="max-container flex_between tw:gap-3 tw:border-x tw:border-bc-stroke tw:border-solid tw:md:h-44 tw:h-16 tw:sm:px-12 tw:px-4 useCubicNestedTransition"
		>
			<!-- home link -->
			<NuxtLink
				to="/"
				aria-label="TheNerfSenpai home"
				class="tw:w-full tw:md:h-11 tw:h-8 tw:md:max-w-[20rem] tw:max-w-8 tw:bg-no-repeat tw:bg-contain tw:bg-(image:--logo) tw:md:bg-(image:--md-logo) tw:border-none tw:outline-none tw:focus-visible:outline-none tw:focus-visible:ring-2 tw:focus-visible:ring-tc-link tw:focus-visible:ring-offset-2 tw:focus-visible:ring-offset-bc-primary tw:rounded-sm tw:block"
			/>
			<!-- right section -->
			<section class="tw:flex tw:md:gap-8 tw:items-center">
				<!-- navigation links -->
				<section class="tw:flex tw:gap-6 tw:items-center">
					<nav
						aria-label="Primary"
						class="tw:hidden tw:md:flex tw:gap-6 tw:items-center"
					>
					<ul class="tw:flex tw:gap-6 tw:items-center">
						<!-- links -->
						<template v-for="link in navigationLinks" :key="link.to">
							<li>
								<NuxtLink
									:to="link.to"
									:aria-current="isActive(link.to) ? 'page' : undefined"
									:class="` tw:hover:text-tc-link tw:hover:text-lg tw:hover:font-semibold tw:rounded-sm tw:focus-visible:outline-none tw:focus-visible:ring-2 tw:focus-visible:ring-tc-link tw:focus-visible:ring-offset-2 tw:focus-visible:ring-offset-bc-primary ${
										isActive(link.to)
											? 'tw:text-tc-link tw:text-lg tw:font-semibold'
											: 'tw:text-tc-secondary tw:text-sm tw:font-normal'
									}`"
								>
									{{ link.label }}
								</NuxtLink>
							</li>
							<li
								class="tw:w-1 tw:h-4 tw:border-r tw:border-bc-stroke tw:md:border-dashed tw:border-solid"
							></li>
						</template>
					</ul>
					</nav>
					<ul class="tw:flex tw:md:gap-6 tw:gap-3.5 tw:items-center">
						<li
							class="tw:md:hidden tw:block tw:w-1 tw:h-4 tw:border-r tw:border-bc-stroke tw:md:border-dashed tw:border-solid"
						></li>
						<!-- dark mode changer -->
						<li>
							<button
								type="button"
								:aria-label="
									currentScheme === 'dark'
										? 'Switch to light mode'
										: 'Switch to dark mode'
								"
								title="Toggle Dark Mode"
								tabindex="0"
								class="tw:cursor-pointer tw:border-none tw:outline-none tw:focus-visible:outline-none tw:focus-visible:ring-2 tw:focus-visible:ring-tc-link tw:focus-visible:ring-offset-2 tw:focus-visible:ring-offset-bc-primary tw:rounded-sm flex_center tw:p-0 tw:hover:scale-125 tw:group"
								@click="handleColorSchemeToggle"
								@keydown.enter="handleColorSchemeToggle"
								@keydown.space.prevent="handleColorSchemeToggle"
							>
								<!-- moon: show when light (action = switch to dark) -->
								<svg
									v-if="currentScheme === 'light'"
									width="20"
									height="20"
									viewBox="0 0 20 20"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									aria-hidden="true"
								>
									<path
										d="M10.0996 20C8.71628 20 7.41628 19.7373 6.19961 19.212C4.98294 18.6867 3.92461 17.9743 3.02461 17.075C2.12461 16.1757 1.41228 15.1173 0.887611 13.9C0.362944 12.6827 0.100277 11.3827 0.0996106 10C0.098944 8.61733 0.361611 7.31733 0.887611 6.1C1.41361 4.88267 2.12594 3.82433 3.02461 2.925C3.92328 2.02567 4.98161 1.31333 6.19961 0.788C7.41761 0.262667 8.71761 0 10.0996 0C11.4816 0 12.7816 0.262667 13.9996 0.788C15.2176 1.31333 16.2759 2.02567 17.1746 2.925C18.0733 3.82433 18.7859 4.88267 19.3126 6.1C19.8393 7.31733 20.1016 8.61733 20.0996 10C20.0976 11.3827 19.8349 12.6827 19.3116 13.9C18.7883 15.1173 18.0759 16.1757 17.1746 17.075C16.2733 17.9743 15.2149 18.687 13.9996 19.213C12.7843 19.739 11.4843 20.0013 10.0996 20ZM11.0996 17.925C13.0829 17.675 14.7456 16.804 16.0876 15.312C17.4296 13.82 18.1003 12.0493 18.0996 10C18.0989 7.95067 17.4279 6.18 16.0866 4.688C14.7453 3.196 13.0829 2.325 11.0996 2.075V17.925Z"
										class="tw:fill-tc-primary tw:group-hover:fill-tc-link"
										fill="var(--tw-color-tc-primary)"
									/>
								</svg>
								<!-- sun: show when dark (action = switch to light) -->
								<svg
									v-else
									width="20"
									height="20"
									viewBox="0 0 20 20"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									aria-hidden="true"
								>
									<path
										d="M10 14.5a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM10 1v1.5M10 17.5V19M18 10h-1.5M3.5 10H2M15.5 4.5l-1 1M5.5 14.5l-1 1M15.5 15.5l-1-1M5.5 5.5l-1-1"
										class="tw:stroke-tc-primary tw:group-hover:stroke-tc-link"
										stroke="var(--tw-color-tc-primary)"
										stroke-width="1.2"
										stroke-linecap="round"
									/>
								</svg>
							</button>
						</li>
						<li
							class="tw:w-1 tw:h-4 tw:border-r tw:border-bc-stroke tw:md:border-dashed tw:border-solid"
						></li>
					</ul>
				</section>
				<!-- qrcode -->
				<SvgQRCode
					class="tw:w-11 tw:h-11 tw:min-w-11 tw:md:block tw:hidden"
					accessible-label="Scan QR code to chat on WhatsApp"
				/>
				<!-- hamburger menu -->
				<Sheet v-model:open="navIsOpen" @update:open="setnavIsOpen">
					<!-- hamburger menu button -->
					<SheetTrigger
						type="button"
						aria-label="Toggle Menu"
						title="Toggle Menu"
						tabindex="0"
						class="tw:cursor-pointer tw:border-none tw:outline-none tw:focus-visible:outline-none tw:focus-visible:ring-2 tw:focus-visible:ring-tc-link tw:focus-visible:ring-offset-2 tw:focus-visible:ring-offset-bc-primary tw:rounded-sm flex_center tw:p-0 tw:ml-6 tw:shrink-0 tw:md:hidden!"
					>
						<div class="tw:w-6 tw:h-6 tw:relative">
							<!-- top -->
							<span
								:class="`tw:w-full tw:h-[0.15rem] shrink-0 tw:block tw:absolute tw:transition-all tw:duration-300 tw:left-0 ${
									navIsOpen
										? 'tw:top-1/2 tw:-translate-y-1/2 tw:rotate-45 tw:left-0 tw:bg-tc-link'
										: 'tw:top-0 tw:translate-y-0 tw:rotate-0 tw:bg-tc-primary'
								}`"
							></span>
							<!-- middle -->
							<span
								:class="`tw:w-full tw:h-[0.15rem] shrink-0 tw:block tw:absolute tw:transition-all tw:duration-300 tw:left-0 tw:top-1/2 tw:-translate-y-1/2 ${
									navIsOpen ? 'tw:opacity-0' : 'tw:opacity-100 tw:bg-tc-primary'
								}`"
							></span>
							<!-- bottom -->
							<span
								:class="`tw:w-full tw:h-[0.15rem] shrink-0 tw:block tw:absolute tw:transition-all tw:duration-300 tw:right-0 ${
									navIsOpen
										? 'tw:bottom-1/2 tw:-translate-y-1/2 tw:-rotate-45 tw:bg-tc-link'
										: 'tw:bottom-0 tw:translate-y-0 tw:rotate-0 tw:bg-tc-primary'
								}`"
							></span>
						</div>
					</SheetTrigger>
					<SheetContent
						class="tw:w-full tw:h-full tw:max-h-[calc(100vh-6.4rem)] tw:border-none tw:isolate tw:bg-bc-primary/70 tw:backdrop-blur-sm tw:overflow-hidden"
						side="bottom"
						aria-describedby="mobile-nav-desc"
						hide-close-button
					>
						<SheetTitle class="tw:sr-only">Mobile Navigation</SheetTitle>
						<SheetDescription id="mobile-nav-desc" class="tw:sr-only">
							Site sections: About, Projects, and Contact.
						</SheetDescription>
						<section
							class="tw:flex tw:flex-col tw:justify-between tw:gap-2.5 tw:h-full tw:overflow-hidden"
						>
							<nav
								class="tw:flex-auto tw:px-6 tw:py-11 tw:overflow-y-auto tw:w-full useCubicNestedTransition"
								aria-label="Mobile navigation"
							>
								<ul class="tw:flex tw:flex-col tw:w-full tw:-mt-4">
									<li
										v-for="link in navigationLinks"
										class="tw:w-full"
										:key="`mobile-nav-${link.to}`"
									>
										<NuxtLink
											:to="link.to"
											:aria-current="isActive(link.to) ? 'page' : undefined"
											@click="setnavIsOpen(false)"
											:class="`tw:font-medium tw:hover:text-tc-link tw:gap-1 tw:block tw:w-full tw:hover:text-4xl tw:py-4 tw:outline-none tw:focus-visible:ring-2 tw:focus-visible:ring-white tw:focus-visible:ring-offset-2 tw:focus-visible:rounded-2 tw:border-b tw:border-bc-stroke tw:border-solid ${
												isActive(link.to)
													? 'tw:text-tc-link tw:text-4xl'
													: 'tw:text-tc-primary tw:text-2xl'
											}`"
											>{{ link.label }}</NuxtLink
										>
									</li>
								</ul>
							</nav>
						</section>
					</SheetContent>
				</Sheet>
			</section>
		</div>
	</header>
</template>

<script lang="ts" setup>
	import {
		Sheet,
		SheetContent,
		SheetDescription,
		SheetTitle,
		SheetTrigger,
	} from "@/components/ui/sheet";
	const colorScheme = useCookie<ColorScheme>("colorScheme");
	const { y: scrollY } = useWindowScroll();
	const route = useRoute();
	const { $getState } = useNuxtApp();

	const currentScheme = computed(
		() => (colorScheme.value ?? "light") as ColorScheme
	);
	const hasScrolled = computed(() => scrollY.value > 100);

	const navIsOpen = ref(false);
	const viewportWidth = computed(() => $getState("viewportWidth"));

	const navigationLinks = [
		{
			label: "About",
			to: "/about",
		},
		{
			label: "Projects",
			to: "/projects",
		},
		{
			label: "Contact",
			to: "/",
		},
	];

	const isActive = (href: string) =>
		href === "/" ? route.path === "/" : route.path.startsWith(href);
	const setnavIsOpen = (val: boolean) => {
		navIsOpen.value = val;
	};
	const handleColorSchemeToggle = () => {
		const next: ColorScheme = currentScheme.value === "dark" ? "light" : "dark";
		colorScheme.value = next;
	};
	watch(viewportWidth, (value) => {
		if (value >= 960) {
			setnavIsOpen(false);
		}
	});
</script>

<style></style>
