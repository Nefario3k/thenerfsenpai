<template>
	<form
		class="tw:space-y-8 tw:w-full"
		aria-label="Contact form"
		novalidate
		@submit.prevent="onSubmit"
	>
		<div class="tw:grid tw:gap-8 tw:sm:grid-cols-2 tw:grid-cols-1">
			<FormInput
				name="name"
				label="Name"
				placeholder="Your name"
				required
				autocomplete="name"
			/>
			<FormInput
				name="email"
				type="email"
				label="Email"
				placeholder="you@example.com"
				required
				autocomplete="email"
			/>
		</div>
		<FormInput
			name="project"
			label="Project"
			placeholder="What do you want to build?"
			required
			autocomplete="off"
		/>
		<FormInput
			name="message"
			type="textarea"
			label="Message"
			placeholder="Goals, timeline, links, anything that helps"
			required
		/>
		<button
			type="submit"
			:disabled="isSubmitting"
			class="tw:w-full tw:min-h-[5.4rem] tw:rounded-3 tw:px-6 tw:text-base tw:font-medium tw:bg-tc-primary tw:text-bc-primary tw:disabled:opacity-60 tw:disabled:cursor-not-allowed tw:cursor-pointer tw:transition-opacity tw:focus-visible:outline-none tw:focus-visible:ring-2 tw:focus-visible:ring-tc-link tw:focus-visible:ring-offset-2 tw:focus-visible:ring-offset-bc-primary"
		>
			{{ isSubmitting ? "Sending…" : "Send message" }}
		</button>
	</form>
</template>

<script lang="ts" setup>
	import { useForm } from "vee-validate";
	import * as yup from "yup";
	import { emailValidation } from "@/utils/validations";

	interface TypeContactForm {
		name: string;
		email: string;
		project: string;
		message: string;
	}

	const { $showToast } = useNuxtApp();
	const { public: config } = useRuntimeConfig();

	const contactValidationSchema = yup.object({
		name: yup.string().trim().required("Name is required"),
		email: emailValidation,
		project: yup.string().trim().required("Project is required"),
		message: yup
			.string()
			.trim()
			.required("Message is required")
			.min(10, "Message should be at least 10 characters"),
	});

	const { handleSubmit, isSubmitting, resetForm } = useForm<TypeContactForm>({
		validationSchema: contactValidationSchema,
		initialValues: {
			name: "",
			email: "",
			project: "",
			message: "",
		},
	});

	const onSubmit = handleSubmit(async (values) => {
		try {
			const publicKey = String(config.emailjsPublicKey ?? "");
			const serviceId = String(config.emailjsServiceId ?? "");
			const templateId = String(config.emailjsTemplateId ?? "");

			if (!publicKey) {
				throw new Error("EmailJS public key is not configured.");
			}
			if (!serviceId || !templateId) {
				throw new Error("EmailJS service/template is not configured.");
			}
			if (!window.emailjs?.send) {
				throw new Error("Email service is not loaded yet.");
			}

			await window.emailjs.send(
				serviceId,
				templateId,
				{
					from_name: values.name,
					from_email: values.email,
					project: values.project,
					message: values.message,
					reply_to: values.email,
				},
				publicKey
			);

			$showToast("success", {
				prop: "Hi😊, Thanks for contacting me. <br/> I'll get back to you as soon as possible.❤️",
				header: "Message Received! 🎉",
				html: true,
			});
			resetForm();
		} catch (error) {
			$showToast("error", {
				prop: "Unable to send message. <br/> Please try again later.😔",
				header: "Error 🫨",
				html: true,
			});
		}
	});
</script>
