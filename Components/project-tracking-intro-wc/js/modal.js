const menu = document.querySelector(".icon-menu");
const closex = document.querySelector(".icon-close");
const modal = document.querySelector(".modal");
const body = document.querySelector("body");
var bHidden = true;

menu.addEventListener("click", () => {
  body.style.overflowY = "hidden";
  modal.classList.toggle("modal-display");
  closex.classList.toggle("display-none");
  menu.classList.toggle("display-none");
  bHidden = false;
});

closex.addEventListener("click", () => {
  body.style.overflowY = "auto";
  modal.classList.toggle("modal-display");
  closex.classList.toggle("display-none");
  menu.classList.toggle("display-none");
  bHidden = true;
});
