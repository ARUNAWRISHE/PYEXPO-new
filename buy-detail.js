document.getElementById("product").addEventListener("change", function() {
    let selectedOption = this.options[this.selectedIndex];
    let price = selectedOption.getAttribute("data-price");
    let quantity = document.getElementById("quantity").value || 1;
    document.getElementById("totalPrice").innerText = price * quantity;
});

document.getElementById("quantity").addEventListener("input", function() {
    let selectedOption = document.getElementById("product").options[document.getElementById("product").selectedIndex];
    let price = selectedOption.getAttribute("data-price") || 0;
    document.getElementById("totalPrice").innerText = price * this.value;
});

document.getElementById("orderForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let name = document.getElementById("name").value;
    let product = document.getElementById("product").value;
    let quantity = document.getElementById("quantity").value;
    let totalPrice = document.getElementById("totalPrice").innerText;
    if (name && product && quantity) {
        document.getElementById("confirmation").innerText = `Thank you, ${name}! Your order for ${quantity} ${product}(s) has been placed. Total Cost: ₹${totalPrice}`;
        document.getElementById("confirmation").style.display = "block";
    }
});