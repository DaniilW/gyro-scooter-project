const menuButton = document.querySelector(".m-menu");
const menu = document.querySelector(".menu");

menuButton.addEventListener("click", () => {
    menu.classList.toggle("is-open");
});

const cmenuButton = document.querySelector(".c-menu");
const cmenu = document.querySelector(".c-nav");

cmenuButton.addEventListener("click", () => {
    cmenu.classList.toggle("c-is-open");
});
