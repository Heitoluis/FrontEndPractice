const themeButton = document.querySelector(".theme__button");

themeButton.addEventListener("click", (e) => {
  var relPosition = e.clientX - themeButton.offsetLeft;

  if (relPosition <= 19) SetTheme("default__theme");
  else if (relPosition <= 47) SetTheme("dark__theme");
  else SetTheme("light__theme");
});

function SetTheme(theme) {
  if (!themeButton.classList.contains(theme)) {
    themeButton.classList.remove(
      "default__theme",
      "dark__theme",
      "light__theme"
    );
    themeButton.classList.add(theme);

    ApplyTheme(theme);
    localStorage.setItem("selectedTheme", theme);
  }
}

function ApplyTheme(theme) {
  let root = document.querySelector(":root");
  if (theme == "default__theme") {
    /*DEFAULT THEME */
    root.style.setProperty("--calculator-bg", "#3a4663");
    root.style.setProperty("--calculator-clr", "#fff");
    root.style.setProperty("--theme-btn-bg", "#242d44");
    root.style.setProperty("--theme-switsh-bg", "#d03f2f");

    root.style.setProperty("--screen-bg", "#181f33");
    root.style.setProperty("--keyboard-bg", "#242d44");
    root.style.setProperty("--key-bg", "#eae3dc");
    root.style.setProperty("--key-clr", "#434a59");

    root.style.setProperty("--key-del-bg", "#647198");
    root.style.setProperty("--key-del-clr", "#fff");
    root.style.setProperty("--equal-bg", "#d03f2f");
    root.style.setProperty("--equal-clr", "#fff");

    root.style.setProperty("--number-shadow", "#a79e91");
    root.style.setProperty("--del-shadow", "#414e73");
    root.style.setProperty("--reset-shadow", "#414e73");
    root.style.setProperty("--equal-shadow", "#873901");
  } else if (theme == "dark__theme") {
    /*DARK THEME */
    root.style.setProperty("--calculator-bg", "#17062a");
    root.style.setProperty("--calculator-clr", "#ffe53d");
    root.style.setProperty("--theme-btn-bg", "#1e0936");
    root.style.setProperty("--theme-switsh-bg", "#00ded0");

    root.style.setProperty("--screen-bg", "#1e0936");
    root.style.setProperty("--keyboard-bg", "#1e0936");
    root.style.setProperty("--key-bg", "#331c4d");
    root.style.setProperty("--key-clr", "#ffe53d");

    root.style.setProperty("--key-del-bg", "#56077c");
    root.style.setProperty("--key-del-clr", "#fff");
    root.style.setProperty("--equal-bg", "#00ded0");
    root.style.setProperty("--equal-clr", "#fff");

    root.style.setProperty("--number-shadow", "#881c9e");
    root.style.setProperty("--del-shadow", "#be15f4");
    root.style.setProperty("--reset-shadow", "#be15f4");
    root.style.setProperty("--equal-shadow", "#6cf9f0");
  } else if (theme == "light__theme") {
    /*LIGHT THEME */
    root.style.setProperty("--calculator-bg", "#e6e6e6");
    root.style.setProperty("--calculator-clr", "#36362c");
    root.style.setProperty("--theme-btn-bg", "#D2CDCD");
    root.style.setProperty("--theme-switsh-bg", "#c85402");

    root.style.setProperty("--screen-bg", "#eee");
    root.style.setProperty("--keyboard-bg", "#d2cdcd");
    root.style.setProperty("--key-bg", "#e5e4e1");
    root.style.setProperty("--key-clr", "#36362c");

    root.style.setProperty("--key-del-bg", "#378187");
    root.style.setProperty("--key-del-clr", "#fff");
    root.style.setProperty("--equal-bg", "#c85402");
    root.style.setProperty("--equal-clr", "#fff");

    root.style.setProperty("--number-shadow", "#b3a497");
    root.style.setProperty("--del-shadow", "#1b6066");
    root.style.setProperty("--reset-shadow", "#1b6066");
    root.style.setProperty("--equal-shadow", "#93261a");
  }
}

if (localStorage.getItem("selectedTheme")) {
  SetTheme(localStorage.getItem("selectedTheme"));
} else {
  const userPrefersDark =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  const userPrefersLight =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: light)").matches;

  if (userPrefersDark) {
    SetTheme("dark__theme");
  } else if (userPrefersLight) {
    SetTheme("light__theme");
  }
}
