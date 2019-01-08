const binarySearch = (array, target) => {
  // Create initial, mid, and final indexes
  let start = 0;
  let end = array.length - 1;
  let midpoint;

  // While initial is less than equal to final
  while (start <= end) {
    // Start with the mid index
    midpoint = Math.floor((start + end) / 2);

    if (array[midpoint] === target) {
      return midpoint;
    } else if (array[midpoint] < target) {
      start = midpoint + 1; // target found in second half
    } else {
      end = midpoint - 1; // target found in first half
    }
  }

  return -1; // Not found in list
};

const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(binarySearch(arr1, 21));
console.log(binarySearch(arr1, 5));
