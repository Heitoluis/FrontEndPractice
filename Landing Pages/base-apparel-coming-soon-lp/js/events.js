// Hay muchas formas de elegir un nodo DOM; aquí obtenemos el formulario y, a continuación, el campo de entrada
// del correo electrónico, así como el elemento span en el que colocaremos el mensaje de error.
const form = document.getElementsByTagName("form")[0];

const email = document.getElementById("email");
const emailError = document.querySelector(".error");
const emailSuccess = document.querySelector(".success");
const emailImage = document.querySelector(".error-image");
emailImage.className = "";

email.addEventListener("input", function (event) {
  // Cada vez que el usuario escribe algo, se limpia el input
  emailError.innerHTML = "";
  emailSuccess.innerHTML = "";
  emailImage.className = "";
});

form.addEventListener("submit", function (event) {
  // si el campo de correo electrónico es válido, dejamos que el formulario se envíe

  event.preventDefault();

  if (email.validity.valid) {
    emailSuccess.textContent = "Email succesfully registered!";
  } else {
    // Si todavía hay un error, muestra el error exacto
    showError();
  }

  //   if (!email.validity.valid) {
  //     // Si no es así, mostramos un mensaje de error apropiado
  //     showError();
  //     // Luego evitamos que se envíe el formulario cancelando el evento
  //     event.preventDefault();
  //   }
});

function showError() {
  emailImage.className = "error-image";

  if (email.validity.valueMissing) {
    // Si el campo está vacío
    // muestra el mensaje de error siguiente.
    emailError.textContent = "Please, provide a valid email.";
  } else if (email.validity.typeMismatch) {
    // Si el campo no contiene una dirección de correo electrónico
    // muestra el mensaje de error siguiente.
    emailError.textContent = "Please, provide a valid email.";
  } else if (email.validity.tooShort) {
    // Si los datos son demasiado cortos
    // muestra el mensaje de error siguiente.
    emailError.textContent = "The email must have at least 8 characters";
  }
}
