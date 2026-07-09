const menu = document.querySelector(".menu-hamburguer");
const nav = document.querySelector("#nav");
const icon = menu.querySelector("i");

menu.addEventListener("click", () => {
    nav.classList.toggle("active");
    icon.classList.toggle("fa-bars");
    icon.classList.toggle("fa-xmark");
});

