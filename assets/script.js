// Assignment Code
var generateBtn = document.querySelector("#generate");
function randomCharacter(bool) {
    var charString = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 !#$%&()*+,-./:;<=>?@[\]^_`{|}~";
    var charString2 = "abcdefghijklmnopqrstuvwxyz"
    var num = Math.floor(58 * Math.random());
    var num2 = Math.floor(26 * Math.random())
    if (bool) {
        return charString.charAt(num)
    } else {
        return charString2.charAt(num2)
    }
}

function generatePassword() {
    string1 = ""
    var leng = window.prompt("How long do you want it to be? (between 8-128)")
    leng = parseInt(leng)
    if (leng < 8 || leng > 128) {
        window.prompt("not in specified range.")
        var leng = window.prompt("How long do you want it to be? (between 8-128)")
        leng = parseInt(leng)
    }
    var specCharac = window.confirm("would you like special characters? including numbers, special characters, and uppercase letters")
    
    for (var i = 0; i < leng; i++)  {
        var char = randomCharacter(specCharac)
        string1 = string1.concat(char)
    }
    return string1
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


