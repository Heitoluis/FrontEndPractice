// var btn = document.getElementById("btnShare");

// btn.addEventListener("click", () => {
//   document.getElementById("popupMobile").classList.toggle("popup-toggle");
// });

clickPopUp = (btnName) => {
  var btn = document.getElementById(btnName);
  btn.addEventListener("click", () => {
    if (document.body.offsetWidth < 700)
      document.getElementById("popupMobile").classList.toggle("popup-toggle");
    else
      document.getElementById("popupDesktop").classList.toggle("popup-toggle");
  });
};

clickPopUp("btnShare");
clickPopUp("btnMobilePopUp");
