document.addEventListener('DOMContentLoaded', function () {
 const menuDisplay = document.getElementById("menu-display");
 const mobileMenu = document.getElementById("mobile-menu").addEventListener("click", function () {
  menuDisplay.classList.toggle("show");
 });
});