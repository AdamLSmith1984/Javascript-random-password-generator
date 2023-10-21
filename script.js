// Assignment Code
const generateBtn = document.querySelector("#generate");

const passwordCriteria = {
    length: "",
    lowercase: "",
    uppercase: "",
    numeric: "",
    specialCharacters: "",
};

const characterTypes = function () {
    // Prompt to choose whether or not to include lowercase characters
    passwordCriteria.lowercase = window.prompt("Do you want to include lowercase characters? Answer yes or no");
    passwordCriteria.lowercase = passwordCriteria.lowercase.toLowerCase();
    if (passwordCriteria.lowercase === "yes") {
        window.alert("You have chosen to include lowercase characters.");
        passwordCriteria.lowercase = false;
    }
    else if (passwordCriteria.lowercase === "no") {
        window.alert("You have chosen not to include lowercase characters.");
        passwordCriteria.lowercase = false;
    }
    // prompt to choose whether or not to include uppercase characters
    passwordCriteria.uppercase = window.prompt("Do you want to include uppercase characters? Answer yes or no");
    passwordCriteria.uppercase = passwordCriteria.uppercase.toLowerCase();
    if (passwordCriteria.uppercase === "yes") {
        window.alert("You have chosen to include uppercase characters.");
        passwordCriteria.uppercase = true;
    }
    else if (passwordCriteria.uppercase === "no") {
        window.alert("You have chosen not to include uppercase characters.");
        passwordCriteria.uppercase = false;
    }
    // prompt to choose whether or not to include numeric characters
    passwordCriteria.numeric = window.prompt("Do you want to include numeric characters? Answer yes or no.");
    passwordCriteria.numeric = passwordCriteria.numeric.toLowerCase();
    if (passwordCriteria.numeric === "yes") {
        window.alert("You have chosen to include numeric characters.");
        passwordCriteria.numeric = true;
    }
    else if (passwordCriteria.numeric === "no") {
        window.alert("You have chosen not to include numeric characters.");
        passwordCriteria.numeric = false;
    }
    // prompt to choose whether or not to include special characters
    passwordCriteria.specialCharacters = window.prompt("Do you want to include special characters? Answer yes or no.");
    passwordCriteria.specialCharacters = passwordCriteria.specialCharacters.toLowerCase();
    if (passwordCriteria.specialCharacters === "yes") {
        window.alert("You have chosen to include special characters.");
        passwordCriteria.specialCharacters = true;
    }
    else if (passwordCriteria.specialCharacters === "no") {
        window.alert("You have chosen not to include special characters.");
        passwordCriteria.specialCharacters = false;
    }
    if (passwordCriteria.lowercase === false &&
        passwordCriteria.uppercase === false &&
        passwordCriteria.numeric === false &&
        passwordCriteria.specialCharacters === false) {
        window.alert("You need to pick at least one character type.");
        characterTypes();
    }
};




// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);