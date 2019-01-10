/* A prime number is an integer greater than 1 that has no divisors other than itself and 1.
 *  Write a function that accepts a number and returns true if it’s a prime number, false if it’s
 *  not. The grader is looking at the efficiency of your solution (number of operations) as well
 *  as correctness!
 */

/*
   I: integer value, 
   O: Boolean true or false, 
   C: Efficient solution not exponential and more linear. 
   E: 1 is not a prime number. 0 is not a prime number. 

   Step solution: For loop and check wheter n is divisible by one and itself 
 */
const primeTester = n => {
  if (n <= 1 && n >= 0) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i == 0) return false;
  }
  return true;
};
/*** Logging ***/
let num1 = 2;
let num2 = 1;
let num3 = 5;
let num4 = 6;
let num5 = 70368760954878;

console.log(primeTester(num1)); // Expect true;
console.log(primeTester(num2)); // Expect false;
console.log(primeTester(num3)); // Expect true;
console.log(primeTester(num4)); // Expect false;
console.log(primeTester(num5)); // Expect false;
