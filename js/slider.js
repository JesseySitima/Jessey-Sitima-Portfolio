// Reusable Horizontal Slider Component
// Auto-detect card width (fixes button issue)

function initSlider(
  sliderId,
  prevBtnId,
  nextBtnId,
  hintBtnId = null,
  hintTextId = null,
  hintIconId = null,
) {
  const slider = document.getElementById(sliderId);
  const nextBtn = document.getElementById(nextBtnId);
  const prevBtn = document.getElementById(prevBtnId);

  const hintBtn = document.getElementById(hintBtnId);
  const hintText = document.getElementById(hintTextId);
  const hintIcon = document.getElementById(hintIconId);

  if (!slider || !nextBtn || !prevBtn) return;

  // ---------- GET CARD WIDTH ----------

  function getScrollAmount() {
    const firstCard = slider.children[0];

    if (!firstCard) return 300;

    const gap = parseInt(getComputedStyle(slider).gap) || 0;

    return firstCard.offsetWidth + gap;
  }

  // ---------- BUTTON CLICK ----------

  nextBtn.addEventListener("click", () => {
    slider.scrollBy({
      left: getScrollAmount(),
      behavior: "smooth",
    });
  });

  prevBtn.addEventListener("click", () => {
    slider.scrollBy({
      left: -getScrollAmount(),
      behavior: "smooth",
    });
  });

  // ---------- UI UPDATE ----------

  function updateUI() {
    const maxScroll = slider.scrollWidth - slider.clientWidth;

    const currentScroll = slider.scrollLeft;

    const isAtStart = currentScroll <= 5;

    const isAtEnd = currentScroll >= maxScroll - 5;

    // Hide PREV at start

    if (isAtStart) {
      prevBtn.classList.add("invisible");
    } else {
      prevBtn.classList.remove("invisible");
    }

    // Hide NEXT at end

    if (isAtEnd) {
      nextBtn.classList.add("invisible");
    } else {
      nextBtn.classList.remove("invisible");
    }

    // ---------- MOBILE HINT ----------

    if (!hintBtn || !hintText || !hintIcon) return;

    if (isAtEnd) {
      hintText.textContent = "Back";
      hintIcon.className = "fa-solid fa-arrow-left";

      hintBtn.dataset.mode = "back";
    } else {
      hintText.textContent = "Swipe for more";

      hintIcon.className = "fa-solid fa-arrow-right";

      hintBtn.dataset.mode = "next";
    }
  }

  // ---------- MOBILE HINT CLICK ----------

  if (hintBtn) {
    hintBtn.addEventListener("click", () => {
      if (hintBtn.dataset.mode === "back") {
        slider.scrollTo({
          left: 0,
          behavior: "smooth",
        });
      } else {
        slider.scrollBy({
          left: getScrollAmount(),
          behavior: "smooth",
        });
      }
    });
  }

  // ---------- SCROLL LISTENER ----------

  slider.addEventListener("scroll", () => {
    updateUI();
  });

 // Initial state
updateUI();

// Expose update function so other scripts can refresh UI
slider.updateSliderUI = updateUI;

}
