window.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector(".header__menu-item"),
    menuItem = document.querySelectorAll(".header__menu-list"),
    hamburger = document.querySelector(".hamburger");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("hamburger_active");
    menu.classList.toggle("header__menu-item_active");
  });

  menuItem.forEach((item) => {
    item.addEventListener("click", () => {
      hamburger.classList.toggle("burger_active");
      menu.classList.toggle("header__menu-item_active");
    });
  });
});

