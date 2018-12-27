// Given an array of arrays, return those arrays concatenated together.

/*** ES6 For Loops ***/
// const concatArrays = (arrays) => {
	
// 	const flattenArr = []

// 	for (let i = 0; i < arrays.length; i++) { 
//     for (let j = 0; j <arrays[i].length; j++) { 
//       flattenArr.push(arrays[i][j]);
//     }
//   }

// 	return flattenArr;
// }

/*** Recursion ***/
// const concatArrays = (arrays) => { 
//   const output = []; 

//   if (arrays.length === 0) return output; 

//   arrays[0].forEach( item => output.push(item)); 
  
     
//   return output.concat(concatArrays(arrays.slice(1))); 

// };

/*** ES6 Spread Operator ***/
const concatArrays = (arrays) => { 
  return [].concat(...arrays);
}



const arr1 = [ [ 10, 20 ], [ 30 ], [ ] ];
const arr2 = [ [ 22 ], [ 33, [ 44 ] ], [ 55 ] ]; 
const arr3 = [];

console.log(concatArrays(arr1));
console.log(concatArrays(arr2)); 
console.log(concatArrays(arr3)); 


