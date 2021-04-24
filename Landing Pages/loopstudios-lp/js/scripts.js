const menu = document.querySelector(".menu-icon");
const modal = document.querySelector(".modal");
const close = document.querySelector(".close-icon");

menu.addEventListener("click", () => {
  modal.classList.toggle("modal-display");
});

close.addEventListener("click", () => {
  modal.classList.toggle("modal-display");
});
