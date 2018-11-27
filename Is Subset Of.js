// Make an array method that can return whether or not a context array is a subset of an input array. 
// To simplify the problem, you can assume that both arrays will contain only strings.

Array.prototype.isSubsetOf = function () {
  const contextArr = Array.from(...arguments);

  let result = this.reduce((length, word) => {
    if (contextArr.includes(word)) length++;
    return length;
  }, 0);

  // Return true or false
  return result === this.length
}

/*** Testing and Logging ***/
const arr1 = ['cat', 'dog'];
const arr2 = ['cat', 'cat', 'dog'];
const arr3 = ['cat', 'bird', 'chicken'];

console.log(arr1.isSubsetOf(arr2)); // Expect true
console.log(arr2.isSubsetOf(arr3)); // Expect false 



