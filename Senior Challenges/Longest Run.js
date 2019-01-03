// Write a function that, given a string, finds the longest run of identical characters and returns an array containing
// the start and end indices of that run. If there are two runs of equal length, return the first one. Return [0,0] for
// no runs.

const longestRun = string => {
  let currentRun = [0, 0];
  let longRun = [0, 0];

  for (let i = 1; i < string.length; i++) {
    if (string[i - 1] === string[i]) {
      currentRun[1] = i;

      if (currentRun[1] - currentRun[0] > longRun[1] - longRun[0]) {
        longRun = currentRun;
      }
    } else {
      currentRun = [i, i];
    }
  }
  return longRun;
};

let str1 = "abbbcc";
let str2 = "aabbc";
let str3 = "mississippi";

console.log(longestRun(str1)); // Expect [1, 3]
console.log(longestRun(str2)); // Expect [0, 1]
console.log(longestRun(str3)); // Expect [2, 3]
