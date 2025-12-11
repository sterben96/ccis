const loginForm = document.getElementById("loginForm");
const loginButton = document.getElementById("loginBtn");
const errorMessage = document.getElementById("error-message");

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "admin" && password === "1234") {

        loginButton.innerText = "Loading...";
        errorMessage.innerText = "";

        setTimeout(() => {
            window.location.href = "home.html";
        }, 1000);

    } else {
        errorMessage.innerText = "Invalid username or password";

        loginForm.classList.add("shake");
        setTimeout(() => {
            loginForm.classList.remove("shake");
        }, 500);
    }
});