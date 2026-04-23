function initMobileMenu() {

  const mobileBtn = document.getElementById("mobile-menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  const mobileIcon = document.getElementById("mobile-icon");

  if (!mobileBtn || !mobileMenu || !mobileIcon) {
    console.log("Mobile menu not ready yet");
    return;
  }

  mobileBtn.addEventListener("click", () => {

    mobileMenu.classList.toggle("hidden");

    mobileIcon.classList.toggle("fa-bars");
    mobileIcon.classList.toggle("fa-xmark");

  });

}