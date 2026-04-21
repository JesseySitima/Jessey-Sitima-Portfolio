function loadComponent(id, file) {
  fetch(file)
    .then(res => res.text())
    .then(data => {
      document.getElementById(id).innerHTML = data;
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

  loadComponent("education", "components/education.html");

  loadComponent("contact", "components/contact.html");

  loadComponent("footer", "components/footer.html");

});