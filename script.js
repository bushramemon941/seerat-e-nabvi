"use strict";
var _a;
// script.ts
(_a = document.getElementById('contact-form')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (e) {
    e.preventDefault();
    // Get the form data with proper type annotations
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const successMessage = document.getElementById('success-message');
    const name = nameInput.value;
    const email = emailInput.value;
    const message = messageInput.value;
    // Simulate form submission (in real-world, you would send it to a server)
    if (name && email && message) {
        successMessage.style.display = 'block';
        document.getElementById('contact-form').reset();
    }
});
