const form = document.getElementById("form");
const nameField = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const ConfirmPassword = document.getElementById("ConfirmPassword");
const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const confirmPasswordError = document.getElementById("ConfirmPasswordError");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  nameError.textContent = "";
  emailError.textContent = "";
  passwordError.textContent = "";
  confirmPasswordError.textContent = "";

  // Validate name
  if (nameField.value.trim() === "") {
    nameError.textContent = "Name is required.";
  } else if (!/^[a-zA-Z' ']+$/.test(nameField.value)) {
    nameError.textContent = "Name should only contain letters.";
  }

  // Validate email
  if (email.value.trim() == "") {
    emailError.textContent = "E mail is require";
  } else if (!/\S+@\S+\.\S+/.test(email.value)) {
    emailError.textContent = "Invalid E mail address !";
  }
  // Validate password
  if (
    (password.value.length < 8 && ConfirmPassword.value.length < 8 && !/[a-z]/.test(password.value)) ||
    !/[a-z]/.test(password.value) ||
    !/\d/.test(password.value)
  ) {
    passwordError.textContent = "Password should be at last 8 characters. and Password Should be content at least one uppercase letter, one lowercase letter, and one digit.";
    
  }
  // Validate confirm Password
  if (password.value !== ConfirmPassword.value) {
    confirmPasswordError.textContent = "Password doesn't  Match";
  }
});
