// Hay muchas formas de elegir un nodo DOM; aquí obtenemos el formulario y, a continuación, el campo de entrada
// del correo electrónico, así como el elemento span en el que colocaremos el mensaje de error.
var anyError = false;
validateForm = (inputId) => {
  const form = document.getElementsByTagName("form")[0];

  const input = document.getElementById(inputId);
  const error_msg = document.querySelector("#" + inputId + " ~ p");
  const error_img = document.querySelector("#" + inputId + " ~ img");

  input.addEventListener("input", function (event) {});

  form.addEventListener("submit", function (event) {
    // si el campo de correo electrónico es válido, dejamos que el formulario se envíe

    event.preventDefault();

    if (input.validity.valid) {
      removeError(error_msg);
      removeError(error_img);

      //   emailSuccess.textContent = "Email succesfully registered!";
    } else {
      // Si todavía hay un error, muestra el error exacto
      ValidateError();
    }
  });

  function ValidateError() {
    var error = false;

    if (email.validity.valueMissing) {
      // Si el campo está vacío

      error = true;

      if (inputId === "email") {
        error_msg.innerHTML = "First name cannot be empty";
      }
    } else if (email.validity.typeMismatch && inputId === "email") {
      error = true;
      error_msg.innerHTML = "Looks like this is not an email";
    }

    if (error === true) {
      showError(error_msg);
      showError(error_img);
    }
  }

  function showError(object) {
    anyError = true;

    if (!object.classList.contains("display-error"))
      object.classList.toggle("display-error");
  }

  function removeError(object) {
    if (object.classList.contains("display-error"))
      object.classList.toggle("display-error");
  }
};

validateForm("firstName");
validateForm("lastName");
validateForm("email");
validateForm("password");
