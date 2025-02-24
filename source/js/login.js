function goBack() {
    window.location.href = "home.html"; // Redirect to home page
}


document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevents form from reloading the page

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        if (username && password) {
            // Simulating login validation (replace with actual authentication)
            localStorage.setItem("isLoggedIn", "true");
            localStorage.setItem("username", username);

            alert("Login Successful!");
            window.location.href = "home.html"; // Redirect to home page
        } else {
            document.getElementById("error-message").style.display = "block";
        }
    });
});


function validateLogin(event) {
    event.preventDefault(); // Prevent default form submission

    // User credentials
    const users = {
        "admin": { password: "admin123", redirect: "home.html" },
        "user1": { password: "password1", redirect: "https://chatgpt.com/" }
    };

    // Get user input
    const username = document.getElementById("loginUsername").value.trim();
    const password = document.getElementById("loginPassword").value.trim();
    const errorMessage = document.getElementById("error-message");

    // Validate user credentials
    if (users[username] && users[username].password === password) {
        window.location.href = users[username].redirect; // Redirect to assigned page
    } else {
        errorMessage.style.display = "block"; // Show error message
    }
}
