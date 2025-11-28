export const createExpense = (data) => {
  return {
    id: Date.now(),
    title: data.title,
    amount: +data.amount,
    category: data.category,
    date: data.date,
  };
};

export const calculateTotalAmount = (expenses) => {
  return expenses.reduce((sum, e) => sum + e.amount, 0);
};
