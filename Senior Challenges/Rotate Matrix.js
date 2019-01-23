/* Write a function that rotates a NxN matrix 90 degrees clockwise.
* A matrix, also called a 2-D array, is simply an array of arrays of values.
*
* Example:
* [[1, 2],
* [3, 4]]
*
* Rotated:
* [[3, 1],
* [4, 2]]
*/

/*
* O: nested array, rotated clockwise by 90 degrees.
* I: nested array( n x n matrix)
* C: No constraints in time complexity
* E: The last element in the nested array has to be shifted to the first element of the nested array. 
*
* Approach:
* Iterate over the nested array to access each element. Then shift the element to the 
* adjacent position in clockwise manner. Return the final rotated array.  
*
*/

const rotateMatrix = (matrix) => {
  const rotatedMatrix = [];
  // Iterate through the rows of the matrix
  for (let row = 0; row < matrix.length; row++) {
    const nestedMatrix = [];
    // Iterate through the columns of the matrix 
    for (let col = matrix.length - 1; col >= 0; col--) {
      nestedMatrix.push(matrix[col][row]);
    }
    rotatedMatrix.push(nestedMatrix);
  }
  // Return rotated matrix 
  return rotatedMatrix;
}

//// Testing & Logging ////
const arr1 = [[1, 2], [3, 4]];
console.log(rotateMatrix(arr1)); // Expect [[3, 1], [4, 2]] 


