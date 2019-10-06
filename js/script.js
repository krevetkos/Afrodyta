const navContainer = document.querySelectorAll("header nav .container div");
const navBtn = document.querySelector("header nav .container");
const fulNav = document.querySelector("header nav ul");
const form = document.querySelector(".form");
const formBtn = document.querySelector(".main-container .newsletter .newsletter-btn");
navBtn.onclick = ()=>{
    navBtn.classList.toggle("change");
    fulNav.classList.toggle("shov-nav");
}
formBtn.onclick = ()=>{
    form.classList.toggle("form-active");
}
