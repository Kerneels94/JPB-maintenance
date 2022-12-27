"use strict";
/*
 *Nav menu functionalit
 */
const hamBurger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
hamBurger.addEventListener("click", () => {
  hamBurger.classList.toggle("active");
  navMenu.classList.toggle("active");
});
navMenu.addEventListener("click", () => {
  hamBurger.classList.remove("active");
  navMenu.classList.remove("active");
});
document.querySelectorAll("nav-menu").forEach(() => {
  hamBurger.classList.remove("active");
  navMenu.classList.remove("active");
});
/*
 *Danamically updating the time every year
 */
const date = document.querySelector("#date");
date.textContent = new Date().getFullYear();
/*
 *Scroll button
 */
const btn = document.querySelector("#myBtn");
function scrollFunction() {
  // display button when the user scrolls past a certain amount of pixels
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
}
function topScroll() {
  document.body.scrollTop = 0; // Safari browser
  document.documentElement.scrollTop = 0; // Chrome, Firebox, Ie, Opera
}
window.onscroll = () => {
  scrollFunction();
};
/*
 *Slider
 */
const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".nextBtn");
const prevBtn = document.querySelector(".prevBtn");
slides.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});

let counter = 0;
nextBtn.addEventListener("click", () => {
  counter++;
  carousel();
});

prevBtn.addEventListener("click", () => {
  counter--;
  carousel();
});

const carousel = () => {
  if (counter === slides.length) {
    counter = 0;
  }
  if (counter < 0) {
    counter = slides.length - 1;
  }
  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
};

setTimeout(() => carousel(1), 2000);

//# sourceMappingURL=main.js.map
