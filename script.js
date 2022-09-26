const emailInput = document.getElementById("email");
const submitBtn = document.getElementById("submit-btn");
const errorMessageContainer = document.getElementById("error-message");

submitBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const errorMessage = validateEmail(emailInput);

    if (errorMessage.length > 1) {
        errorMessageContainer.innerText = errorMessage;
        errorMessageContainer.classList.add("error");
    } else {
        errorMessageContainer.classList.remove("error");
    }
});

// verifying email address
function validateEmail(email) {
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
        return "Please enter a valid email address";
    } else {
        return "";
    }
}
