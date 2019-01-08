const binarySearch = (array, target) => {
  // Create initial, mid, and final indexes
  let left = 0;
  let right = array.length - 1;
  let mid;

  // While initial is less than equal to final
  while (left <= right) {
    // Start with the mid index
    mid = Math.floor((left + right) / 2);

    if (array[mid] === target) {
      return mid;
    } else if (array[mid] < target) {
      left = mid + 1; // target found in second half
    } else {
      right = mid - 1; // target found in first half
    }
  }

  return -1; // Not found in list
};

const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(binarySearch(arr1, 21));
console.log(binarySearch(arr1, 5));
