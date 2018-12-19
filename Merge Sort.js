/*
Implement a function that sorts an array of numbers using the “mergesort” algorithm.

Mergesort uses a divide-and-conquer strategy. It begins by treating the input list of length N as a set of N “sublists” of length 1, which are considered to be sorted. Adjacent sublists are then “merged” into sorted sublists of length 2, which are merged into sorted sublists of length 4, and so on, until only a single sorted list remains. (Note, if N is odd, an extra sublist of length 1 will be left
after the first merge, and so on.)

This can be implemented using either a recursive (“top-down”) or an iterative (“bottom-up”) approach. */

/*** Recursive Approach ***/
const mergeSort = (array) => {

  // Subroutine that sort a split array and merge them 
  const divideAndConquer = (leftBucket, rightBucket) => {
    const output = [];
    let leftIdx = 0;
    let right = 0;

    while (leftIdx < leftBucket.length && right < rightBucket.length) {
      if (leftBucket[leftIdx] < rightBucket[right]) {
        output.push(leftBucket[leftIdx]);
        leftIdx++;
      } else {
        output.push(rightBucket[right]);
        right++;
      }
    }
    return output.concat(leftBucket.slice(leftIdx)).concat(rightBucket.slice(right));
  }

  if (array.length === 1) {
    return array;
  }
  let mid = Math.floor(array.length / 2)

  const leftBucket = array.slice(0, mid);
  const rightBucket = array.slice(mid);


  return divideAndConquer(
    mergeSort(leftBucket),
    mergeSort(rightBucket)
  );
}


console.log(mergeSort([12, 4, 91, 0, 1, 100]));