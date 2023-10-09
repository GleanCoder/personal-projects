const yearVl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearVl.textContent = currentYear;

// mobile navigation work
const navButtonEl = document.querySelector(".mobile-nav-btn");
const headerEl = document.querySelector(".header");
navButtonEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

//Smooth Scrolling

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }
    //close Mobile Nav on click
    if (link.classList.contains("nav-link"))
      headerEl.classList.toggle("nav-open");
  });
});

//sticky Navbar

const sectionHeroEl = document.querySelector(".hero-section");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);

    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }
    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-120px",
  }
);
obs.observe(sectionHeroEl);
