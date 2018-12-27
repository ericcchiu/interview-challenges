// Implement the function ‘bind’, which accepts a function and a context as arguments.
// The context argument should override an existing context that the function is defined in. 
// Your bind function should return the passed in function.

const bind = function (func, context) {
  let args = Array.from(arguments).slice(2);
  console.log(args);
  return function () {
    return func.apply(context, args.concat(Array.from(arguments)));
  }
};

/*** Logging ***/

const func = function (a, b) { return a + b };
const boundFunc = bind(func, null, 'sayNoTo');
const newBoundFunc = bind(func, null, 20);


console.log(boundFunc('coke'));
console.log(newBoundFunc(20));



