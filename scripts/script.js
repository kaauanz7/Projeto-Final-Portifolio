const menu = document.querySelector(".menu-hamburguer");
const nav = document.querySelector("nav");

menu.addEventListener("click", () => {
    nav.classList.toggle("active");
});