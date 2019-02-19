/* 
Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same 
backward as forward.
*/

const isPalindrome = x => {
  if (x < 0) return false;
  const reversedNum = x.toString().split('').reverse().join('');
  return (x.toString() === reversedNum) ? true : false;
};

console.log(isPalindrome(121));
console.log(isPalindrome(-121));
