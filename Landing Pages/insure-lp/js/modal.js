const menu = document.querySelector(".icon-menu");
const modal = document.querySelector(".modal");
const close = document.querySelector(".icon-close");
const body = document.querySelector("body");

menu.addEventListener("click", () => {
  modal.classList.toggle("modal-display");
  body.style.overflowY = "hidden";
});

close.addEventListener("click", () => {
  modal.classList.toggle("modal-display");
  body.style.overflowY = "scroll";
});
