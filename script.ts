// script.ts
document.getElementById('contact-form')?.addEventListener('submit', function (e: Event) {
    e.preventDefault();

    // Get the form data with proper type annotations
    const nameInput = document.getElementById('name') as HTMLInputElement;
    const emailInput = document.getElementById('email') as HTMLInputElement;
    const messageInput = document.getElementById('message') as HTMLTextAreaElement;
    const successMessage = document.getElementById('success-message') as HTMLParagraphElement;

    const name = nameInput.value;
    const email = emailInput.value;
    const message = messageInput.value;

    // Simulate form submission (in real-world, you would send it to a server)
    if (name && email && message) {
        successMessage.style.display = 'block';
        (document.getElementById('contact-form') as HTMLFormElement).reset();
    }
});
