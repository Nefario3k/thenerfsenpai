<template>
	<div
		:class="[
			props.class,
			'flex flex-col gap-2 w-full useCubicNestedTransition',
		]"
	>
		<label
			v-if="label"
			:for="inputId"
			class="tw:text-bc-1 tw:font-medium tw:text-base"
		>
			{{ label }}
			<span v-if="props.required" class="tw:text-tc-3"> *</span>
		</label>
		<div
			:class="[
				'tw:flex tw:items-center tw:rounded-3 tw:w-full tw:border-2 tw:min-h-[5.4rem] tw:transition-colors tw:group tw:text-tc-4 tw:*:text-inherit tw:bg-bc-5 tw:focus-within:border-tc-primary',
				errorMessage
					? 'tw:text-dc-1 tw:border-dc-1! tw:bg-dc-2!'
					: String(value)?.trim()?.length > 0
					? 'tw:text-tc-primary tw:border-current!'
					: 'tw:border-bc-5',
			]"
		>
			<label
				v-if="$slots.leading"
				:for="inputId"
				:class="[
					'tw:flex tw:items-center tw:justify-center tw:shrink-0 tw:pl-4',
					errorMessage
						? 'group-focus-within:text-dc-1 tw:text-dc-1!'
						: 'group-focus-within:text-tc-primary tw:text-tc-primary',
				]"
				aria-hidden="true"
			>
				<slot name="leading" />
			</label>
			<textarea
				v-if="type === 'textarea'"
				:id="inputId"
				ref="inputRef"
				:value="value as string"
				:type="type"
				:placeholder="placeholder"
				:disabled="disabled"
				:aria-label="label || undefined"
				:aria-invalid="!!errorMessage"
				:aria-describedby="errorMessage ? errorId : undefined"
				class="tw:flex-1 tw:min-w-0 tw:bg-transparent! tw:text-white! tw:placeholder:text-tc-4 tw:text-base tw:outline-none tw:disabled:opacity-50 tw:disabled:cursor-not-allowed tw:h-full tw:px-4 tw:min-h-19 tw:py-4 tw:scroll-py-4 tw:max-h-88 tw:transition-none!"
				@input="handleChange"
				@blur="handleBlur"
				:autocomplete="autocomplete"
			/>
			<input
				v-else
				:id="inputId"
				ref="inputRef"
				:value="value"
				:type="type"
				:placeholder="placeholder"
				:disabled="disabled"
				:aria-label="label || undefined"
				:aria-invalid="!!errorMessage"
				:aria-describedby="errorMessage ? errorId : undefined"
				class="tw:flex-1 tw:min-w-0 tw:bg-transparent! tw:text-white! tw:placeholder:text-tc-4 tw:text-base tw:outline-none tw:disabled:opacity-50 tw:disabled:cursor-not-allowed tw:h-full tw:px-4"
				@input="handleChange"
				@blur="handleBlur"
				:autocomplete="autocomplete"
			/>
		</div>
		<FormError :message="errorMessage" :id="errorId" class="transIn" />
	</div>
</template>

<script lang="ts" setup>
	import { useId } from "vue";
	import { useField } from "vee-validate";

	interface FormInputProps {
		name: string;
		modelValue?: string;
		rules?: unknown;
		type?: "text" | "email" | "textarea";
		placeholder?: string;
		disabled?: boolean;
		label?: string;
		id?: string;
		class?: string;
		required?: boolean;
		autocomplete?: string;
	}

	const props = withDefaults(defineProps<FormInputProps>(), {
		modelValue: "",
		rules: undefined,
		type: "text",
		placeholder: "",
		disabled: false,
		label: "",
		id: "",
		class: "",
		required: false,
		autocomplete: "",
	});

	const emit = defineEmits<{
		"update:modelValue": [value: string];
	}>();

	const uniqueId = useId();
	const inputId = computed(
		() => props.id || `form-input-${props.name}-${uniqueId}`
	);
	const errorId = computed(() => `${inputId.value}-error`);

	const {
		value,
		errorMessage,
		handleChange: fieldHandleChange,
		handleBlur: fieldHandleBlur,
	} = useField(
		() => props.name,
		props.rules as Parameters<typeof useField>[1],
		{
			initialValue: props.modelValue,
			validateOnValueUpdate: true,
		}
	);

	watch(
		() => props.modelValue,
		(newVal) => {
			if (newVal !== value.value) {
				value.value = newVal ?? "";
			}
		},
		{ immediate: true }
	);

	const handleChange = (evt: Event) => {
		const target = evt.target as HTMLInputElement;
		const newValue = target?.value ?? "";
		fieldHandleChange(newValue);
		emit("update:modelValue", newValue);
	};

	const handleBlur = (evt: FocusEvent) => {
		fieldHandleBlur(evt);
	};

	const inputRef = ref<HTMLInputElement | null>(null);

	defineExpose({
		inputRef,
	});
</script>
