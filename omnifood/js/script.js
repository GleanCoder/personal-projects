const yearVl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearVl.textContent = currentYear;

// mobile navigation work
const navButtonEl = document.querySelector(".mobile-nav-btn");
const headerEl = document.querySelector(".header");
navButtonEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});
