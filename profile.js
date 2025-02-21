document.addEventListener("DOMContentLoaded", function () {
    const editButton = document.getElementById("edit-profile");
    const profileImg = document.getElementById("profile-img");
    const profileImgInput = document.getElementById("profile-img-input");

    editButton.addEventListener("click", function () {
        let newName = prompt("Enter your new name:", document.getElementById("profile-name").textContent);
        let newAddress = prompt("Enter your address:", document.getElementById("profile-address").textContent.replace("Address: ", ""));
    
        if (newName) document.getElementById("profile-name").textContent = newName;
        if (newAddress) document.getElementById("profile-address").textContent = "Address: " + newAddress;
            });

    profileImgInput.addEventListener("change", function () {
        const file = this.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                profileImg.src = e.target.result;
            };
            reader.readAsDataURL(file);
        }
    });
});
