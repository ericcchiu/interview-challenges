
const reverse = (x) => {
  let reversedNum = x.toString().split('').reverse().join('');
  reversedNum = Math.sign(x) * parseInt(reversedNum);
  if (reversedNum >= 2 ** 31 - 1 || reversedNum <= -(2 ** 31)) return 0;
  return reversedNum;
};

console.log(reverse(153423646900222));
console.log(reverse(153));
console.log(reverse(-153));

