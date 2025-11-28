export const attachTableEvents = (tbody, deleteHandler) => {
  tbody.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-action='delete']");
    if (!btn) return;
    deleteHandler(btn.dataset.id);
  });
};
