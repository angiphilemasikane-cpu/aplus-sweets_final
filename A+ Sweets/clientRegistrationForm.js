// JavaScript file: clientRegistrationForm.js

// Function to copy home address to postal address when checkbox is checked
function copyAddress() {
  const home = document.querySelector("textarea[name='homeAddress']").value;
  const postal = document.querySelector("textarea[name='postalAddress']");
  postal.value = home;
}

// Form validation on submit
window.addEventListener("DOMContentLoaded", () => {
  document.getElementById("registrationForm").addEventListener("submit", function (e) {
    const password = this.password.value;
    const confirmPassword = this.confirmPassword.value;

    if (password !== confirmPassword) {
      e.preventDefault();
      alert("Passwords do not match. Please try again.");
    }
  });
});
