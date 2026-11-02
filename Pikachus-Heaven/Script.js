/* Form functionality */

// Get the form elements
const enquiryForm = document.getElementById("enquiry-form");
const enquiryType = document.getElementById("enquiry-type");
const responseDiv = document.getElementById("enquiry-response");

// Listen for form submission
enquiryForm.addEventListener("submit", function(event) {

    event.preventDefault();

    // Get input elements
    const nameInput = document.getElementById("enquiry-name");
    const emailInput = document.getElementById("enquiry-email");

    // Get error message elements
    const nameError = document.getElementById("name-error");
    const emailError = document.getElementById("email-error");
    const typeError = document.getElementById("type-error");

    // Clear previous error messages and responses
    nameError.textContent = "";
    emailError.textContent = "";
    typeError.textContent = "";
    responseDiv.textContent = "";

    let isValid = true;

    // Name validation
    if (nameInput.value.trim().length < 2) {
        nameError.textContent = "Please enter a name with at least 2 characters.";
        isValid = false;
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(emailInput.value.trim())) {
        emailError.textContent = "Please enter a valid email address, e.g. name@example.com.";
        isValid = false;
    }

    // Dropdown validation
    if (enquiryType.value === "") {
        typeError.textContent = "Please choose what you would like to make an enquiry about.";
        isValid = false;
    }

    // Stop if any validation fails
    if (!isValid) {
        return;
    }

    // Display a response based on the selected enquiry
    const selectedValue = enquiryType.value;

    if (selectedValue === "reservations") {

        responseDiv.textContent = "Thanks for your interest in our reservations! " +
            "Tables can be booked for up to 8 people, and we highly recommend " +
            "booking at least 1 day in advance.";

    } else if (selectedValue === "spaces") {

        responseDiv.textContent = "Thanks for enquiring about our spaces. " +
            "Our Study Zone, Social Zone, Pet-Friendly Zone and Kids' Zone " +
            "are all available during opening hours. No booking is needed!";

    }

});