const carBrand= document.querySelector(".nav-link");
const nav = document.querySelector("nav");
carBrand.addEventListener("click", () => (
    nav.classList.toggle("toggled")
));