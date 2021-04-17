const modal = document.querySelector(".backup-modal");

/*----- OPEN MODAL -------*/

const btn = document.querySelector("#btnBackup");

btn.addEventListener("click", () => {
  toggleModal();
});

const btnClose = document.querySelector(".close-icon");

btnClose.addEventListener("click", () => {
  toggleModal();
});

toggleModal = () => {
  modal.classList.toggle("display-modal");
};

/*----- /OPEN MODAL -------*/

/*----- SELECT RADIO -------*/

modal.addEventListener("click", (e) => {
  const radio = e.target.closest(".radio");
  const btn = e.target.closest(".btn-green");
  
  if (radio) {
    const pledge = radio.parentNode.parentNode;

    if (!pledge.classList.contains("selected")) {
      const pledges = document.querySelectorAll(".pledge");

      const RemovePlegdePayment = (pledge) => {
        const pledgePayment = pledge.querySelector(".pledge__payment");
        if (
          pledgePayment &&
          pledgePayment.classList.contains("display-payment")
        )
          pledgePayment.classList.toggle("display-payment");
      };

      const AddPlegdePayment = (pledge) => {
        const pledgePayment = pledge.querySelector(".pledge__payment");
        if (
          pledgePayment &&
          !pledgePayment.classList.contains("display-payment")
        )
          pledgePayment.classList.toggle("display-payment");
      };

      pledges.forEach((item) => {
        if (item.classList.contains("selected")) {
          item.classList.toggle("selected");
          RemovePlegdePayment(item);
        }
      });

      pledge.classList.toggle("selected");
      AddPlegdePayment(pledge);
    }
  } else if (btn) {
    toggleModal();
    const success = document.querySelector(".success-modal");
    success.classList.toggle("display-modal");

    const btnOk = success.querySelector(".btn-green");

    btnOk.addEventListener("click", () => {
      if (success.classList.contains("display-modal"))
        success.classList.toggle("display-modal");

      const pledges = document.querySelectorAll(".pledge");
      pledges.forEach((pledge) => {
        if (pledge.classList.contains("selected"))
          pledge.classList.toggle("selected");

        pledge.querySelector(".radio").checked = false;

        const pledgePayment = pledge.querySelector(".pledge__payment");
        if (
          pledgePayment &&
          pledgePayment.classList.contains("display-payment")
        )
          pledgePayment.classList.toggle("display-payment");
      });
    });
  }
});

/*----- /SELECT RADIO -------*/

/*----- CONFIRM PLEDGE -------*/

/*----- /CONFIRM PLEDGE -------*/
