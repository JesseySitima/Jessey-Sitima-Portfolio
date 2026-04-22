// Reusable Horizontal Slider Component

function initSlider(sliderId, prevBtnId, nextBtnId, scrollAmount = 340) {

  const slider = document.getElementById(sliderId);
  const nextBtn = document.getElementById(nextBtnId);
  const prevBtn = document.getElementById(prevBtnId);

  if (!slider || !nextBtn || !prevBtn) return;

  nextBtn.addEventListener("click", () => {
    slider.scrollBy({
      left: scrollAmount,
      behavior: "smooth"
    });
  });

  prevBtn.addEventListener("click", () => {
    slider.scrollBy({
      left: -scrollAmount,
      behavior: "smooth"
    });
  });

}