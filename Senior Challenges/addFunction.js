/*You are given two non-empty linked lists representing two non-negative integers. 
* The digits are stored in reverse order and each of their nodes 
* contain a single digit. Add the two numbers and return it as a linked list.
* You may assume the two numbers do not contain any leading zero, except the number 0 itself. */

function add() {
  let args = [...arguments];

  if (args.length === 2) {
    return args[0] + args[1];
  } else if (args.length === 0) {
    return add;
  } else if (args.length === 1) {
    return add.bind(null, args[0]);
  }
};

let sum1 = add(2, 3);
console.log(sum1);

let sum2 = add()()();
console.log(sum2);

let sum3 = add(1)()()()(3);
console.log(sum3)

let sum4 = add()()(10)()(23);
console.log(sum4)

let sum5 = add(0)(1);
console.log(sum5)