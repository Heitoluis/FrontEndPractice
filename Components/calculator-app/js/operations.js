const keyboard = document.querySelector(".calculator__keyboard");
const screenNumber = document.querySelector(".calculator__number");
var operation = "none";
var pointAdded = false;
var newNumber = true;
var leftSideNumber = null;
var rightSideNumber = null;
var bError = false;

keyboard.addEventListener("click", (e) => {
  if (e.target.classList.contains("calculator__keyboard")) return;

  const value = e.target.querySelector(".key__value").innerHTML;

  if (e.target.classList.contains("key__number")) {
    AddNumber(value);
  }
  if (e.target.classList.contains("key__point")) {
    AddPoint(value);
  } else if (e.target.classList.contains("key__sign")) {
    CheckForLonelyComma();

    if (!newNumber) {
      PerformOperation();
    }

    operation = value; //asigns '+', '-', '*' or '/'.
    leftSideNumber = parseFloat(screenNumber.innerHTML);
    newNumber = true;
    pointAdded = false;
  } else if (e.target.classList.contains("key__del")) {
    DeleteLastValue();
  } else if (e.target.classList.contains("key__equal")) {
    CheckForLonelyComma();

    if (!newNumber || !rightSideNumber) {
      rightSideNumber = parseFloat(screenNumber.innerHTML);
    }
    if (operation != "none") {
      PerformOperation();
    }

    newNumber = true;
    pointAdded = false;
  } else if (e.target.classList.contains("key__reset")) {
    Reset();
  }
});

function AddNumber(value) {
  if (bError) Reset();

  if (screenNumber.innerHTML.length >= 12) {
    return;
  }

  if (screenNumber.innerHTML == "0" || newNumber) {
    screenNumber.innerHTML = value;
  } else {
    screenNumber.innerHTML += value;
  }

  newNumber = false;
}

function AddPoint(value) {
  if (!pointAdded) {
    if (newNumber) {
      AddNumber("0");
    }

    screenNumber.innerHTML += value;
    pointAdded = true;
  }
}

function DeleteLastValue() {
  if (!newNumber) {
    if (screenNumber.innerHTML != "0") {
      const textLenght = screenNumber.innerHTML.length;

      if (textLenght == 1) {
        screenNumber.innerHTML = 0;
      } else {
        screenNumber.innerHTML = screenNumber.innerHTML.slice(
          0,
          textLenght - 1
        );
      }
    }
  }
}

function PerformOperation() {
  if (leftSideNumber == null) return;

  var result;

  if (operation == "+") {
    result = leftSideNumber + rightSideNumber;
  } else if (operation == "-") {
    result = leftSideNumber - rightSideNumber;
  } else if (operation == "x") {
    result = leftSideNumber * rightSideNumber;
  } else if (operation == "/") {
    if (screenNumber.innerHTML === "0") {
      screenNumber.innerHTML = "Error";
      bError = true;
      return;
    }

    result = leftSideNumber / rightSideNumber;
  }

  if (isNaN(result) || result > 999999999999) {
    screenNumber.innerHTML = "Error";
    bError = true;
  } else {
    screenNumber.innerHTML = result;
    leftSideNumber = result;
  }
}

function Reset() {
  screenNumber.innerHTML = 0;
  operation = "none";
  pointAdded = false;
  leftSideNumber = null;
  rightSideNumber = 0;
  newNumber = true;
  bError = false;
}

function CheckForLonelyComma() {
  if (
    pointAdded &&
    screenNumber.innerHTML.slice(screenNumber.innerHTML.length - 1) == "."
  ) {
    DeleteLastValue();
  }
}
