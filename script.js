const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btn');
const iconClose = document.querySelector('.icon-close');
const loginSection = document.querySelector('.login-section'); // Added this

// 1. Toggles between Login and Register inside the box
registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
});

// 2. Opens the entire section when the Nav Login button is clicked
btnPopup.addEventListener('click', () => {
    loginSection.classList.add('active-popup');
});

// 3. Closes the entire section when the X is clicked
iconClose.addEventListener('click', () => {
    loginSection.classList.remove('active-popup');
    // Optional: Reset the form to Login view when closing
    wrapper.classList.remove('active'); 
    const forms = loginSection.querySelectorAll('form');
    forms.forEach(form => form.reset());
});

