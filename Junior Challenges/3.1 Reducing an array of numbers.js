// Given an array of numbers, return the sum of those numbers.

/*** ES6 For of ***/
// const sum = (numbers) => { 
//   let total = 0
//   if (numbers.length === 0) return total;
//   for (let val of numbers) { 
//     total += val; 
//   }
//   return total;   
// }

/*** Recursion ***/
const sum = (numbers) => { 
  let total = 0; 
  if (numbers.length == 0) return total; 
  
  total += numbers[0]; 
  return total + sum(numbers.slice(1)); 
}; 


const numbers = [10, 20, 30];
console.log(sum(numbers));


