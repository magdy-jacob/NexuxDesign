// mobile navbar

const navbar = document.querySelector(".navbar-lis");
const navToggler = document.querySelector(".nav-toggle-btn");
const navLinks = document.querySelectorAll(".nav-link");

const toggleNav = function() {
    navbar.classList.toggle("active");
    navToggler.classList.toggle("active");
}

navToggler.addEventListener("click" , toggleNav);


navLinks.forEach((navlink) => {
    navlink.addEventListener("click", () => {
        navbar.classList.remove("active");
        navToggler.classList.remove("active");
    });
});

// mobile navbar
