/*form functionality*/
const enquiryForm = document.getElementById("enquiry-form");

enquiryForm.addEventListener("submit", function(event){
    event.preventDefault();
    responseDiv.textContent = ""; /*removes old responses at the start of every submit.*/

    /*name validation*/
    const nameInput = document.getElementById("enquiry-name");
    const nameError = document.getElementById("name-error");

    /*email validation*/
    const emailInput = document.getElementById("enquiry-email");
    const emailError= document.getElementById("email-error");
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^s@]+$/;

    if(!emailPattern.test(emailInput.value.trim())){
        emailError.textContent = "Please enter a valid email address. e.g) name@example.com";
        return
    }
    emailError.textContent="";

    /*dropdown error,.*/
    const typeError = document.getElementById("type-error");
    if (enquiryType.value === ""){
        typeError.textContent = "Please choose what you would like to make an enquiry about.";
        return;
    }
    typeError.textContent="";

    if(nameInput.value.trim().length < 2) {
        nameError.textContent = "Please enter a name with atleast 2 characters.";
        return;
    }
    nameError.textContent = "";

    const selectedValue = enquiryType.value;

    if (selectedValue === "reservations"){
        responseDiv.textContent = "Thanks for your interest in our reservations!" + 
        "Tables can be booked for up to 8 people, and" + 
        "we highly reccommend booking atleast 1 say in advance.";

    } else if (selectedValue === "spaces"){
       responseDiv.textContent = "Thanks for enquiring about our spaces. " +
    "Our Study Zone, Social Zone, Pet-Friendly Zone and Kids' Zone " +
    "are all available during opening hours, no booking is needed!";

    } else{
        responseDiv.textContent = "please select what you would like to enquire about.";
    }
});

/*reading user input and displaying a response*/

const enquiryType = document.getElementById("enquiry-type");
const responseDiv = document.getElementById("enquiry-response");