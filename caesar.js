"use strict";

function caesarCipher(str, num){
    num = num % 26;
    let lowerCaseString = str.toLowerCase();
    let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    let newString = "";

    for (let i = 0; i < lowerCaseString.length; i++){
        let currentLetter = lowerCaseString[i];
        if (currentLetter = " "){
            newString += currentLetter;
            continue;
        }
        let currentIndex = alphabet.indexOf(currentLetter);
        let newIndex = currentIndex + num;
        if (newIndex > 25){
            newIndex -= 26;
        }
        if (newIndex < 0){
            newIndex += 26;
        }
        if (str[i] === str[i].toUpperCase()){
            newString += alphabet[newIndex].toUpperCase;
        } else {
            newString += alphabet[newIndex]
        }
    }
    return newString;
}

let result = caesarCipher("Matilda Girl", 6);

console.log(result);


function caesarCipher(str, num) {
    num = num % 26;
    let lowerCaseString = str.toLowerCase();
    let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    let newString = ""
  
    for(let i = 0; i < lowerCaseString.length; i++){
      let currentLetter = lowerCaseString[i];
      if (currentLetter === " "){
        newString += currentLetter;
        continue;
      }
      let currentIndex = alphabet.indexOf(currentLetter);
      let newIndex = currentIndex + num;
      if(newIndex > 25){
        newIndex -= 26;
      }
      if(newIndex < 0) {
        newIndex += 26;
      }
      if (str[i] === str[i].toUpperCase()){
        newString += alphabet[newIndex].toUpperCase();
      } else {
        newString += alphabet[newIndex];
      }
    }
    return newString;
  }
  
  let resulte = caesarCipher("Julius Caesar", -1)
   console.log(resulte)


