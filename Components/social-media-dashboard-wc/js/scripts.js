const btn = document.querySelector(".button__mode");
const switchy = document.querySelector(".button__switch");

btn.addEventListener("click", () => {
  switchy.classList.toggle("darkmode-off");
  let root = document.documentElement;

  if (!switchy.classList.contains("darkmode-off")) {
    root.style.setProperty("--main-background", "#1d1f29");
    root.style.setProperty("--board-background", "#252b42");
    root.style.setProperty("--hover-background", "#333a55");

    root.style.setProperty("--main-color", "#fff");
    root.style.setProperty("--secondary-color", "#8c98c6");
    btn.style.backgroundImage = "linear-gradient(#40db82, #388fe7)";
    switchy.style.background = "#252B42";
  } else {
    root.style.setProperty("--main-background", "#F7F9FF");
    root.style.setProperty("--board-background", "#F1F3FA");
    root.style.setProperty("--hover-background", "#E1E4F0");

    root.style.setProperty("--main-color", "#1D1F29");
    root.style.setProperty("--secondary-color", "#63687D");
    btn.style.background = "#AEB3CB";
    switchy.style.background = "#F1F3FA";
  }
});
