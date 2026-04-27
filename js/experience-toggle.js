function initExperienceToggle() {
  const buttons = document.querySelectorAll(".toggle-btn");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const list = btn.nextElementSibling;

      list.classList.toggle("hidden");

      if (list.classList.contains("hidden")) {
        btn.textContent = "View Achievements";
      } else {
        btn.textContent = "Hide Achievements";
      }
    });
  });
}