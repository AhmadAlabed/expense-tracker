export const populateSelect = (selectEl, options) => {
  selectEl.innerHTML = "";

  options.forEach((opt) => {
    const option = document.createElement("option");
    option.value = opt.value;
    option.textContent = opt.label;
    selectEl.appendChild(option);
  });
};
