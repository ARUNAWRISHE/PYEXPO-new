function validateSignup(event) {
    event.preventDefault(); // Prevent default form submission

    // Get input values
    const username = document.getElementById("username").value.trim();
    const gmail = document.getElementById("gmail").value.trim();
    const phoneNumber = document.getElementById("phoneNumber").value.trim();
    const password = document.getElementById("passwordSignUp").value.trim();
    const role = document.getElementById("role").value.trim();
    const errorMessage = document.getElementById("error-message");

    // Check if all fields are filled
    if (!username || !gmail || !phoneNumber || !password || !role) {
        errorMessage.style.display = "block"; // Show error message
        return false;
    }

    // Redirect to home page if validation passes
    window.location.href = "home.html";
}
