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

const loginForm = document.getElementById("login");
const loginButton = document.getElementById("login-btn");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "level" && password === "Access123") {
        alert("You have successfully logged in.");
        location.reload();
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})
