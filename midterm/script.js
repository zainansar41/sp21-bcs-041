const logo = document.getElementById("logo");
    const largeMenu = document.querySelector(".large_menu");

    logo.addEventListener("click", () => {
        largeMenu.style.display = largeMenu.style.display === "none" ? "block" : "none";
    });