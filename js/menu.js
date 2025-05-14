document.addEventListener("DOMContentLoaded", () => {
  const navBtn = document.querySelector(".header__btn");
  const navigation = document.querySelector(".header__nav");

  navBtn.addEventListener("click", () => {
      const isOpen = navigation.classList.toggle("header__nav-open");
      navBtn.src = isOpen ? "img/menu/black-cross.png" : "img/menu/menu-lines.png";
  });
});
 