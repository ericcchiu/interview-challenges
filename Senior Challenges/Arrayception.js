// Given an array of arbitrarily nested arrays, return n, where n is the deepest
// level that contains a non-array value.


/***ES6 with HOFs ***/



/*** ES6 For of Loop w/Recursion ***/
const arrayception = (currentItem, deepestLvl = 0, depth = 0) => {
  if (Array.isArray(currentItem)) {
    for (let childNode of currentItem) {
      deepestLvl = arrayception(childNode, deepestLvl, depth + 1);
    }
  } else if (depth > deepestLvl) {
    deepestLvl = depth;
  } []
  return deepestLvl;
}


let arr1 = [[5], [[]]];
let arr2 = [10, 20, 30, 40];
let arr3 = [[10, 20], [[30, [40]]]]
let arr4 = [];
let arr5 = [[[]]];

console.log(arrayception(arr1));
console.log(arrayception(arr2));
console.log(arrayception(arr3));
console.log(arrayception(arr4));
console.log(arrayception(arr5));


