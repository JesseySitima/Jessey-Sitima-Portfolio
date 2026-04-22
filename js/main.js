function loadComponent(id, file, callback) {
  fetch(file)
    .then(res => res.text())
    .then(data => {
      document.getElementById(id).innerHTML = data;

      // Run callback AFTER component loads
      if (callback) callback();
    });
}

document.addEventListener("DOMContentLoaded", () => {

  loadComponent("navbar", "components/navbar.html");

  loadComponent("hero", "components/hero.html");

  loadComponent("about", "components/about.html");

  loadComponent("qualifications", "components/qualifications.html");

  loadComponent("badges", "components/badges.html");

  loadComponent("projects", "components/projects.html");

  loadComponent("experience", "components/experience.html");

  loadComponent("education", "components/education.html", () => {

  initSlider(
    "cert-slider",
    "cert-prev",
    "cert-next",
    340
  );

});

  loadComponent("contact", "components/contact.html");

  loadComponent("footer", "components/footer.html");

});