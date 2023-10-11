// Burgermenu

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}


document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener("scroll", function() {
      var scroll = window.scrollY;
      var blackElement = document.querySelector(".navbar");
      
      if (scroll > 70) {
        blackElement.style.backgroundColor = "var(--background)";
        blackElement.style.boxShadow = "20px 20px 60px #050d19";
      } else {
        blackElement.style.backgroundColor = "transparent";
        blackElement.style.boxShadow = "none";
      }
    });
  });