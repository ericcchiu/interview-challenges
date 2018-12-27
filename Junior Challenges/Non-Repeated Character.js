// Given an arbitrary input string, return the first non-repeating character.
// For strings with all repeats, return 'sorry'.

const firstNonRepeatedCharacter = (string) => {
  const storage = {};
  let key;

  // Iterate over string 
  // for (let char of string) {
  //   key = char;
  //   storage[key] = storage[key] + 1 || 1;
  // }
  string.split('').forEach((char) => {
    key = char;
    storage[key] = storage[key] + 1 || 1;
  })

  // Iterate over string and check occurrence
  for (let char of string) {
    if (storage[char] === 1) return char;
  }
  return 'sorry';
}

// Time complexity: Linear O(n) 
// Space complexity: Linear O(n)??

/*** Testing and Logging ***/
// const str1 = "ABCDBIRDUP";
// const str2 = "XXXXXXX";
// const str3 = "ALABAMA";
// const str4 = "BABA";
// console.log(firstNonRepeatedCharacter(str1)); // A
// console.log(firstNonRepeatedCharacter(str2)); // sorry
// console.log(firstNonRepeatedCharacter(str3)); // L
// console.log(firstNonRepeatedCharacter(str4)); // sorry
