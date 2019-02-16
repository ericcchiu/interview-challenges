/*
* Given an array of integers, return indices of the two numbers such that they add up to 
* a specific target. 
* 
* You may assume that each input would have exactly one solution, and you many not use 
* the same element twice. 
*/
const twoSum = (nums, target) => {
  let targetSumIndex;
  // Iterate over the nums array
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] === target - nums[i]) {
        return targetSumIndice = [i, j];
      }
    }
  }
};

const integerList = [2, 7, 11, 15];
console.log(twoSum(integerList, 9));
console.log(twoSum(integerList, 26));
console.log(twoSum(integerList, 44));

const integerList1 = [3, 2, 4];
console.log(twoSum(integerList1, 6));  
