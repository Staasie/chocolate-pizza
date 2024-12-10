//checklist
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("ingredients-list");
  const clearButton = document.getElementById("clear-btn");

  //clears checkboxes
  clearButton.addEventListener("click", () => {
      const checkboxes = form.querySelectorAll("input[type='checkbox']");
      checkboxes.forEach((checkbox) => {
          checkbox.checked = false;
      });
  });
});
