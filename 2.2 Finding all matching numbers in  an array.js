// Given an array of numbers, return all even numbers from the array.
/*** ES6 For of loop ***/
// const findEven = numbers => {
//   const outputArr = [];
//   for (let num of numbers) {
//     if (num % 2 === 0) outputArr.push(num); 
//   }
//   return outputArr;
// };

/*** Recursion ***/
const findEven = (numbers) => {
  const outputArr = []; 
  if (numbers.length === 0) return []; 
  if (numbers[0] % 2 === 0) outputArr.push(numbers[0]); 

  return outputArr.concat(findEven(numbers.slice(1))); 
}

const numbers = [1 , 2, 3, 4, 5, 6, 8]; 
const numArr = [10, 20, 25, 30];

console.log(findEven(numbers));
console.log(findEven(numArr));    

