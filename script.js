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