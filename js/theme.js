document.addEventListener("DOMContentLoaded", () => {

const themeToggle = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");

function setTheme(isDark) {

if (isDark) {

document.documentElement.classList.add("dark");
themeIcon.classList.replace("fa-moon", "fa-sun");

} else {

document.documentElement.classList.remove("dark");
themeIcon.classList.replace("fa-sun", "fa-moon");

}

localStorage.setItem("theme", isDark ? "dark" : "light");

}

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
setTheme(true);
}

themeToggle.addEventListener("click", () => {

const isDark =
document.documentElement.classList.contains("dark");

setTheme(!isDark);

});

});