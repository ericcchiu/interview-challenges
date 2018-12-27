// Find the first item that occurs an even number of times in an array. Remember to handle
// multiple even-occurrence items and return the first one. Return null if there are no even-occurrence items.

const evenOccurrence = (array) => {

  const storage = {};
  let key;

  // Loop over array 
  for (let item of array) {
    // Assign each array item as the key 
    key = item;

    // Count occurrence of the key and assign it as the value of the key 
    storage[key] = storage[key] + 1 || 1;  // key: occurrence
  }

  for (let item of array) {
    if (storage[item] % 2 === 0) return item;

  }

  // Return null if no even occurrence
  return null;
}

/*** Testing and Logging ***/
console.log(evenOccurrence([1, 2, 3, 3, 3, 4, 2])); // Expect 2 
console.log(evenOccurrence(["cat", "dog", "dog", "cat"])) // Expect cat 

// Time complexity: Linear overall O(n) 