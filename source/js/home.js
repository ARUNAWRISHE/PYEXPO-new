function openMenu() {
    document.getElementById("sideMenu").style.left = "0";
    document.getElementById("overlay").style.display = "block";
    document.body.classList.add("dull-bg");
}

function closeMenu() {
    document.getElementById("sideMenu").style.left = "-260px";
    document.getElementById("overlay").style.display = "none";
    document.body.classList.remove("dull-bg");
}
document.addEventListener("DOMContentLoaded", function () {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    const loginButton = document.querySelector(".btn.login");
    const logoutButton = document.querySelector(".btn.logout");
    const profileIcon = document.querySelector(".profile-icon")?.closest("li");

    if (isLoggedIn) {
        // Show Profile & Logout, Hide Login
        if (logoutButton) logoutButton.style.display = "block";
        if (profileIcon) profileIcon.style.display = "block";
    } else {
        // Show Login, Hide Profile & Logout
        
        if (loginButton) loginButton.style.display = "block";
    }

    // Logout function
    logoutButton.addEventListener("click", function () {
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("username");
        window.location.reload(); // Refresh page after logout
    });
});


function loginUser() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username && password) {
        // Simulating login validation (you can replace this with actual validation)
        localStorage.setItem("isLoggedIn", "true");
        alert("Login Successful!");
        window.location.href = "home.html"; // Redirect to home page
    } else {
        alert("Please enter valid login details.");
    }
}


function loginUser() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username && password) {
        // Simulating login validation (replace this with actual authentication logic)
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("username", username); // Store username for profile

        alert("Login Successful!");
        window.location.href = "home.html"; // Redirect to home page
    } else {
        alert("Please enter valid login details.");
    }
}

// Function to handle logout
function logoutUser() {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("username");
    alert("Logged out successfully.");
    window.location.href = "home.html"; // Redirect to home after logout
}

// Function to update UI based on login status
function updateUI() {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    const loginButton = document.querySelector(".btn.login");
    const logoutButton = document.querySelector(".btn.logout");
    const profileIcon = document.querySelector(".profile-icon")?.closest("li");

    if (isLoggedIn) {
        if (loginButton) loginButton.style.display = "none"; // Hide login
        if (logoutButton) logoutButton.style.display = "block"; // Show logout
        if (profileIcon) profileIcon.style.display = "block"; // Show profile
    } else {
        if (loginButton) loginButton.style.display = "block"; // Show login
        if (logoutButton) logoutButton.style.display = "none"; // Hide logout
        if (profileIcon) profileIcon.style.display = "none"; // Hide profile
    }
}

// Ensure UI updates correctly on every page load
document.addEventListener("DOMContentLoaded", updateUI);

    // Search Function
// 

function navigateToProduct(category) {
    window.location.href = `product-list.html?category=${category}`;
}


document.addEventListener("DOMContentLoaded", function () {
    let currentIndex = 0;
    const slides = document.querySelector('.slides');
    const dots = document.querySelectorAll('.dot');
    const totalSlides = document.querySelectorAll('.slide').length;
    let slideInterval;

    function updateSlidePosition() {
        slides.style.transform = `translateX(${-currentIndex * 100}%)`;
        dots.forEach(dot => dot.classList.remove('active'));
        dots[currentIndex].classList.add('active');
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalSlides;
        updateSlidePosition();
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        updateSlidePosition();
    }

    function goToSlide(index) {
        currentIndex = index;
        updateSlidePosition();
        resetAutoSlide(); // Restart auto-slide after manual selection
    }

    function startAutoSlide() {
        slideInterval = setInterval(nextSlide, 3000);
    }

    function stopAutoSlide() {
        clearInterval(slideInterval);
    }

    function resetAutoSlide() {
        stopAutoSlide();
        startAutoSlide();
    }

    // Event listeners
    document.querySelector('.slideshow-container').addEventListener('mouseenter', stopAutoSlide);
    document.querySelector('.slideshow-container').addEventListener('mouseleave', startAutoSlide);

    dots.forEach((dot, index) => {
        dot.addEventListener("click", () => goToSlide(index));
    });

    updateSlidePosition(); // Ensure first slide is active
    startAutoSlide(); // Start the slideshow
});
