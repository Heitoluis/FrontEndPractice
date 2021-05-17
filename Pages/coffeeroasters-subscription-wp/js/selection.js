//Se permite que las opciones nazcan abiertas.
document.querySelectorAll(".option__list").forEach((child) => {
  child.style.maxHeight = child.scrollHeight + 32 + "px";
});

const selection = document.querySelector(".selection__list");

selection.addEventListener("click", (e) => {
  // console.log(e.target);

  if (
    e.target.classList.contains("selection__list") ||
    e.target.classList.contains("selection__item")
  ) {
    return;
  }

  var selectionTitle;
  if (e.target.classList.contains("selection__title"))
    selectionTitle = e.target;

  var options__item;
  if (e.target.classList.contains("options__item")) options__item = e.target;
  else if (e.target.classList.contains("option"))
    options__item = e.target.parentNode;

  if (options__item != null) {
    const section = options__item.parentNode.parentNode;
    const options = options__item.parentNode.querySelectorAll(".option");
    const option = options__item.querySelector(".option");

    //Cuando se selecciona una opción diferente de la marcada,
    //se deseleccionan todas y se selecciona la opción marcada.
    if (!option.classList.contains("cyan-selection")) {
      options.forEach((child) => {
        if (child.classList.contains("cyan-selection")) {
          child.classList.toggle("cyan-selection");
        }
      });

      option.classList.toggle("cyan-selection");

      SetSelection(section, option);
    }
  } else if (selectionTitle != null) {
    selectionTitle.classList.toggle("rotate-180");
    ToggleList(selectionTitle.nextElementSibling);
  }
});

//----CHECKOUT------//
const btnCheckOut = document.querySelector(".create-plan");
const btnClose = document.querySelector(".modal .close-icon");
const modal = document.querySelector(".modal");

btnCheckOut.addEventListener("click", () => {
  modal.classList.toggle("modal-display");
  document.querySelector("body").style.overflowY = "hidden";

  const quantity = document.querySelector(".spanDelivery");
  const price = document.querySelector(".spanCheckOutPrice");
});

btnClose.addEventListener("click", () => {
  modal.classList.toggle("modal-display");
  document.querySelector("body").style.overflowY = "initial";
});

function ToggleList(list) {
  if (list.style.maxHeight) {
    CollapseList(list);
  } else {
    ExpandList(list);
  }
}

function ExpandList(list) {
  list.style.maxHeight = list.scrollHeight + "px";
}

function CollapseList(list) {
  list.style.maxHeight = null;
}

function DisableSection(sectionID) {
  const section = document.querySelector("#" + sectionID);
  const title = section.querySelector(".selection__title");
  CollapseList(title.nextElementSibling);
  title.classList.toggle("option-disabled");
  section.style.pointerEvents = "none";
}

function EnableSection(sectionID) {
  const section = document.querySelector("#" + sectionID);
  const title = section.querySelector(".selection__title");
  ExpandList(title.nextElementSibling);
  title.classList.toggle("option-disabled");
  section.style.pointerEvents = "initial";
}

function UpdateElementText(id, text) {
  const elements = document.querySelectorAll("#" + id);

  elements.forEach((element) => {
    element.textContent = text;
  });
}

function SetSelection(section, selection) {
  if (section.id === "sectionPreference") {
    if (selection.id === "capsule") {
      DisableSection("sectionGrind");
      UpdateElementText("spanPreferenceText", "using ");
      UpdateElementText("spanPreference", "Capsules");
      UpdateElementText("spanGrindText", "");
      UpdateElementText("spanGrind", "");
    } else {
      EnableSection("sectionGrind");
      UpdateElementText("spanPreferenceText", "as ");
      UpdateElementText("spanPreference", selection.getAttribute("value"));
      UpdateElementText("spanGrindText", "ground ala ");
      UpdateElementText(
        "spanGrind",
        document.querySelector("#cafetiere").getAttribute("value")
      );
    }
  } else if (section.id === "sectionType") {
    UpdateElementText("spanType", selection.getAttribute("value"));
  } else if (section.id === "sectionQuantity") {
    if (selection.id == "250g") {
      UpdateElementText("span1WeekPrice", "7.20");
      UpdateElementText("span2WeekPrice", "9.60");
      UpdateElementText("spanEveryMonthPrice", "12.00");
    } else if (selection.id == "500g") {
      UpdateElementText("span1WeekPrice", "13.00");
      UpdateElementText("span2WeekPrice", "17.50");
      UpdateElementText("spanEveryMonthPrice", "22.00");
    } else if (selection.id == "1000g") {
      UpdateElementText("span1WeekPrice", "22.00");
      UpdateElementText("span2WeekPrice", "32.00");
      UpdateElementText("spanEveryMonthPrice", "42.00");
    }

    CalculateCheckOutPrice(GetSelectedPeriod());
    UpdateElementText("spanQuantity", selection.getAttribute("value"));
  } else if (section.id === "sectionGrind") {
    UpdateElementText("spanGrind", selection.getAttribute("value"));
  } else if (section.id === "sectionDelivery") {
    CalculateCheckOutPrice(selection.id);
    UpdateElementText("spanDelivery", selection.getAttribute("value"));
  }
}

function CalculateCheckOutPrice(deliveryId) {
  const checkOut = document.querySelector("#spanCheckOutPrice");

  if (deliveryId == "every-week") {
    const price = document.querySelector("#span1WeekPrice").textContent;
    checkOut.textContent = " - " + price * 4 + " / mo";
  } else if (deliveryId == "every-2week") {
    const price = document.querySelector("#span2WeekPrice").textContent;
    checkOut.textContent = " - " + price * 2 + " / mo";
  } else if (deliveryId == "every-month") {
    const price = document.querySelector("#spanEveryMonthPrice").textContent;
    checkOut.textContent = " - " + price * 1 + " / mo";
  }
}

function GetSelectedPeriod() {
  const section = document.querySelector("#sectionDelivery");
  const option = section.querySelector(".cyan-selection");
  return option.id;
}
