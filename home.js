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

