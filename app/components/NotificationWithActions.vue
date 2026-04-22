<template>
	<div class="notification-with-actions-wrapper">
		<!-- Custom layout for HTML body -->
		<div
			v-if="item.props?.html"
			class="Notivue__notification flex items-center"
			:data-notivue="item.type"
			:data-notivue-has-title="Boolean(item.title)"
		>
			<Component
				v-if="iconComponent"
				:is="iconComponent"
				class="Notivue__icon tw:flex tw:justify-center tw:items-center tw:overflow-visible tw:shrink-0 tw:w-8 tw:h-8 tw:mx-2.5 tw:my-2.5 tw:ml-2.5 tw:color-inherit"
				aria-hidden="true"
			/>
			<div
				class="Notivue__content tw:flex tw:flex-col tw:grow tw:py-2 tw:pr-3"
				:aria-live="item.ariaLive"
				:role="item.ariaRole"
				aria-atomic="true"
			>
				<h3
					v-if="item.title"
					class="Notivue__content-title tw:leading-tight tw:font-bold tw:text-base tw:m-0 tw:mb-1"
				>
					{{ item.title }}
				</h3>
				<div
					class="Notivue__content-message tw:max-h-60 tw:overflow-auto tw:leading-normal tw:m-0 tw:p-0 tw:text-sm tw:whitespace-pre-line"
					v-html="messageContent"
				/>
			</div>
			<button
				v-if="item.type !== 'promise'"
				type="button"
				class="Notivue__close tw:relative tw:cursor-pointer tw:p-2 tw:my-2.5 tw:mr-2.5 tw:font-bold tw:border-none tw:bg-transparent tw:text-sm tw:leading-none"
				style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0)"
				aria-label="Close"
				tabindex="-1"
				@click="item.clear()"
			>
				<component
					v-if="closeIconComponent"
					:is="closeIconComponent"
					class="Notivue__close-icon tw:w-8 tw:h-8 tw:flex tw:opacity-65 tw:pointer-events-none"
				/>
			</button>
		</div>
		<!-- Default Notivue Notification for plain text -->
		<Notification v-else :item="item" />
		<div
			v-if="actions.length"
			class="Notivue__actions tw:flex tw:flex-wrap tw:justify-end tw:items-center tw:gap-2 tw:px-4 tw:pb-3"
			role="group"
			aria-label="Notification actions"
		>
			<button
				v-for="(action, index) in actions"
				:key="`${action.label}-${index}`"
				type="button"
				class="!rounded-2 tw:px-3 tw:py-1.5 tw:text-sm tw:font-medium tw:transition-colors tw:hover:opacity-90 tw:focus:outline-none tw:focus:ring-2 tw:focus:ring-offset-2"
				:class="actionButtonClass"
				:aria-label="`Action: ${action.label}`"
				@click="handleActionClick(action)"
				@keydown.enter="handleActionClick(action)"
				@keydown.space.prevent="handleActionClick(action)"
			>
				{{ action.label }}
			</button>
		</div>
		<NotificationProgress :item="item" />
	</div>
</template>
<script setup lang="ts">
	import type { NotivueItem } from "notivue";
	import { filledIcons } from "notivue";
	import { unref } from "vue";

	interface NotificationWithActionsProps {
		item: NotivueItem<{ actions?: TypeToastEventAction[]; html?: boolean }>;
	}

	const props = defineProps<NotificationWithActionsProps>();

	const { emit } = useEventBus();

	const actions = computed(() => props.item.props?.actions ?? []);

	const iconComponent = computed(
		() => filledIcons[props.item.type as keyof typeof filledIcons]
	);
	const closeIconComponent = computed(() => filledIcons.close);
	const messageContent = computed(() =>
		String(unref(props.item.message) ?? "")
	);

	const actionButtonClass = computed(() => {
		const type = props.item.type;
		if (type === "error") return "tw:bg-red-100 tw:focus:ring-red-500";
		if (type === "success") return "tw:bg-green-100 tw:focus:ring-green-500";
		return "tw:bg-tc-link-2 tw:focus:ring-tc-link-2";
	});

	const handleActionClick = (action: TypeToastEventAction) => {
		action.action();
		console.log("action", action);
		props.item.clear();
	};
</script>
