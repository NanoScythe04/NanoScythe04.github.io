document.getElementById('contact-form').addEventListener('submit', function(event) {

    event.preventDefault();

    let name = document.getElementById('name').value;
    let message = document.getElementById('message').value;
    let responseElement = document.getElementById('response');

    if(name === "" || message === "") {
        responseElement.textContent = "Please fill in all fields.";
        responseElement.style.color = "red";
        return;
    } else {
        responseElement.textContent = "Thank you, " + name + "! Your message has been received.";
        responseElement.style.color = "green";
        document.getElementById('contactForm')
        this.reset();
    }
});