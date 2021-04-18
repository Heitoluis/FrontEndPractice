// Hay muchas formas de elegir un nodo DOM; aquí obtenemos el formulario y, a continuación, el campo de entrada
// del correo electrónico, así como el elemento span en el que colocaremos el mensaje de error.

validateForm = (inputId) => {
  const form = document.getElementsByTagName("form")[0];

  const input = document.getElementById(inputId);
  const error_msg = document.querySelector("#" + inputId + " ~ span");
  //   const error_img = document.querySelector("#" + inputId + " ~ img");

  input.addEventListener("input", function (event) {});

  form.addEventListener("submit", function (event) {
    // si el campo de correo electrónico es válido, dejamos que el formulario se envíe

    event.preventDefault();

    ValidateError();
  });

  function ValidateError() {
    var error = false;

    if (email.value.trim() === "") {
      // Si el campo está vacío

      error = true;

      if (inputId === "email") {
        error_msg.innerHTML = "Please, enter an email address";
      }
    } else if (email.validity.typeMismatch && inputId === "email") {
      error = true;
      error_msg.innerHTML = "Oops! That doesn't look like an email address";
    } else {
      error_msg.innerHTML = "";
    }

    if (error === true) {
      showError(error_msg);
      //   showError(error_img);
    }
  }

  function showError(object) {
    anyError = true;

    if (!object.classList.contains("display"))
      object.classList.toggle("display");
  }

  function removeError(object) {
    if (object.classList.contains("display"))
      object.classList.toggle("display");
  }
};

validateForm("email");
