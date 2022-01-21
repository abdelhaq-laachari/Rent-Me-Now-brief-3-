var burger = document.getElementById('burger');
var navLinks = document.getElementById('navLinks');

burger.addEventListener('click',()=>{
    navLinks.classList.toggle('show');
});