const modal = document.querySelector(".modal");
const body = document.querySelector("body");


const selection = document.querySelector("body");
selection.addEventListener("click", (e) => {

  console.log(e.target);
  if (e.target.classList.contains("icon-menu")){
    modal.classList.toggle("modal-display");

    if (modal.classList.contains("modal-display")) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "visible";
    }
  }
  else if (
    e.target.classList.contains("modal") ||
    e.target.classList.contains("modal__list") ||
    e.target.classList.contains("modal__item") ||
    e.target.classList.contains("modal__link")
  ) {
    return;
  } else {

    if (modal.classList.contains("modal-display"))
    {
    modal.classList.toggle("modal-display");
    body.style.overflow = "visible";
    }
  }
});
