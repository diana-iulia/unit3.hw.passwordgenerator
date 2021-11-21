//myString = myString + additionalData 
//myString += additionalData ^^SAME AS ABOVE


//modify existing data

//validate data 


// Assignment Code
var generateBtn = document.querySelector("#generate");
var numbers = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, ]
var lowercase = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j","k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z" ]
var uppercase = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z" ]
var special = ['"', "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":",";", "<", "=", ">", "?", "@", "[", "", "]", "^", "_", "`", "{", "|", "}", "~"]

// var passwordLength = ;
// var result = 
console.log(numbers)
console.log(lowercase)
console.log(special)
// console.log(Math.floor(Math.random() * empty.length)) 

function generatePassword () {
  function getLength() {
    var length = prompt("How long would you like your password to be (between 8-128) ");
    if (length<8 || length>128 || isNaN(length)) {
      alert("Password length must be between 8 and 128 characters")
      getLength()
    } 
    
    console.log(ifNumbers)
  }
  getLength();
  
  var ifNumbers = confirm("Do you want numbers?");
  var ifLowercase= confirm("Do you want lowercase letters?");
  var ifUppercase = confirm("Do you want uppercase letters?");
  var ifSpecial = confirm("Do you want special symbols?");
  var empty = [];
  
  if (ifNumbers) {
    empty.concat(numbers)
  } 
  
  if (ifLowercase) {
    empty.concat(lowercase)
  }
  
  if (ifUppercase) {
    empty.concat(uppercase)
  }
  
  if (ifSpecial) {
    empty.concat(special)
  }
  console.log(empty)
  
  //NEXT STEPS:
  //1. How do we validate that the user has chosen at least ONE of the character banks

  function chooseOne() {
    if ( !ifNumbers && !ifLowercase && !ifUppercase && !ifSpecial) {
      alert("You must choose at least one category");
      chooseOne();
    }
  } 
  // chooseOne(); 
  getLength();
  
 //2. How in the world do we actually generate a random password from that
 //look in to any activities on for loops and Math.random/Math.floor
 //figuring out how to make it random
 
 var password = "";

 // for loop until password is desired length
 password += "";//numbers 
 password += "";//lowercase
 password += "";//uppercase
 password += "";//special

 //return password;
}
 

 


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
