function initProjectTabs() {
  const tabs = document.querySelectorAll(".tab-btn");
  const projects = document.querySelectorAll(".project-card");
  const slider = document.getElementById("project-slider");

  const hintBtn = document.getElementById("project-mobile-hint");

  if (!tabs.length) return;

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const filter = tab.getAttribute("data-filter");

      // ---------- RESET TAB STYLES ----------

      tabs.forEach((t) => {
        t.classList.remove("bg-[#0A66C2]", "text-white", "border-[#0A66C2]");

        t.classList.add(
          "border-zinc-300",
          "dark:border-zinc-700",
          "text-zinc-700",
          "dark:text-zinc-300",
        );
      });

      tab.classList.remove("border-zinc-300", "dark:border-zinc-700");

      tab.classList.add("bg-[#0A66C2]", "text-white", "border-[#0A66C2]");

      // ---------- FILTER PROJECTS ----------

      let visibleCount = 0;

      projects.forEach((project) => {
        const category = project.getAttribute("data-category");

        if (filter === "all" || category.includes(filter)) {
          project.classList.remove("hidden");
          visibleCount++;
        } else {
          project.classList.add("hidden");
        }
      });

      // ---------- RESET SLIDER POSITION ----------

      if (slider) {
        slider.scrollTo({
          left: 0,
          behavior: "smooth",
        });

        // Refresh slider arrows + hint
        setTimeout(() => {
          if (slider.updateSliderUI) {
            slider.updateSliderUI();
          }
        }, 200);
      }

      // ---------- FIX SWIPE HINT ----------

      if (hintBtn && slider) {
        const maxScroll = slider.scrollWidth - slider.clientWidth;

        if (visibleCount <= 1 || maxScroll <= 5) {
          hintBtn.classList.add("hidden");
        } else {
          hintBtn.classList.remove("hidden");
        }
      }
    });
  });
}
