export const createCategoryFilter = (selectElement, onChange) => {
  selectElement.addEventListener("change", (e) => {
    const category = e.target.value; // "" = all
    onChange(category);
  });
};
