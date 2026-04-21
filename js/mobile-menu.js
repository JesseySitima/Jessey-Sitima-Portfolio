document.addEventListener("click", () => {

const mobileBtn = document.getElementById("mobile-menu-btn");

if (!mobileBtn) return;

const mobileMenu = document.getElementById("mobile-menu");
const mobileIcon = document.getElementById("mobile-icon");

mobileBtn.addEventListener("click", () => {

mobileMenu.classList.toggle("hidden");

mobileIcon.classList.toggle("fa-bars");
mobileIcon.classList.toggle("fa-xmark");

});

});