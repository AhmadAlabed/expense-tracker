export const renderTable = (expenses) => {
  if (expenses.length === 0) return [];
  const maxAmount = Math.max(...expenses.map((e) => +e.amount));
  return expenses.map((expense) => createRow(expense, maxAmount));
};

function createRow(expense, maxAmount) {
  const tr = document.createElement("tr");
  tr.innerHTML = `
    <td>${expense.title}</td>
    <td>$ ${expense.amount.toFixed(2)}</td>
    <td>${expense.category}</td>
    <td>${expense.date}</td>
    <td><button data-action="delete" data-id="${
      expense.id
    }" class="btn btn--danger">Delete</button></td>
  `;
  if (+expense.amount === maxAmount) {
    tr.classList.add("highlight");
  }
  return tr;
}
