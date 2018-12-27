// Approach:
// Spread list of arguments into an array 
// Use reduce or reduceRight to apply each functions to an accumulated value
// Return the current invokation of the current function on the current value 


/*** ES6 with Arrow functions ***/
const compose = (...funcs) => args => {
  return funcs.reduceRight((currentValue, currentFunction) => {
    return currentFunction(currentValue);
  }, args);
};

const pipe = (...funcs) => args => {
  return funcs.reduce((currentValue, currentFunction) => {
    return currentFunction(currentValue);
  }, args);
};

/*** ES6 without Arrow functions ***/
// const compose = function (...funcs) {
//   return funcs.reduceRight((currentValue, currentFunction) => {
//     return function (params) {
//       return currentFunction(currentValue(params));
//     }
//   });

// }

// const pipe = function (...funcs) {
//     return funcs.reduce((currentValue, currentFunction) => {
//       return function(params) { 
//         return currentFunction(currentValue(params));
//       }
//     });
// }



/*** Testing and Logging***/
const add2 = function (number) { return number + 2; }
const multiplyBy3 = function (number) { return number * 3; }

console.log(pipe(add2, multiplyBy3)(5)) //=> 21
console.log(pipe(add2, multiplyBy3, multiplyBy3)(5)) //=> 63


const greet = function (name) { return 'hi: ' + name; }
const exclaim = function (statement) { return statement.toUpperCase() + '!'; }

const welcome = compose(greet, exclaim);
console.log(welcome('phillip')); //=> 'hi: PHILLIP!'