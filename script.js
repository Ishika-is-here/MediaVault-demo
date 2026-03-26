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

// Select the phone input
const phoneInput = document.getElementById('phoneInput');

// 4. Phone Input "Cleaner" (No letters allowed)
if (phoneInput) {
    phoneInput.addEventListener('input', (e) => {
        // Replace anything that is NOT a number with an empty string
        e.target.value = e.target.value.replace(/[^0-9]/g, '');
    });
}

function confirmLogout(event) {
    // Show the browser's built-in confirmation box
    const choice = confirm("Are you sure you want to log out of MediaVault?");
    
    if (choice) {
        // If they click 'Yes/OK', let the link go to logout.php
        return true; 
    } else {
        // If they click 'Cancel', stop the link from working
        event.preventDefault();
        return false;
    }
}
