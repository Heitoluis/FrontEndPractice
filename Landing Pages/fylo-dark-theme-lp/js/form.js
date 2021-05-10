var anyError = false;
validateForm = (inputId) => {
  const form = document.getElementsByTagName("form")[0];

  const input = document.getElementById(inputId);
  const error_msg = document.querySelector("#" + inputId + " ~ span");
  //   const error_img = document.querySelector("#" + inputId + " ~ img");

  input.addEventListener("input", function (event) {});

  form.addEventListener("submit", function (event) {
    // si el campo de correo electrónico es válido, dejamos que el formulario se envíe

    event.preventDefault();

    if (input.validity.valid && input.value != "") {
      removeError(error_msg);
      //   removeError(error_img);

      //   emailSuccess.textContent = "Email succesfully registered!";
    } else {
      // Si todavía hay un error, muestra el error exacto
      ValidateError();
    }
  });

  function ValidateError() {
    var error = false;

    if (!email.value) {
      // Si el campo está vacío

      error = true;

      if (inputId === "email") {
        error_msg.innerHTML = "Please, enter an email address";
      }
    } else if (email.validity.typeMismatch && inputId === "email") {
      error = true;
      error_msg.innerHTML = "Error, please check your email.";
    }

    if (error === true) {
      showError(error_msg);
      //   showError(error_img);
    }
  }

  function showError(object) {
    anyError = true;

    if (!object.classList.contains("error-display"))
      object.classList.toggle("error-display");
  }

  function removeError(object) {
    if (object.classList.contains("error-display"))
      object.classList.toggle("error-display");
  }
};

validateForm("email");
