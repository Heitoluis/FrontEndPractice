const btn = document.querySelector(".toggle-btn");
const monthly = document.querySelector(".plans__monthly");
const annually = document.querySelector(".plans__annually");
const switchy = document.querySelector(".toggle-switch");

btn.addEventListener("click", () => {
  monthly.classList.toggle("hide");
  annually.classList.toggle("hide");
  switchy.classList.toggle("activate-switch");
});
