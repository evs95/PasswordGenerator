// Assignment Code
var generateBtn = document.querySelector("#generate");
var password = "";
var length = 0;
var includeSpecialChars = "";
var lowerCaseCharSet = "abcdefghijklmnopqrstuvwxyz";
var upperCaseCharSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberSet = "0123456789";
var specialCharSet = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
var passwordCharSet = "";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Generate password using user inputs
function generatePassword () {

  length = GetPasswordLength();
  if(length == ""){
    AlertUser("Invalid password length entered.\nPassword length should be inbetween 8 to 128.\nPlease start again.");
    return "";
  }

  passwordCharSet = GetPasswordCharSet();
  if(passwordCharSet == ""){
      AlertUser("Atleast one password criteria should be included.\nPlease start again.");
    return "";
  }

  // Logic to generate password
  for (var i = 0, n = passwordCharSet.length; i < length; ++i) {
    password += passwordCharSet.charAt(Math.floor(Math.random() * n));
  }

  return password;
}

  // Ask user for password length
  function GetPasswordLength(){
    var lengthInput = Number(window.prompt("Please enter length of Password"));
    if(lengthInput >= 8 && lengthInput < 128){
      return lengthInput;
    }
    return "";
  }

  // Ask user for password criteria and form charset for Password
  function GetPasswordCharSet(){
    var includeUppercase = ConfirmUser("Would you want to include Upper case charactor in Password?");
    var includeLowercase = ConfirmUser("Would you want to include Lower case charactor in Password?");
    var includeNumericChar = ConfirmUser("Would you want to include Numeric charactor in Password?");
    var includeSpecialChar = ConfirmUser("Would you want to include Special charactor in Password?");

    if(includeUppercase){
      passwordCharSet += upperCaseCharSet;
    }
    if(includeLowercase){
      passwordCharSet += lowerCaseCharSet;
    }
    if(includeNumericChar){
      passwordCharSet += numberSet;
    }
    if(includeSpecialChar){
      passwordCharSet += specialCharSet;
    }
    return passwordCharSet;
  }

  // Alert user with msg
  function AlertUser(msg){
    window.alert(msg);
  }

  // Get user confirmation for question
  function ConfirmUser(question){
    return window.confirm(question);
  }