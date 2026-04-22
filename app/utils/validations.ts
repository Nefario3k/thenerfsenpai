import * as yup from "yup";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}(?:\.[^\s@]{2,})?$/

const emailValidation = yup
  .string()
  .required("Email is required")
  .email('Enter a valid email address (e.g. name@example.com)')
  .matches(
    EMAIL_REGEX,
    "Enter a valid email address (e.g. name@example.com)"
  );
export {
  emailValidation,
}