(function() {
    emailjs.init("6c6xqC3eBlUYXOnRA");
})();

function validateForm() {
    const name = document.querySelector('input[name="full-name"]').value.trim();
    const email = document.querySelector('input[name="email"]').value.trim();
    const message = document.querySelector('textarea[name="message"]').value.trim();

    if (!name || !email || !message) {
        alert('Please fill out all fields before sending.');
        return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return false;
    }

    return true;
}

function sendMail() {
    if (!validateForm()) {
        return;
    }

    const templateParams = {
        name: document.querySelector('input[name="full-name"]').value,
        email: document.querySelector('input[name="email"]').value,
        description: document.querySelector('textarea[name="message"]').value,
    };

    const sendButton = document.querySelector('.button--primary');
    sendButton.disabled = true;

    emailjs.send('service_a0zw6u5', 'template_1s1jcf6', templateParams)
        .then(function(response) {
            sendButton.disabled = false;
            alert('Your message has been sent successfully!');
        })
        .catch(function(error) {
            sendButton.disabled = false;
            console.error('Email sending failed:', error);
            alert(`Error: ${error.text || 'Unknown error'}`);
        });
}
