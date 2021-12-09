const btn = document.querySelector(".btn");
const errMsg = document.querySelector(".err-msg");
const errIcon = document.querySelector(".err-icon");
const emailInput = document.querySelector(".email");

const getError = () => {
  errIcon.classList.remove("hidden");
  errMsg.classList.remove("hidden");
  emailInput.classList.add("border");
};

const getSucces = () => {
  errIcon.classList.add("hidden");
  errMsg.classList.add("hidden");
  emailInput.classList.remove("border");
  emailInput.value = "";
};

const isValid = (email) => {
  let regEx =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regEx.test(String(email).toLocaleLowerCase());
};

btn.addEventListener("click", function () {
  let emailValue = emailInput.value.trim();
  if (emailValue === "" || !isValid(emailValue)) {
    getError();
  } else {
    getSucces();
  }
});
