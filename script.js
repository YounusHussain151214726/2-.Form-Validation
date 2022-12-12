const form = document.getElementById("form");
const register = document.getElementById("registerBtn");
const messageBox = document.getElementById("messageBox");
const message = document.getElementById("message");
const password = document.getElementById("pass");
const confirmPassword = document.getElementById("confirmPass");

let isValid = false;
let passwordMatched = false;
console.log(password.value, confirmPassword.value);

function checkFormVAlidation() {
  isValid = form.checkValidity();
  if (!isValid) {
    message.textContent = "Error! Please submit form carefully";
    message.style.color = "red";
    messageBox.style.borderColor = "red";
    return;
  }

  if (password.value === confirmPassword.value) {
    passwordMatched = true;
  } else {
    passwordMatched = false;
    message.textContent = "Un-Match! Confirm Password not match  ";
    message.style.color = "red";
    message.style.fontSize = "1.2rem";
    messageBox.style.borderColor = "red";
  }

  if (isValid && password) {
    message.textContent = "✅ Form submit Succesfully";
    // messageBox.style.borderColor='green';
  }
}

//password checking

function storeData() {
  const Data = {
    name: form.name.value,
    phone: form.phone.value,
    email: form.email.value,
    url: form.url.value,
    password: form.pass.value,
    confirmPassword: form.cpass.value,
  };
  console.log(Data);
}

function formProcess(e) {
  e.preventDefault();
  checkFormVAlidation();
  if (isValid && passwordMatched) {
    storeData();
  }
  console.log(e);
}

console.log(form);

form.addEventListener("submit", formProcess);
