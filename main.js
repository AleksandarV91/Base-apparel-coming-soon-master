const btn = document.querySelector(".btn");
const errMsg = document.querySelector(".err-msg");
const errIcon = document.querySelector(".err-icon");
const emailInput = document.querySelector(".email-input");

const getError = () => {
  errIcon.classList.add("show");
  errMsg.classList.add("show");
  emailInput.classList.add("border");
};

const getSucces = () => {
  errIcon.classList.remove("show");
  errMsg.classList.remove("show");
  emailInput.classList.remove("border");
  emailInput.value = "";
};

const isValid = (email) => {
  let regEx =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regEx.test(String(email).toLocaleLowerCase());
};

btn.addEventListener("click", () => {
  const emailValue = emailInput.value.trim();
  if (emailValue === "") {
    getError();
    errMsg.innerHTML = "The `input` field is empty";
  } else if (!isValid(emailValue)) {
    getError();
    errMsg.innerHTML = "The email address is not formatted correctly";
  } else {
    getSucces();
  }
});
