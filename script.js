var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//sets up string of numbers
function numbersRan () {
  var numbersRandomChar = "0123456789".split("");
  return numbersRandomChar;
}

//sets up string of special characters   
function signsRan () {
  var signsRandomChar = "></^$#!@*,)(+=~".split("");
  return signsRandomChar;
}
   
//sets up string of lowercase letters
function lettersLRan () {
  var lettersLRandomChar = "abcdefghijklmnopqrstuvwxyz".split("");
  return lettersLRandomChar;
}
  
//sets up string of uppercase letters
function lettersURan () {
  var lettersURandomChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  return lettersURandomChar;
}

//function to cover the gerneration of the password
function generatePassword() {
  var password = "";

  //the user is prompted to input lenght of password
  var passLength = prompt("How long would you like your password? (must be between 8-128 characters)")

  //asks the user for diffrent criteria they want in theyre password
  if (passLength >=8 && passLength <= 128) {
    var numberChar = confirm("Would you like a password with numbers?, press ok! If not, select cancel!");
    var symbolChar = confirm("Would you like a password with signs?, press ok! If not, select cancel!");
    var lowLettersChar = confirm("Would you like a password with lower case letters?, press ok! If not, select cancel!");
    var upLettersChar = confirm("Would you like a password with upper case letters?, press ok! If not, select cancel!");

    //merdges all of the character sets together
    if (numberChar || symbolChar || lowLettersChar || upLettersChar) {
      var allChar = [];
      if (numberChar) {
        allChar = allChar.concat(numbersRan());
      }
      if (symbolChar) {
        allChar = allChar.concat(signsRan());
      }
      if (lowLettersChar) {
        allChar = allChar.concat(lettersLRan());
      }
      if (upLettersChar) {
        allChar = allChar.concat(lettersURan());
      }
      //randomly generates a character and repeats til criteria for number of characters is met
      console.log(allChar);
      for (var i = 0; i < passLength; i++) {
        password = password + allChar[Math.floor(Math.random() * allChar.length)];
      }
      //gives and displays final password
      return password;
    }
  //if no character is selected, asks user to try again
  return "Please select minimal one charecter! Try Again!"
  }
  //if character number asked is less than 8 or more than 128 the user is asked to try again
  return "Input must be between 8 to 128 charecters! Please Try Again!"
}