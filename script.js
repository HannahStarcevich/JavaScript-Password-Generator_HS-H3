// connecting id on the html with the js file by assigning variable.
var generateBtn = document.querySelector("#generate");

// set up the button click event to trigger the generate password function.
function buttonClick() {

  var password = generateRandomPassword();
  // display the password generated on the site. 
  var passwordText = document.querySelector("#password");
  // join the password characters together in a string.
  passwordText.value = password.join("");
}

// event listener to click and generate password.
generateBtn.addEventListener("click", buttonClick);

// generate the password.
function generateRandomPassword() {

  var passwordLength = prompt("Identify the length of your password by submitting a number between 8 - 128.");
  console.log(passwordLength);
  // transform the number submitted by the user into an integer. 
  var passwordLength = parseInt(passwordLength);
  console.log(passwordLength);

  // validate user input of password length.
  if (passwordLength < 8 || passwordLength > 128) {
    alert("This input is invalid. Please input another number in between 8 - 128.");
    return;
  }

  // trigger the function to build the pool of characters and use it's output.
  var myCompletePool = buildMyPoolOfCharacters();
  console.log(myCompletePool);
  // aggregate all the selected characters in the password array.
  var myAmazingPassword = [];
  // store random number generated to pull a character from myPool.
  var randomIndex1 = 0

  // generate a random number to select the index from the complete pool and add it to the password array for the length of the password selected by the user.
  for (var i = 0; i < passwordLength; i++) {
    var randomIndex1 = Math.floor(Math.random() * myCompletePool.length);
    myAmazingPassword.push(myCompletePool[randomIndex1]);
  }
  return myAmazingPassword;
}

// build a pool of the types of characters selected by the user. for 'true' user submissions, the array is consolidated (concat) and added to the pool.
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
  var array4 = ["!", "#", "$", "%", "&", "*", "(", ")", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "^", "~"];
  if (passwordSpecChar) {
    myPool = myPool.concat(array4);
  }

  return myPool;
}