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
function loginUser() {
    localStorage.setItem("loggedIn", "true");
    window.location.reload(); // Refresh page to update UI
}

// Function to simulate logout
function logoutUser() {
    localStorage.removeItem("loggedIn");
    window.location.reload();
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
