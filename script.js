// Assignment Code
var generateBtn = document.querySelector("#generate");
var randomIndex1 = 0

// Write password to the #password input
function thisIsTheFirstFunctionWhenButtonIsClicked() {
  var password = generateRandomAssPassword();
  // document.getElementById("password").innerHTML = fruits.join(" * ");

  var passwordText = document.querySelector("#password");
  passwordText.value = password.join("");

}

// Add event listener to generate button
generateBtn.addEventListener("click", thisIsTheFirstFunctionWhenButtonIsClicked);

function generateRandomAssPassword() {

  var passwordLength = prompt("Identify the length of your password by submitting a number between 8 - 128.");
  console.log(passwordLength);
  var passwordLength = parseInt(passwordLength);
  console.log(passwordLength);

  if (passwordLength < 8 || passwordLength > 128) {
    // validate user input of password length
    alert("This input is invalid. Please input another number in between 8 - 128.");
    return;
  }

  var myDopePool = buildMyPoolOfCharacters();
  console.log(myDopePool);
  var myDopePassword = [];

  for (var i = 0; i < passwordLength; i++) {

    var randomIndex1 = Math.floor(Math.random() * myDopePool.length);
    // console.log(myDopePool[randomIndex1]);
    myDopePassword.push(myDopePool[randomIndex1]);

  }
  return myDopePassword;
}




























































function buildMyPoolOfCharacters() {
  var myPool = [];
  var passwordLower = confirm("Would you like lowercase characters in your password?");
  var array1 = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  if (passwordLower) {
    myPool = myPool.concat(array1);
  }

  var passwordUpper = confirm("Would you like uppercase characters in your password?");
  var array2 = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  if (passwordUpper) {
    myPool = myPool.concat(array2);
  }

  var passwordNumb = confirm("Would you like numbers in your password?");
  var array3 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  if (passwordNumb) {
    myPool = myPool.concat(array3);
  }

  var passwordSpecChar = confirm("Would you like special characters characters in your password for extra security?");
  var array4 = ("!", "#", "$", "%", "&", "*");
  if (passwordSpecChar) {
    myPool = myPool.concat(array4);
  }

  return myPool;

}