const menu = document.querySelector(".menu-icon");
const close_btn = document.querySelector(".close-icon");
const modal = document.querySelector(".modal");

menu.addEventListener("click", () => {
  toggleMenu();
});

close_btn.addEventListener("click", () => {
  toggleMenu();
});

var toggleMenu = () => {
  modal.classList.toggle("modal-display");
  close_btn.classList.toggle("hide");
  menu.classList.toggle("hide");
};
