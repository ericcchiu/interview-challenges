/*
Insertion sort is a basic sorting algorithm.

Insertion sort iterates over an array, growing a sorted array behind the current location. 
It takes each element from the input and finds the spot, up to the current point, where 
that element belongs (in constant space). It does this until it gets to the end of the array.

Insertion sort should be implemented as a stable sort. This means that equal elements
should retain their relative order. Numbers, as primitives, give us no way to check this,
so we’ll be sorting objects with a value field, on which they will be sorted, like so:

[{value: 10}, {value: 5, order: 1}, {value: 5, order: 2}]

[{value: 5, order: 1}, {value: 5, order: 2}, {value: 10}]

*/
// Time complexity: Avg Case: Linear (O(n)), worst case: Quadratic O(n^2)
const insertionSort = (array) => {
  let currentValue, j;
  for (let i = 0; i < array.length; i++) {
    currentValue = array[i];
    j = i - 1;
    // console.log(array[i]);

    while (j > -1 && array[j].value > currentValue.value) {
      array[j + 1] = array[j];
      j--
    }
    array[j + 1] = currentValue;
  }
  return array;
}

/*** Logging ***/

const arr = [{ "value": 3 }, { "value": 1 }, { "value": 2 }];
const arr1 = [{ "value": 10 }, { "value": 5, "order": 1 }, { "value": 5, "order": 2 }];
console.log(insertionSort(arr));
console.log(insertionSort(arr1));
