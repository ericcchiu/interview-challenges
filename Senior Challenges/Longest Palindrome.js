/*Implement a function that finds the longest palindrome in a given string. 
* For example, in the string “My dad is a racecar athlete”, the longest palindrome is 
* “a racecar a”. Count whitespaces as valid characters. Other palindromes in the above 
* string include “dad”, “ete”, “ dad “ (including whitespace on each side of dad).
*/

const longestPalindrome = (string) => {
  let longestStr = '';
  let currentStr = '';

  for (let start = 0; start < string.length; start++) {
    for (let end = start; end < string.length; end++) {
      currentStr = string.slice(start, end + 1);
      if (isPalindrome(currentStr) && currentStr.length > longestStr.length) {
        longestStr = currentStr;
      }
    }
  }
  return longestStr;
}

const isPalindrome = (str) => str === str.split('').reverse().join(''); 
