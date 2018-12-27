// Given an array of strings, return all strings concatenated together.

/*** ES6 ***/
// const concatStrings = (strings) => {
//   let str = ''; 


//   for (let character of strings) str += character; 

//   return str; 
// }

/*** Recursion ***/
const concatStrings = (strings) => { 
  let str = '';
  
  if (strings.length === 0) return ""; 

  str += strings[0];

  return str + concatStrings(strings.slice(1));
};

const strings = ['a', 'b', 'c', 'd']; 
const empty = []; 
console.log(concatStrings(strings)); 
console.log(concatStrings(empty)); 

