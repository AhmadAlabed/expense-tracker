import { validateField } from "../../core/common/validator.js";
import { formSchema } from "../../core/expense/schema.js";

export const createFormController = (form) => {
  const fieldsConfig = [
    { field: form.title, rules: formSchema.title },
    { field: form.amount, rules: formSchema.amount },
    { field: form.category, rules: formSchema.category },
    { field: form.date, rules: formSchema.date },
  ];
  fieldsConfig.forEach(({ field }) => {
    field.addEventListener("input", () => {
      field.classList.remove("input--danger");
      field.nextElementSibling.textContent = "";
    });
  });

  function validate() {
    clearErrors();
    let isValid = true;

    fieldsConfig.forEach(({ field, rules }) => {
      const res = validateField(field.value, rules);
      if (!res.valid) {
        showError(field, res.message);
        isValid = false;
      }
    });

    return isValid;
  }
  function clearErrors() {
    form.querySelectorAll(".feedback").forEach((el) => (el.textContent = ""));
    form
      .querySelectorAll(".input--danger")
      .forEach((el) => el.classList.remove("input--danger"));
  }

  function showError(field, message) {
    const feedback = field.nextElementSibling;
    field.classList.add("input--danger");
    feedback.textContent = message;
  }

  return { validate };
};
