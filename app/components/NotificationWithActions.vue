<template>
	<div class="notification-with-actions-wrapper">
		<!-- Custom layout for HTML body -->
		<div
			v-if="item.props?.html"
			class="Notivue__notification flex items-center!"
			:data-notivue="item.type"
			:data-notivue-has-title="Boolean(item.title)"
		>
			<Component
				v-if="iconComponent"
				:is="iconComponent"
				class="Notivue__icon flex justify-center items-center overflow-visible shrink-0 w-8 h-8 mx-2.5 my-2.5 ml-2.5 color-inherit"
				aria-hidden="true"
			/>
			<div
				class="Notivue__content flex flex-col grow py-2 pr-3"
				:aria-live="item.ariaLive"
				:role="item.ariaRole"
				aria-atomic="true"
			>
				<h3
					v-if="item.title"
					class="Notivue__content-title leading-tight font-bold text-base m-0 mb-1"
				>
					{{ item.title }}
				</h3>
				<div
					class="Notivue__content-message max-h-60 overflow-auto leading-normal m-0 p-0 text-sm whitespace-pre-line"
					v-html="messageContent"
				/>
			</div>
			<button
				v-if="item.type !== 'promise'"
				type="button"
				class="Notivue__close relative cursor-pointer p-2 my-2.5 mr-2.5 font-bold border-none bg-transparent text-sm leading-none"
				style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0)"
				aria-label="Close"
				tabindex="-1"
				@click="item.clear()"
			>
				<component
					v-if="closeIconComponent"
					:is="closeIconComponent"
					class="Notivue__close-icon w-8 h-8 flex opacity-65 pointer-events-none"
				/>
			</button>
		</div>
		<!-- Default Notivue Notification for plain text -->
		<Notification v-else :item="item" />
		<div
			v-if="actions.length"
			class="Notivue__actions flex flex-wrap justify-end items-center gap-2 px-4 pb-3"
			role="group"
			aria-label="Notification actions"
		>
			<button
				v-for="(action, index) in actions"
				:key="`${action.label}-${index}`"
				type="button"
				class="rounded-lg px-3 py-1.5 text-sm font-medium transition-colors hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2"
				:class="actionButtonClass"
				:aria-label="`Action: ${action.label}`"
				@click="handleActionClick(action)"
				@keydown.enter="handleActionClick(action)"
				@keydown.space.prevent="handleActionClick(action)"
			>
				{{ action.label }}
			</button>
		</div>
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
		if (type === "error") return "bg-red-100 focus:ring-red-500";
		if (type === "success") return "bg-green-100 focus:ring-green-500";
		return "bg-primary-7 focus:ring-primary-500";
	});

	const handleActionClick = (action: TypeToastEventAction) => {
		action.action();
		props.item.clear();
	};
</script>
