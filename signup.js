const box = document.querySelector('.box');
const loginLink = document.querySelector('.login-link');
const RegisterLink = document.querySelector('.register-link');

loginLink.addEventListener('click', ()=>{
    box.classList.add('active');
});

RegisterLink.addEventListener('click', ()=>{
    box.classList.add('active ');
});