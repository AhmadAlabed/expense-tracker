import { init } from "./app/app.js";

init(
  document.getElementById("expense-form"),
  document.getElementById("expense-table__body"),
  document.getElementById("total-amount"),
  document.getElementById("filter-category")
);
