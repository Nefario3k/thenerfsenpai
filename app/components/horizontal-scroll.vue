<template>
	<section
		ref="sectionRef"
		:aria-label="ariaLabel"
		class="no-scrollbar tw:overflow-x-auto tw:scroll-auto!"
		:class="[
			isScrollable &&
				(isDragging ? 'tw:cursor-grabbing tw:select-none' : 'tw:cursor-grab'),
		]"
		@mousedown="handleDragStart"
		@click.capture="handleClickCapture"
		@scroll.passive="emitMetrics"
	>
		<div ref="contentRef">
			<slot />
		</div>
	</section>
</template>

<script lang="ts" setup>
	import Lenis from "lenis";

	export interface HorizontalScrollMetrics {
		scrollLeft: number;
		scrollWidth: number;
		clientWidth: number;
	}

	interface TypeProps {
		ariaLabel?: string;
		/** Portion of viewport width used for prev/next `scrollBy` step */
		scrollStepFraction?: number;
	/** Enable Lenis-driven horizontal scrolling behavior */
	enableLenis?: boolean;
	}

	const props = withDefaults(defineProps<TypeProps>(), {
		ariaLabel: "Scrollable content",
		scrollStepFraction: 0.8,
	enableLenis: true,
	});

	const emit = defineEmits<{
		metrics: [payload: HorizontalScrollMetrics];
	}>();

	const sectionRef = ref<HTMLElement | null>(null);
	const contentRef = ref<HTMLElement | null>(null);
	const isScrollable = ref(false);
	const isDragging = ref(false);
	const startX = ref(0);
	const startScrollLeft = ref(0);
	const movedDuringDrag = ref(false);
	const suppressNextClick = ref(false);
	const SCROLL_EDGE_EPS = 1;
	const WHEEL_SPEED_MULTIPLIER = 1.8;
	const DRAG_CLICK_SUPPRESS_PX = 6;
	const WHEEL_CAPTURE_OPTIONS: AddEventListenerOptions = {
		passive: false,
		capture: true,
	};

	const updateScrollable = () => {
		const el = sectionRef.value;
		if (!el) return;
		isScrollable.value = el.scrollWidth > el.clientWidth;
	};

	const emitMetrics = () => {
		const el = sectionRef.value;
		if (!el) return;
		emit("metrics", {
			scrollLeft: el.scrollLeft,
			scrollWidth: el.scrollWidth,
			clientWidth: el.clientWidth,
		});
	};

	const handleDragMove = (e: MouseEvent) => {
		if (!isDragging.value || !sectionRef.value) return;
		if (Math.abs(e.clientX - startX.value) > DRAG_CLICK_SUPPRESS_PX) {
			movedDuringDrag.value = true;
		}
		const nextScrollLeft = startScrollLeft.value + (startX.value - e.clientX);
		sectionRef.value.scrollLeft = nextScrollLeft;
		if (props.enableLenis) {
			horizontalLenis?.scrollTo(nextScrollLeft, {
				immediate: true,
				lock: true,
				force: true,
			});
		}
	};

	const handleDragEnd = () => {
		if (!isDragging.value) return;
		isDragging.value = false;
		if (movedDuringDrag.value) {
			suppressNextClick.value = true;
		}
		window.removeEventListener("mousemove", handleDragMove);
		window.removeEventListener("mouseup", handleDragEnd);
	};

	const handleDragStart = (e: MouseEvent) => {
		if (!isScrollable.value || !sectionRef.value) return;
		e.preventDefault();
		isDragging.value = true;
		movedDuringDrag.value = false;
		startX.value = e.clientX;
		startScrollLeft.value = sectionRef.value.scrollLeft;
		window.addEventListener("mousemove", handleDragMove);
		window.addEventListener("mouseup", handleDragEnd);
	};

	const handleClickCapture = (e: MouseEvent) => {
		if (!suppressNextClick.value) return;
		e.preventDefault();
		e.stopPropagation();
		suppressNextClick.value = false;
	};

const handleWheel = (e: WheelEvent) => {
	if (!props.enableLenis) return;
	const el = sectionRef.value;
	if (!el || !isScrollable.value) return;

	const scrollDelta =
		Math.abs(e.deltaY) > Math.abs(e.deltaX) ? e.deltaY : e.deltaX;
	if (!scrollDelta) return;
	const boostedDelta = scrollDelta * WHEEL_SPEED_MULTIPLIER;

	const maxScrollLeft = Math.max(0, el.scrollWidth - el.clientWidth);
	const nextScrollLeft = Math.min(
		maxScrollLeft,
		Math.max(0, el.scrollLeft + boostedDelta)
	);
	const canScrollHorizontally =
		Math.abs(nextScrollLeft - el.scrollLeft) > SCROLL_EDGE_EPS;

	// Let page scroll naturally once horizontal bounds are reached.
	if (!canScrollHorizontally) return;

	e.preventDefault();
	e.stopPropagation();
	if (props.enableLenis) {
		horizontalLenis?.scrollTo(nextScrollLeft, {
			lock: true,
			force: true,
		});
		return;
	}
	el.scrollLeft = nextScrollLeft;
};

	const scrollByDirection = (direction: -1 | 1) => {
		const el = sectionRef.value;
		if (!el) return;
		const stepPx = Math.max(48, el.clientWidth * props.scrollStepFraction);
	const nextScrollLeft = el.scrollLeft + direction * stepPx;
	if (props.enableLenis) {
		horizontalLenis?.scrollTo(nextScrollLeft);
		return;
	}
	el.scrollTo({
		left: nextScrollLeft,
		behavior: "smooth",
	});
	};

	defineExpose({
		scrollByDirection,
	});

	let resizeObserver: ResizeObserver | null = null;
	let horizontalLenis: Lenis | null = null;
	let rafId: number | null = null;

	const raf = (time: number) => {
		horizontalLenis?.raf(time);
		rafId = window.requestAnimationFrame(raf);
	};

	onMounted(() => {
		nextTick(() => {
			updateScrollable();
			emitMetrics();
			const wrapper = sectionRef.value;
			const content = contentRef.value;
			if (!wrapper || !content) return;

			if (props.enableLenis) {
				horizontalLenis = new Lenis({
					wrapper,
					content,
					orientation: "horizontal",
					gestureOrientation: "horizontal",
					smoothWheel: true,
					autoRaf: false,
				});

				horizontalLenis.on("scroll", () => {
					updateScrollable();
					emitMetrics();
				});
				wrapper.addEventListener("wheel", handleWheel, WHEEL_CAPTURE_OPTIONS);
			}

			rafId = window.requestAnimationFrame(raf);

			resizeObserver = new ResizeObserver(() => {
				updateScrollable();
				emitMetrics();
			});
			resizeObserver.observe(wrapper);
		});
	});

	onUnmounted(() => {
		resizeObserver?.disconnect();
		horizontalLenis?.destroy();
		horizontalLenis = null;
		if (rafId !== null) {
			window.cancelAnimationFrame(rafId);
			rafId = null;
		}
		if (props.enableLenis) {
			sectionRef.value?.removeEventListener(
				"wheel",
				handleWheel,
				WHEEL_CAPTURE_OPTIONS
			);
		}
		window.removeEventListener("mousemove", handleDragMove);
		window.removeEventListener("mouseup", handleDragEnd);
	});
</script>
