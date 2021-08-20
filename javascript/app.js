// change words into characters
var element = document.querySelector(".brand");
element.innerHTML = element.textContent.replace(
  /\S/g,
  '<span class="letter">$&</span>'
);

// adding animation
let t1 = anime.timeline({});
t1.add({
  targets: ".letter",
  color: "rgb(255, 255, 255)",
  scale: [10, 1],
  opacity: [0, 1],
  duration: 1000,
  delay: anime.stagger(100),
  easing: "easeInOutExpo",
  endDelay: 500,
});
t1.add({
  targets: ".letter",
  webkitTextFillColor: "rgb(71, 255, 169)",
  duration: 1000,
  delay: anime.stagger(100),
  easing: "easeInOutExpo",
  endDelay: 500,
});

// onscroll header
window.addEventListener("scroll", function () {
  document
    .querySelector("header")
    .classList.toggle("stick", window.scrollY > 0);
});
let navigate = anime({
  targets: ".nav-toggle",
  right: [-120, 0],
  duration: 2000,
  delay: 1000,
  autoplay: false,
});

// mobile responsive navigation
$(document).ready(function () {
  $(".fa-align-right").click(function () {
    $(this).toggleClass("fa-times");
    $(".navigation").toggleClass("nav-toggle");
  });
  $(".navigation ul li a").click(function () {
    $(".fa-align-right").removeClass("fa-times");
    $(".navigation").removeClass("nav-toggle");
  });
});
