import { expensesState } from "../state/expenses.js";
import { renderTable } from "../ui/table/renderer.js";
import { createExpense, calculateTotalAmount } from "../core/expense/model.js";
import { attachTableEvents } from "../ui/table/events.js";
import { createFormController } from "../ui/form/controller.js";
import { createCategoryFilter } from "../ui/filter/category.js";
import {
  formCategories,
  filterCategories,
} from "../core/expense/categories.js";
import { populateSelect } from "../ui/form/populateSelect.js";
import { populateFilterSelect } from "../ui/filter/populateSelect.js";
export function init(form, tbody, totalAmountEl, categorySelect) {
  const expenses = expensesState([]);
  populateSelect(form.category, formCategories);
  populateFilterSelect(categorySelect, filterCategories);
  let currentCategory = "";
  updateUI();
  attachTableEvents(tbody, (id) => {
    expenses.remove(id);
    updateUI();
  });

  createCategoryFilter(categorySelect, (category) => {
    currentCategory = category;
    updateUI();
  });
  const formController = createFormController(form);
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!formController.validate()) return;
    const expense = createExpense({
      title: form.title.value,
      amount: form.amount.value,
      category: form.category.value,
      date: form.date.value,
    });

    expenses.add(expense);
    form.reset();

    updateUI();
  });

  function updateUI() {
    let data = expenses.getAll();
    if (currentCategory) {
      data = data.filter((e) => e.category === currentCategory);
    }
    const rows = renderTable(data);
    const fragment = document.createDocumentFragment();
    rows.forEach((row) => fragment.appendChild(row));
    tbody.innerHTML = "";
    tbody.appendChild(fragment);
    totalAmountEl.textContent = `$ ${calculateTotalAmount(data).toFixed(2)}`;
  }
}
