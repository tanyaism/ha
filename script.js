"use strict";

//menu
document.querySelector(".menu").addEventListener("click", () => {
  document.querySelectorAll(".target").forEach((item) => {
    item.classList.toggle("change");
  });
});

//For transition of icons in section-1
const icons = document.querySelectorAll(".section-1-icons i");
let i = 1;

setInterval(() => {
  i++;

  const icon = document.querySelector(".visible");
  icon.classList.remove("visible");
  if (i > icons.length) {
    icons[0].classList.add("visible");
    i = 1;
  }

  icon.nextElementSibling.classList.add("visible");
}, 2000);
