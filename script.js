document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the form from refreshing the page
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    //my api email.
    alert(`Thank you, ${name}! We have received your message.`);
    // Reset the form
    document.getElementById('contact-form').reset();
});

// Google reCAPTCHA

const siteKey = 'your-site-key'; // Replace with your actual site key

function onLoadCallback() {
    grecaptcha.ready(function() {
        grecaptcha.execute(siteKey, { action: 'homepage' }).then(function(token) {
            document.getElementById('g-recaptcha-response').value = token;
        });
    });
}
// Get the DOM elements
const mobileMenu = document.getElementById('mobile-menu');
const navList = document.getElementById('nav-list');

// Add an event listener to toggle the mobile menu
mobileMenu.addEventListener('click', () => {
    // Toggle the class to show or hide the menu
    navList.classList.toggle('active');
});



// Form Submission with Validation
document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevents the form from refreshing the page
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Basic validation for empty fields
    if (!name || !email || !message) {
        alert("Please fill out all fields.");
        return;
    }

    // You would typically send data to the server here.
    // Simulating an API request with a success message.
    const requestData = {
        name: name,
        email: email,
        message: message
    };
    
    console.log("Data to send:", requestData);

    // Placeholder "API request" simulation (you can replace this with real API logic)
    setTimeout(() => {
        alert(`Thank you, ${name}! We have received your message.`);
        document.getElementById('contact-form').reset();
    }, 500);
});
