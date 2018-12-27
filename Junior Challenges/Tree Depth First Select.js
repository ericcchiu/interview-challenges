// Implement a depth-first method on a tree class.

// DFSelect accepts a filter function, calls that function on each of the nodes in Depth First order, 
// and returns a flat array of node values of the tree for which the filter returns true. The filter 
// function has a signature of filter(value, depth). Depth is the number of levels nested a node is from 
// the top of the tree, which has a depth of 0.

// Time complexity for DFS: O(n) 
const Tree = function (value) {
  this.value = value;
  this.children = [];
};

Tree.prototype.DFSelect = function (filter, depth = 0, nodeArr = []) {
  if (filter(this.value, depth)) nodeArr.push(this.value);

  this.children.forEach((child) => {
    child.DFSelect(filter, depth + 1, nodeArr);
  });
  return nodeArr;
};

Tree.prototype.addChild = function (child) {
  if (!child || !(child instanceof Tree)) {
    child = new Tree(child);
  }
  if (!this.isDescendant(child)) {
    this.children.push(child);
  } else {
    throw new Error("That child is already a child of this tree");
  }
  // return the new child node for convenience
  return child;
};

Tree.prototype.isDescendant = function (child) {
  if (this.children.indexOf(child) !== -1) {
    // `child` is an immediate child of this tree
    return true;
  } else {
    for (let i = 0; i < this.children.length; i++) {
      if (this.children[i].isDescendant(child)) {
        // `child` is descendant of this tree
        return true;
      }
    }
    return false;
  }
};

Tree.prototype.removeChild = function (child) {
  let index = this.children.indexOf(child);
  if (index !== -1) {
    // remove the child
    this.children.splice(index, 1);
  } else {
    throw new Error("That node is not an immediate child of this tree");
  }
};



/*** Testing & Logging****/

const root1 = new Tree(1);  // depth 0
const branch2 = root1.addChild(2); // depth 1
const branch3 = root1.addChild(3); // depth 1
const leaf4 = branch2.addChild(4); // depth 2
const leaf5 = branch2.addChild(5); // depth 2
const leaf6 = branch3.addChild(6); // depth 2
const leaf7 = branch3.addChild(7); // depth 2

console.log(root1.DFSelect(function (value, depth) {
  return value % 2 === 1;
})); //=> [1, 5, 3, 7]

console.log(root1.DFSelect(function (value, depth) {
  return depth === 1;
})); //=> [2, 3]

