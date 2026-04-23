function loadComponent(id, file, callback) {
  fetch(file)
    .then((res) => res.text())
    .then((data) => {
      document.getElementById(id).innerHTML = data;

      // Run callback AFTER component loads
      if (callback) callback();
    });
}

document.addEventListener("DOMContentLoaded", () => {
  loadComponent("navbar", "components/navbar.html", initMobileMenu);

  loadComponent("hero", "components/hero.html");

  loadComponent("about", "components/about.html");

  loadComponent("qualifications", "components/qualifications.html");

 loadComponent("badges", "components/badges.html", () => {
  setTimeout(() => {
    initSlider(
      "badge-slider",
      "badge-prev",
      "badge-next",
      "badge-mobile-hint",
      "badge-hint-text",
      "badge-hint-icon"
    );
  }, 100);
});

  loadComponent("projects", "components/projects.html");

  loadComponent("experience", "components/experience.html");

loadComponent("education", "components/education.html", () => {

  // Wait for layout to finish
  setTimeout(() => {

    initSlider(
      "cert-slider",
      "cert-prev",
      "cert-next",
      "cert-mobile-hint",
      "cert-hint-text",
      "cert-hint-icon"
    );

  }, 100);

});

  loadComponent("contact", "components/contact.html");

  loadComponent("footer", "components/footer.html");
});
