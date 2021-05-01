const menu = document.querySelector(".icon-menu");
const modal = document.querySelector(".modal");
const close = document.querySelector(".icon-close");

menu.addEventListener("click", () => {
  modal.classList.toggle("modal-display");
});

close.addEventListener("click", () => {
  modal.classList.toggle("modal-display");
});
