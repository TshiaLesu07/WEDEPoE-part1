/*contact form validation*/
const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", function(event){
    event.preventDefault();

/**name check*/
const nameInput = document.getElementById("contact-name");
const nameError = document.getElementById("contact-name-error");


if (nameInput.value.trim().length < 2){
    nameError.textContent = "Please enter a name containing atleast 2 characters";
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

if (typeInput === ""){
    typeError.textContent = "Please Choosea type of message";
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

/*compiling validated details into email*/
const recipient = "hello@pikachusheaven.co.za" ;
const subject = "Website message: " + typeInput.value;
const body = 
"Name: " + nameInput.value.trim() + "\n" +
"Email: " + emailInput.value.trim() + "\n" +
"Phone: " + phoneInput.value.trim() + "\n" +
"Message type: " + typeInput.value.trim() + "\n" +
"Message :\n "+ messageInput.value.trim(); 

window.location.href = "mailto:" + recipient + "?subject=" + encodeURIComponent(subject)
+ "&body=" + encodeURIComponent(body);
});



