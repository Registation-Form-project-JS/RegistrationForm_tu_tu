const form = document.getElementById("registration-form");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-pass");
const termsCheckbox = document.getElementById("terms");
const submitButton = document.getElementById("submit");

// Error elements
const emailError = document.getElementById("email-error");
const passwordError = document.getElementById("password-error");
const confirmError = document.getElementById("confirm-password-error");

// Function to toggle error messages
function setError(element, isValid) {
  element.style.display = isValid ? "none" : "block";
}

// Email validation
function checkEmail() {
  const email = emailInput.value;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isValid = emailPattern.test(email);
  setError(emailError, isValid);
  return isValid;
}

// Password validation
function checkPassword() {
  const password = passwordInput.value;
  const isValid =
    password.length >= 5 && /[A-Z]/.test(password) && /\d/.test(password);
  setError(passwordError, isValid); // Correctly toggles error visibility
  return isValid;
}

// Confirm password validation
function checkConfirm() {
  const isValid = confirmPassword.value === passwordInput.value;
  setError(confirmError, isValid); // Correctly toggles error visibility
  return isValid;
}

// Form validation
function checkAllValid() {
  const isFormValid =
    checkEmail() && checkPassword() && checkConfirm() && termsCheckbox.checked;
  submitButton.disabled = !isFormValid;
}

// Event listeners
const inputs = [emailInput, passwordInput, confirmPassword];
inputs.forEach((input) => input.addEventListener("input", checkAllValid));
termsCheckbox.addEventListener("change", checkAllValid);
