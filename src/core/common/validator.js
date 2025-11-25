export const validateField = (value, rules) => {
  value = value.trim();

  if (rules.required && !value) {
    return {
      valid: false,
      message: rules.requiredMessage || "This field is required",
    };
  }

  if (rules.alphaSpaces) {
    const regex = /^[A-Za-z\s]+$/;

    if (!regex.test(value)) {
      return {
        valid: false,
        message:
          rules.alphaSpacesMessage || "Only letters and spaces are allowed",
      };
    }
  }

  if (rules.minLength && value.length < rules.minLength) {
    return {
      valid: false,
      message: rules.minLengthMessage || `Minimum length is ${minLength}`,
    };
  }

  if (rules.isNumber) {
    const num = +value;
    if (isNaN(num)) {
      return {
        valid: false,
        message: rules.isNumberMessage || "Invalid number",
      };
    }
    if (rules.min !== undefined && num < rules.min) {
      return { valid: false, message: rules.minMessage };
    }
  }

  if (rules.isDate) {
    const date = new Date(value);
    if (isNaN(date.getTime())) {
      return { valid: false, message: rules.isDateMessage || "Invalid date" };
    }
  }

  return { valid: true, message: "" };
};
