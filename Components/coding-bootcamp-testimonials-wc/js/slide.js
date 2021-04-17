const btn = document.querySelector(".btn");

document.addEventListener("click", (e) => {
  const images = document.querySelectorAll(".testimonee-image");
  images.forEach((image) => {
    image.classList.toggle("display");
  });

  const testimonial = document.querySelectorAll(".testimonial_container");
  testimonial.forEach((image) => {
    image.classList.toggle("display");
  });

  //   if (e.target.id === "btn-left") {

  //   } else if (e.target.id === "btn-right") {

  //   }
});
