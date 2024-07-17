// Create reference for input fields.
const firstNameInput = document.querySelector("#first-name-input");
const lastNameInput = document.querySelector("#last-name-input");
const emailInput = document.querySelector("#email-input");
const passInput = document.querySelector("#pass-input");
const conPassInput = document.querySelector("#con-pass-input");

// Create reference for buttons.
const submitBtn = document.querySelector("#submit-btn");
const clearBtn = document.querySelector("#clear-btn");

// Simple email validation
function validateEmail(email) {
  var atPos = email.indexOf("@");
  var dotPos = email.lastIndexOf(".");
  return atPos > 0 && dotPos > atPos + 1 && dotPos < email.length - 1;
}

// Add callback function to remove classes and hide error messages on keyup event
[firstNameInput, lastNameInput, emailInput, passInput, conPassInput].forEach(input => {
  input.oninput = () => {
    input.classList.remove("is-valid");
    input.classList.remove("is-invalid");
    input.classList.add("border-gray");
  };
});

// Add callback function for submit button.
submitBtn.onclick = () => {
  let isFirstNameOk = false;
  let isLastNameOk = false;
  let isEmailOk = false;
  let isPassOk = false;
  let isConPassOk = false;

  // Validate first name
  if (firstNameInput.value.trim() === "") {
    firstNameInput.classList.add("is-invalid");
    firstNameInput.classList.remove("border-gray");
  } else {
    firstNameInput.classList.add("is-valid");
    isFirstNameOk = true;
  }

  // Validate last name
  if (lastNameInput.value.trim() === "") {
    lastNameInput.classList.add("is-invalid");
    lastNameInput.classList.remove("border-gray");
  } else {
    lastNameInput.classList.add("is-valid");
    isLastNameOk = true;
  }

  // Validate email
  if (!validateEmail(emailInput.value)) {
    emailInput.classList.add("is-invalid");
    emailInput.classList.remove("border-gray");
  } else {
    emailInput.classList.add("is-valid");
    isEmailOk = true;
  }

  // Validate password
  if (passInput.value.length < 6) {
    passInput.classList.add("is-invalid");
    passInput.classList.remove("border-gray");
  } else {
    passInput.classList.add("is-valid");
    isPassOk = true;
  }

  // Validate confirm password
  if (conPassInput.value !== passInput.value || conPassInput.value.length < 6) {
    conPassInput.classList.add("is-invalid");
    conPassInput.classList.remove("border-gray");
  } else {
    conPassInput.classList.add("is-valid");
    isConPassOk = true;
  }

  if (isFirstNameOk && isLastNameOk && isEmailOk && isPassOk && isConPassOk) {
    alert("Registered successfully");
  }
};

// Add callback function for reset button.
clearBtn.onclick = () => {
  [firstNameInput, lastNameInput, emailInput, passInput, conPassInput].forEach(input => {
    input.value = "";
    input.classList.remove("is-valid");
    input.classList.remove("is-invalid");
    input.classList.add("border-gray");
  });
};
