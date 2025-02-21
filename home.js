document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".scroll-effect");

    function revealOnScroll() {
        elements.forEach((element) => {
            const elementTop = element.getBoundingClientRect().top;
            if (elementTop < window.innerHeight - 50) {
                element.classList.add("reveal");
            }
        });
    }

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll(); // Run on page load to check already visible elements
});
// Search Function
function search() {
    let searchQuery = document.getElementById("search-input").value.toLowerCase();
    alert("Searching for: " + searchQuery);
}

document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".product").forEach(product => {
        product.addEventListener("click", function () {
            // Assuming each product has a data attribute for the farmer detail page URL
            let farmerDetailUrl = this.getAttribute("data-farmer-url");
            if (farmerDetailUrl) {
                window.location.href = farmerDetailUrl;
            } else {
                alert("Farmer details not available!");
            }
        });
    });
});

