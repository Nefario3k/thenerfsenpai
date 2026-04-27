<template>
	<lenis :options="lenisOptions">
		<NuxtLayout>
			<NuxtPage />
		</NuxtLayout>
		<!-- fixed blur background -->
		<Transition name="fade">
			<div
				v-if="backgroundBlur !== null"
				ref="imagePreviewDialogRef"
				class="tw:fixed tw:top-0 tw:left-0 tw:w-dvw tw:h-dvh tw:backdrop-blur-sm tw:z-10 tw:p-16 flex_center"
				:class="{
					'blurBg tw:bg-bc-primary/70': isMounted,
					'tw:bg-bc-primary': !isMounted,
				}"
				role="dialog"
				aria-modal="true"
				aria-label="Image preview"
				tabindex="-1"
				@click="closeBackgroundBlur"
			>
				<template v-if="backgroundBlur && backgroundBlur !== null">
					<button
						type="button"
						title="Close image preview"
						class="tw:absolute tw:top-8 tw:right-8 tw:w-5 tw:h-5 tw:rounded-full tw:focus-visible:outline-none tw:focus-visible:ring-2 tw:focus-visible:ring-tc-link tw:focus-visible:ring-offset-2 tw:focus-visible:ring-offset-bc-primary tw:cursor-pointer tw:hover:rotate-180 tw:hover:scale-150 useNestedTransition tw:group"
						aria-label="Close image preview"
					>
						<span
							class="tw:w-full tw:h-[0.3rem] shrink-0 tw:block tw:absolute tw:transition-all tw:duration-300 tw:left-0 tw:top-1/2 tw:-translate-y-1/2 tw:rotate-45 tw:bg-tc-link tw:group-hover:bg-tc-link-2"
						></span>
						<span
							class="tw:w-full tw:h-[0.3rem] shrink-0 tw:block tw:absolute tw:transition-all tw:duration-300 tw:left-0 tw:top-1/2 tw:-translate-y-1/2 tw:-rotate-45 tw:bg-tc-link tw:group-hover:bg-tc-link-2"
						></span>
					</button>
					<img
						:key="backgroundBlur"
						width="100%"
						height="100%"
						:src="backgroundBlur"
						alt="Image Preview"
						class="tw:w-auto! tw:h-auto! tw:max-h-full tw:max-w-full tw:block tw:object-contain tw:object-center tw:rounded-4 tw:shadow-md tw:shrink-0 tw:cursor-normal"
						@click.stop
					/>
				</template>
			</div>
		</Transition>
		<NotivueKeyboard v-slot="{ containersTabIndex }">
			<Notivue v-slot="item" :containers-tab-index="containersTabIndex">
				<NotivueSwipe :item="item">
					<NotificationWithActions :item="item" />
				</NotivueSwipe>
			</Notivue>
		</NotivueKeyboard>
	</lenis>
</template>
<script setup lang="ts">
	const { manifestHref } = useThemeManifest();
	const { $setState, $getState } = useNuxtApp();
	const { on } = useEventBus();
	const { showSuccess, showInfo, catchError } = useToast();
	useStructuredData();

	const isMounted = ref(false);
	const backgroundBlur = computed(() => $getState("backgroundBlur"));
	const imagePreviewDialogRef = ref<HTMLElement | null>(null);

	const closeBackgroundBlur = () => {
		if (isMounted.value) {
			$setState("backgroundBlur", null);
		}
	};
	const onEscapeCloseBackgroundBlur = (event: KeyboardEvent) => {
		if (event.key === "Escape" && backgroundBlur.value) {
			$setState("backgroundBlur", null);
		}
	};
	const updateViewportWidth = () => {
		$setState("viewportWidth", window.innerWidth);
	};

	const prefersReducedMotion = inject<Ref<boolean>>(
		"prefersReducedMotion",
		ref(false)
	);
	const lenisOptions = computed(() => ({
		smooth: !prefersReducedMotion.value,
		duration: 0.7,
		autoRaf: true,
		direction: "vertical" as const,
	}));
	watch(backgroundBlur, async (value: string | null) => {
		if (!value) return;
		await nextTick();
		imagePreviewDialogRef.value?.focus();
	});
	onMounted(() => {
		// Toast event listeners for global toast functionality
		on(
			"success",
			({
				prop,
				header,
				playAudio,
				actions,
				html,
			}: TypeToastEventData): void => {
				showSuccess(prop, header || "Success", playAudio, actions, html);
			}
		);
		on(
			"error",
			({
				prop,
				header,
				playAudio,
				actions,
				html,
			}: TypeToastEventData): void => {
				catchError(prop, header || "Error", playAudio, actions, html);
			}
		);
		on(
			"info",
			({
				prop,
				header,
				playAudio,
				actions,
				html,
			}: TypeToastEventData): void => {
				showInfo(prop, header || "Info", playAudio, actions, html);
			}
		);
		$setState("viewportWidth", window.innerWidth);
		window.addEventListener("resize", updateViewportWidth);
		window.addEventListener("keydown", onEscapeCloseBackgroundBlur);
		$setState("backgroundBlur", null);
		isMounted.value = true;
	});
	onUnmounted(() => {
		window.removeEventListener("resize", updateViewportWidth);
		window.removeEventListener("keydown", onEscapeCloseBackgroundBlur);
	});
	useHead({
		link: [{ rel: "manifest", href: manifestHref }],
	});
</script>
