const validateInputBaseOnRegex = (event, regex, value, errorMessage) => {
  if (!regex.test(value)) {
    event.target.setCustomValidity(errorMessage);
  } else {
    event.target.setCustomValidity("");
  }
};

const validatePasswordMatch = (nameField, valueField, registrationFormData) =>{
    const repeatPassword = document.getElementById("repeatPassword");
    const fieldToCheck = nameField === "password" ? "repeatPassword" : "password";
    const arePasswordsMatching = registrationFormData[fieldToCheck] === valueField;

    if (!arePasswordsMatching) {
      repeatPassword.setCustomValidity("Passwords do not match.");
    } else {
      repeatPassword.setCustomValidity("");
    }

}


 export {validateInputBaseOnRegex, validatePasswordMatch}
