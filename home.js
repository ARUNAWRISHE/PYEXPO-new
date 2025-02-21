document.addEventListener("DOMContentLoaded", function () {
    const isLoggedIn = localStorage.getItem("loggedIn") === "true";

    const loginButton = document.querySelector(".btn.login");
    const logoutButton = document.querySelector(".btn.logout");
    const profileIcon = document.querySelector(".profile-icon")?.closest("li");

    if (isLoggedIn) {
        // User is logged in: Remove Login button, keep Profile & Logout
        if (profileIcon) profileIcon.remove();
        if (logoutButton) logoutButton.parentElement.remove();
    } else {
        // User is NOT logged in: Remove Profile & Logout, keep Login button
        if (loginButton) loginButton.parentElement.remove();
    }

    // Search Function
    function search() {
        let searchQuery = document.getElementById("search-input").value.toLowerCase();
        alert("Searching for: " + searchQuery);
    }
    window.search = search; // Make function available globally

    // Redirect to farmer detail page when clicking a product
    document.querySelectorAll(".product").forEach(product => {
        product.addEventListener("click", function () {
            let farmerDetailUrl = this.getAttribute("data-farmer-url");
            if (farmerDetailUrl) {
                window.location.href = farmerDetailUrl;
            } else {
                alert("Farmer details not available!");
            }
        });
    });
});

// Function to simulate login (replace with real authentication)
function loginUser() {
    localStorage.setItem("loggedIn", "true");
    window.location.reload(); // Refresh page to update UI
}

// Function to simulate logout
function logoutUser() {
    localStorage.removeItem("loggedIn");
    window.location.reload();
}
