document.addEventListener("DOMContentLoaded", () => {
    const menuIcon = document.getElementById("menu-icon");
    const navLinks = document.getElementById("nav-links");

    menuIcon.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

    const currentPage = window.location.pathname.split("/").pop();
    const navItems = document.querySelectorAll(".nav-links a");

    navItems.forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
        }
    });
});

document.querySelectorAll('img').forEach((img) => {
    img.setAttribute('draggable', 'false'); 
});
