const input = document.querySelector(".form__email");
const form = document.querySelector(".form-input");
const errorImg = document.getElementById("error");
const errorMessage = document.querySelector(".form__message");
let x = window.matchMedia("(min-width: 1440px)");

function validateEmail() {
  if (!input.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
    errorImg.style.opacity = "1";
    errorImg.style.right = "6rem";
    input.style.border = "2px solid hsl(0, 93%, 68%)";
    errorMessage.style.opacity = "1";
    errorMessage.style.bottom = "-60%";
    return false;
  } else {
    errorImg.style.opacity = "0";
    errorImg.style.right = "2rem";
    errorMessage.style.opacity = "0";
    errorMessage.style.bottom = "10%";
    input.style.border = "1px solid hsl(0, 36%, 70%)";
    return true;
  }
}
