/*
 * Get the password fields using data-* global attribute 
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/data-* 
 */
var password = Array.from(document.querySelectorAll("[data-input]"));

// Toggle the Show Passwords checkbox
var toggle = document.querySelector("#show-passwords");

// Toggle a single password field to set visibility
function togglePassword(password) {
  password.type = toggle.checked ? "text" : "password";
}

// Toggle all password fields to set their visibility
function toggleAll(event) {
  password.forEach(togglePassword);
}

// Show/hide passwords, on toggle, in the checkbox
toggle.addEventListener("change", toggleAll, false);