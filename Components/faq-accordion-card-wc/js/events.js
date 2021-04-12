var element = document.getElementsByClassName("faq");

[].forEach.call(element, (card) => {
  card.addEventListener("click", () => {
    [].forEach.call(element, (card_clicked) => {
      if (!card_clicked.classList.contains("faq-toggle"))
        card_clicked.classList.toggle("faq-toggle");
    });

    card.classList.toggle("faq-toggle");
  });
});
