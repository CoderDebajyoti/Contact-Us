
(function() {
    emailjs.init("YOUR_USER_ID"); // Replace with your EmailJS user ID
})();

function sendMail() {
    const templateParams = {
        name: document.querySelector('input[name="full-name"]').value,
        email: document.querySelector('input[name="email"]').value,
        description: document.querySelector('textarea[name="description"]').value,
    };

    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            alert('Your message has been sent successfully!');
        }, function(error) {
            console.log('FAILED...', error);
            alert('There was an error sending your message. Please try again.');
        });
}