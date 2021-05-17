//----HEADER MODAL------//
const btnMenu = document.querySelector(".icon-hamburger");
const btnCloseNav = document.querySelector(".modal-nav .close-icon");
const modalNav = document.querySelector(".modal-nav");

btnMenu.addEventListener("click", () => {
  modalNav.classList.toggle("modal-nav-display");
  document.querySelector("body").style.overflowY = "hidden";
});

btnCloseNav.addEventListener("click", () => {
  modalNav.classList.toggle("modal-nav-display");
  document.querySelector("body").style.overflowY = "initial";
});
