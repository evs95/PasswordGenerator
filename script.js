// Assignment Code
var generateBtn = document.querySelector("#generate");
var password = "";
var length = 0;
var includeSpecialChars = "";
var lowerCaseCharSet = "abcdefghijklmnopqrstuvwxyz";
var lowerCaseCharSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberSet = "0123456789";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);