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
	}

	const props = withDefaults(defineProps<TypeProps>(), {
		ariaLabel: "Scrollable content",
		scrollStepFraction: 0.8,
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
		const nextScrollLeft = startScrollLeft.value + (startX.value - e.clientX);
		sectionRef.value.scrollLeft = nextScrollLeft;
		horizontalLenis?.scrollTo(nextScrollLeft, {
			immediate: true,
			lock: true,
			force: true,
		});
	};

	const handleDragEnd = () => {
		if (!isDragging.value) return;
		isDragging.value = false;
		window.removeEventListener("mousemove", handleDragMove);
		window.removeEventListener("mouseup", handleDragEnd);
	};

	const handleDragStart = (e: MouseEvent) => {
		if (!isScrollable.value || !sectionRef.value) return;
		e.preventDefault();
		isDragging.value = true;
		startX.value = e.clientX;
		startScrollLeft.value = sectionRef.value.scrollLeft;
		window.addEventListener("mousemove", handleDragMove);
		window.addEventListener("mouseup", handleDragEnd);
	};

	const scrollByDirection = (direction: -1 | 1) => {
		const el = sectionRef.value;
		if (!el) return;
		const stepPx = Math.max(48, el.clientWidth * props.scrollStepFraction);
		horizontalLenis?.scrollTo(el.scrollLeft + direction * stepPx);
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

			horizontalLenis = new Lenis({
				wrapper,
				content,
				orientation: "horizontal",
				gestureOrientation: "both",
				smoothWheel: true,
				autoRaf: false,
			});

			horizontalLenis.on("scroll", () => {
				updateScrollable();
				emitMetrics();
			});

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
		window.removeEventListener("mousemove", handleDragMove);
		window.removeEventListener("mouseup", handleDragEnd);
	});
</script>
