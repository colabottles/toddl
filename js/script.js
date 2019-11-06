module.exports =  function toggleMenu() {
  let getMenu = document.querySelector(".menu-toggle");
  getMenu.classList.toggle("hamburger");
};
let getHamburger = document.querySelector("is-active");

getHamburger.addEventListener("click", toggleMenu);