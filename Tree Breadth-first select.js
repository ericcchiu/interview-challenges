/*Implement a breadth-first method on a tree class.

BFSelect accepts a filter function, calls that function on each of the nodes
in Breadth-First order, and returns a flat array of node values of the tree 
for which the filter returns true. The filter function has a signature of 
filter(value, depth). Depth is the number of levels nested a node is from
the top of the tree, which has a depth of 0. */

// Time complexity: Linear O(n)

const Tree = function (value) {
  this.value = value;
  this.children = [];
  this.depth = 0;
};


Tree.prototype.BFSelect = function (filter) {
  // Instantiate a queue structure and results array 
  const queue = new Queue();
  // Create a results array 
  const filteredNode = [];

  let node = this;

  while (node) {
    // Push node that passes the filter test into array
    if (filter(node.value, node.depth)) filteredNode.push(node.value);

    // Iterate over the children of the current node 
    for (let child of node.children) {
      // Update depth of child 
      child.depth = node.depth + 1;
      // Enqueue all child into the same storage 
      queue.enqueue(child);
    }

    // Dequeue node 
    node = queue.dequeue();
  }
  return filteredNode;
};

/**
 * You shouldn't need to change anything below here, but feel free to look.
 */



/**
  * add an immediate child
  * (wrap values in Tree nodes if they're not already)
  */
Tree.prototype.addChild = function (child) {
  if (!child || !(child instanceof Tree)) {
    child = new Tree(child);
  }

  if (!this.isDescendant(child)) {
    this.children.push(child);
  } else {
    throw new Error('That child is already a child of this tree');
  }
  // return the new child node for convenience
  return child;
};

/**
  * check to see if the provided tree is already a child of this
  * tree __or any of its sub trees__
  */
Tree.prototype.isDescendant = function (child) {
  if (this.children.indexOf(child) !== -1) {
    // `child` is an immediate child of this tree
    return true;
  } else {
    for (var i = 0; i < this.children.length; i++) {
      if (this.children[i].isDescendant(child)) {
        // `child` is descendant of this tree
        return true;
      }
    }
    return false;
  }
};

/**
  * remove an immediate child
  */
Tree.prototype.removeChild = function (child) {
  var index = this.children.indexOf(child);
  if (index !== -1) {
    // remove the child
    this.children.splice(index, 1);
  } else {
    throw new Error('That node is not an immediate child of this tree');
  }
};


// Create a queue data structure 
var Queue = function () {
  const storage = [];

  this.enqueue = function (value) {
    storage.push(value)
  }

  this.dequeue = function () {
    // Removes first element in array and returns removed element 
    return storage.shift();
  }
}


/*** Testing & Logging ***/
var root1 = new Tree(1); // depth 0
var branch2 = root1.addChild(2); // depth 1
var branch3 = root1.addChild(3); // depth 1
var leaf4 = branch2.addChild(4); // depth 2
var leaf5 = branch2.addChild(5); // depth 2
var leaf6 = branch3.addChild(6); // depth 2
var leaf7 = branch3.addChild(7); // depth 2

console.log(root1.BFSelect(function (value, depth) {
  return value % 2;
})) //=> [1, 3, 5, 7]

console.log(root1.BFSelect(function (value, depth) {
  return depth === 1;
})) //=> [2, 3]