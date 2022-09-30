
const drop = document.querySelector(".btn");
const nav = document.querySelector(".nav-links");
const close = document.querySelector(".close");

drop.addEventListener("click", function () {
  nav.style.display = "block";
  drop.style.display = "none";
  close.style.display = "block";
});
close.addEventListener("click", function () {
  nav.style.display = "none";
  drop.style.display = "block";
});
