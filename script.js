const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const socialsMenu = document.querySelector(".socials-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    socialsMenu.classList.toggle("active");
})