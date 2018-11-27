// Write a function that accepts two strings as arguments, and returns only the characters that are common to both strings.
// Your function should return the common characters in the same order that they appear in the first argument. 
// Do not return duplicate characters and ignore whitespace in your returned string.

const commonCharacters = (str1, str2) => {
  let commonString = '';

  str1 = str1.replace(/\W/g, '');
  str2 = str2.replace(/\W/g, '');

  for (let i = 0; i < str1.length; i++) {
    for (let j = 0; j < str2.length; j++) {
      if (str1[i] === str2[j] && (commonString.indexOf(str2[j]) === -1)) {
        commonString += str2[j];
      }
    }
  }
  return commonString;
};


let str1 = 'Riding on a buffalo makes me more approachable';
let str2 = 'so what';
console.log(commonCharacters(str1, str2));

let str3 = "What is love?";
let str4 = "Baby don't hurt me";
console.log(commonCharacters(str3, str4));
