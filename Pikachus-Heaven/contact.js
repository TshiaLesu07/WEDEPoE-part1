/*contact form validation*/
const contactForm = document.getElementById("contact-form");
const contactResponse = document.getElementById ("contact-response");


contactForm.addEventListener("submit", function(event){
    event.preventDefault();

    contactResponse.textContent = "";

/**name check*/
const nameInput = document.getElementById("contact-name");
const nameError = document.getElementById("contact-name-error");


if (nameInput.value.trim().length < 2){
    nameError.textContent = "Please enter a name containing at least 2 characters";
    return;
}
nameError.textContent = "";

/*email check*/
const emailInput = document.getElementById("contact-email");
const emailError = document.getElementById("contact-email-error");
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if (!emailPattern.test(emailInput.value.trim())){
    emailError.textContent = "Please enter a valid email address. e.g) name@example.com";
    return;
}
emailError.textContent = "";

/*phone check*/
const phoneInput = document.getElementById("contact-phone");
const phoneError = document.getElementById("contact-phone-error");
const phonePattern = /^(\+27|0)\d{9}$/;

/*ensuring that not having spaces and dashes makes the number valid*/
const cleanPhone = phoneInput.value.replace(/[\s-]/g, "");

if (!phonePattern.test(cleanPhone)){
    phoneError.textContent = "Please enter a valid south African number containing +27/0 followed by nine digits.";
    return;
}
phoneError.textContent = "";

/*Messsage check*/
const typeInput = document.getElementById("contact-type");
const typeError = document.getElementById("contact-type-error");

if (typeInput.value === ""){
    typeError.textContent = "Please Choose a type of message";
    return;
}
typeError.textContent = "";

/*Message check length*/
const messageInput = document.getElementById("contact-message");
const messageError = document.getElementById("contact-message-error");
const messageLength = messageInput.value.trim().length;

if(messageLength < 10 || messageLength > 500){
    messageError.textContent = "Your message must be between 10 and 500 characters.";
    return;
}
messageError.textContent = "";

/*Submitting the form using AJAX*/
contactResponse.textContent = "Sending your message...";

const formData = new FormData(contactForm);

fetch("https://formspree.io/f/xoeepnvp", {
    method: "POST",
    body: formData,
    headers: {
        "Accept": "application/json"
    }
})
.then(response => {
    if (response.ok){
        contactResponse.textContent = "Thank you ! Your message has been sent.";
        contactForm.reset();
    }else{
        contactResponse.textContent = "Sorry, your message could not be sent. Please try again.";
    }
})
.catch(error => {
    contactResponse.textContent = "A network error occured. Please try again";
})
});



