export const expensesState = (initialExpenses) => {
  let expenses = structuredClone(initialExpenses);

  return {
    add(expense) {
      expenses.push(expense);
    },

    remove(id) {
      expenses = expenses.filter((e) => e.id !== +id);
    },

    getAll() {
      return structuredClone(expenses);
    },
  };
};
