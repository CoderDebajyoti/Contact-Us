# Contact Us

A fully functional "Contact Us" web page designed with HTML, CSS, and integrated with **EmailJS** for backend functionality. Users can submit their queries, and the page sends their details directly to an email using the EmailJS API.

## Features

- **Responsive Design**: Works seamlessly across devices.  
- **EmailJS Integration**: Automatically delivers form submissions to a designated email without requiring a server.  
- **Customizable**: Easily adaptable for various projects.

## How to Use

1. Clone the repository:  
   ```bash
   git clone https://github.com/CoderDebajyoti/Contact-Us.git
   ```
2. Configure **EmailJS**:  
   - Create an account on [EmailJS](https://www.emailjs.com/).  
   - Obtain your **Service ID**, **Template ID**, and **Public Key**.  
   - Replace placeholders in the script with your EmailJS credentials.
3. Open `index.html` in a browser to access the form.

## EmailJS  

This JavaScript code integrates **EmailJS** for sending email messages directly from a contact form. It includes:  

1. **EmailJS Initialization**: The user ID is configured to enable service use.  
2. **Form Validation**: Ensures that all fields are filled and validates the email format.  
3. **Email Sending**: Gathers form data and sends an email via EmailJS using a service ID and template ID.  

It also includes safeguards like disabling the "Send" button during email processing and error handling for user feedback.

3. Open `index.html` in a browser to access the form.

## Dependencies

- **EmailJS**: Enables seamless email sending from the frontend.


## License

Distributed under the MIT License. See `LICENSE` for more information.

---
