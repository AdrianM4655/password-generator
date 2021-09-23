// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  var password = "";

  var passwordLength = prompt("How long would you like your password? (must be between 8-128 characters)");
    if (passwordLength.length >= 8 && passwordLength.length <= 128) 
    {
      return true;
    }
    else 
    {
      alert("Must be between 8 - 128 charecters! Please try again!");
      return false;
    } 
}