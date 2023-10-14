// const accordians = document.querySelectorAll(".accordian");

// accordians.forEach((accordian) => {
//   const icon = accordian.querySelector(".cross-icon");
//   const answer = accordian.querySelector(".answer");

//   accordian.addEventListener("click", () => {
//     if (icon.classList.contains("active")) {
//       icon.classList.remove("active");
//       answer.computedStyleMap.maxheight = null;
//     } else {
//       icon.classList.add("active");
//       answer.computedStyleMap.maxheight = answer.scrollHeight + "px";
//     }
//   });
// });

const accordians = document.querySelectorAll(".accordian");

accordians.forEach((accordian) => {
  const question = accordian.querySelector(".question");
  const icon = accordian.querySelector(".cross-icon");
  const answer = accordian.querySelector(".answer");
  accordian.addEventListener("click", () => {
    question.classList.toggle("active");
    icon.classList.toggle("active");
    answer.classList.toggle("active");
  });
});
