/* Someone wrote a tree implementation, but they forgot to finish writing the
 *  definitions for addChild and contains.
 *  Help this person finish their tree by adding in the missing code for these methods.
 */

// Prototypal Inheritance
const treeMaker = function(value) {
  const newTree = Object.create(treeMaker.methods);
  newTree.value = value;
  newTree.children = [];
  return newTree;
};

treeMaker.methods = {};

treeMaker.methods.addChild = function(value) {
  let node = treeMaker(value);
  this.children.push(node);
};
treeMaker.methods.contains = function(target) {
  let result = false;

  if (this.value === target) {
    return true;
  }

  for (let child of this.children) {
    if (child.contains(target)) {
      return true;
    }
  }
  return false;
  // const traverse = currentNode => {
  //   for (let i = 0; i < currentNode.length; i++) {
  //     if (currentNode[i].value === target) {
  //       result = true;
  //     }
  //     traverse(currentNode[i].children);
  //   }
  //   return result;
  // };
  // return traverse(this.children);
};

// Logging
var newTree = treeMaker();
newTree.addChild(5);

console.log(newTree);
console.log(newTree.contains(5));
