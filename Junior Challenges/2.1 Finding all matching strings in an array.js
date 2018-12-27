// Given a length (number) and an array of strings, return all strings that are greater 
// than or equal to the given length.
/*** ES6 ***/
// const filterLength = (length, array) => { 
//   const outputArr = []; 
//   for (let str of array) { 
//     if (str.length >= length) { 
//       outputArr.push(str); 
//     }
//   }
//   return outputArr;
// }; 

/*** Recursive ***/ 
const filterLength = (length, array) => { 
  const outputArr = []; 
  if (array.length === 0) return []; 
  if (array[0].length >= length) outputArr.push(array[0]); 

  return outputArr.concat(filterLength(length, array.slice(1)));
};



const arr = [ "a", "ab", "abc", "abcd" ]; 
const arr2 = ['x', 'hello', 'z'];
console.log(filterLength(3, arr));
console.log(filterLength(3, arr2));
