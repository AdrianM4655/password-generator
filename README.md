
#Password Generator 

A program where the user can input what type of attributes they would like in their code, including the length of it, and then give the user a random generated password that fits their criteria!

## Demo/Deployed Link

https://shamika69.github.io/password-generator/

## Screenshots

![Site Screenshot](https://media.giphy.com/media/StIxB4RLNtLEPEC3sA/giphy.gif?cid=790b761167cbac382a8237b355d71c2ead84c92269d8046d&rid=giphy.gif&ct=g)

  
## Installation

Install 'password generator' with github fork function (tab down of green code button)

```bash
  cd to desktop
  git clone <link to my repository>
  cd to professional-portfolio
  open by using 'code .' should send you to visual studios code
  edit code to liking!
```
    
## Built With
- [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [Java](https://www.javascript.com/)

## Authors

- Adrian Magana
 - [Link to Portfolio Site](https://shamika69.github.io/professional-portfolio/)
- [Link to Github](https://github.com/shamika69)
- [Link to LinkedIn](https://www.linkedin.com/in/adrian-magana/)
  
## License

(UCB)

## Code Snippit

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