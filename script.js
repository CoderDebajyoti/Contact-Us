
(function() {
    emailjs.init("6c6xqC3eBlUYXOnRA"); // Replace with your EmailJS user ID
})();

function sendMail() {
    const templateParams = {
        name: document.querySelector('input[name="full-name"]').value,
        email: document.querySelector('input[name="email"]').value,
        description: document.querySelector('textarea[name="message"]').value,
    };

    emailjs.send('service_a0zw6u5', 'template_1s1jcf6', templateParams)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            alert('Your message has been sent successfully!');
        }, function(error) {
            console.log('FAILED...', error);
            alert('There was an error sending your message. Please try again.');
        });
}
