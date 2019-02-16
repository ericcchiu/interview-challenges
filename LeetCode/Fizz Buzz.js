/*
Fill in your function, so that if the number that was passed in to the function is divisible
by 3 it returns the value “Fizz”, if the value is divisible by 5 it returns “Buzz”, if the value
is divisible by both 3 and 5 return the value “FizzBuzz”, and finally if the number is not divisible
by any of those just return the value.
*/

const FizzBuzz = value => {
  if (value % 3 === 0 && value % 5 === 0) {
    return 'FizzBuzz';
  } else if (value % 3 === 0) {
    return 'Fizz';
  } else if (value % 5 === 0) {
    return 'Buzz';
  }
  return value;
}

console.log(FizzBuzz(2));
