export const formSchema = {
  title: {
    required: true,
    alphaSpaces: true,
    requiredMessage: "Please enter a title",
    alphaSpacesMessage: "Title can contain only letters and spaces",
  },
  amount: {
    required: true,
    isNumber: true,
    min: 0.01,
    requiredMessage: "Please enter an amount",
    minMessage: "Amount must be > 0",
    isNumberMessage: "Amount must be a valid number",
  },
  category: {
    required: true,
    requiredMessage: "Please select a category",
  },
  date: {
    required: true,
    isDate: true,
    requiredMessage: "Please select a date",
    isDateMessage: "Invalid date",
  },
};
