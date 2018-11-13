// Given a string and an array of strings, return true if the string exists in the array, and false if it does not.
// DO NOT use .includes() in your solution.
// DO use a for loop.
// TRY solving it with non-mutative recursion, only after you’ve solved it using a for loop.

// For of loop 
// const searchString = (str, arrStr) => { 
//   for (let item of arrStr) { 
//     if (item === str) return true; 
//   }
//   return false; 
// }

// Recursion 
// const searchString = (str, arrStr) => { 
//   if (arrStr.length === 0) return false; 
  
//   if (arrStr[0] === str) return true; 

//   return searchString(str, arrStr.slice(1));
// };

// Reduce 
const searchString = (str, arrStr) => { 
   return arrStr.reduce((isFound, item ) => { 
     return isFound || item === str; 
   }, false); 
}




const arr = ['hello', 'matt', 'what', 'is', 'up'];
console.log(searchString('matt', arr)); // Expect true 
console.log(searchString('nope', arr)); // Expect false 