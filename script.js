// Initialize EmailJS with your user ID
(function () {
    emailjs.init("6c6xqC3eBlUYXOnRA"); // Replace with your EmailJS user ID
})();

// Function to validate the form
function validateForm() {
    const name = document.querySelector('input[name="full-name"]').value.trim();
    const email = document.querySelector('input[name="email"]').value.trim();
    const message = document.querySelector('textarea[name="message"]').value.trim();

    // Check for empty fields
    if (!name || !email || !message) {
        alert("Please fill out all fields before sending.");
        return false;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    return true;
}

// Function to send email
function sendMail() {
    // Validate form inputs
    if (!validateForm()) {
        return;
    }

    // Collect form data
    const templateParams = {
        name: document.querySelector('input[name="full-name"]').value,
        email: document.querySelector('input[name="email"]').value,
        description: document.querySelector('textarea[name="message"]').value,
    };
    
    // Disable the send button to prevent multiple submissions
    const sendButton = document.querySelector('.button--primary');
    sendButton.disabled = true;

    // Send email using EmailJS
    emailjs.send("service_a0zw6u5", "template_1s1jcf6", templateParams)
        .then(function (response) {
            // Re-enable the send button
            sendButton.disabled = false;

            // Notify user of success
            alert("Your message has been sent successfully!");
        })
        .catch(function (error) {
            // Re-enable the send button
            sendButton.disabled = false;

            // Log and notify user of error
            console.error("Email sending failed:", error);
            alert(`Error: ${error.text || "Unknown error"}`);
        });
}
