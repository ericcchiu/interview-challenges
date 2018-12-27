// Implement the function getClosestCommonAncestor and getAncestorPath in the Tree class

var Tree = function () {
  this.children = [];
};

/**
  * add an immediate child
  */
Tree.prototype.addChild = function (child) {
  if (!this.isDescendant(child)) {
    this.children.push(child);
  } else {
    throw new Error("That child is already a child of this tree");
  }
  return this;
};

Tree.prototype.getClosestCommonAncestor = function (branch1, branch2) {
  // Obtain the ancestor path of branch1 and branch2 
  const path1 = this.getAncestorPath(branch1);
  const path2 = this.getAncestorPath(branch2);

  // If failed to find a path where children have common ancestors return null 
  if (path1 === null || path2 === null) {
    return null;
  }

  // Iterate over path 1 and 2 
  if (path1.length > path2.length) {

    for (var i = path1.length; i >= 0; i--) {
      // Test if children in path 2 has common ancestor with path 1 
      if (path2.indexOf(path1[i]) !== -1) {
        return path1[i];
      }
    }
  } else {
    for (var i = path2.length; i >= 0; i--) {
      if (path1.indexOf(path2[i]) !== -1) {
        return path2[i];
      }
    }
  }
}

Tree.prototype.getAncestorPath = function (target) {
  // Function to traverse through tree 
  const traverse = (node) => {
    if (node === target) {
      return [node]
    }
    // Traverse through tree   
    for (let child of node.children) {
      const path = traverse(child)
      if (path) {
        return [node].concat(path)
      }
    }
    return null
  }
  return traverse(this)
}


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
// Implement the function getClosestCommonAncestor and getAncestorPath in the Tree class

var Tree = function () {
  this.children = [];
};

/**
  * add an immediate child
  */
Tree.prototype.addChild = function (child) {
  if (!this.isDescendant(child)) {
    this.children.push(child);
  } else {
    throw new Error("That child is already a child of this tree");
  }
  return this;
};

Tree.prototype.getClosestCommonAncestor = function (branch1, branch2) {
  // Obtain the ancestor path of branch1 and branch2 
  const path1 = this.getAncestorPath(branch1);
  const path2 = this.getAncestorPath(branch2);

  // If failed to find a path where children have common ancestors return null 
  if (path1 === null || path2 === null) {
    return null;
  }

  // Iterate over path 1 and 2 
  if (path1.length > path2.length) {

    for (var i = path1.length; i >= 0; i--) {
      // Test if children in path 2 has common ancestor with path 1 
      if (path2.indexOf(path1[i]) !== -1) {
        return path1[i];
      }
    }
  } else {
    for (var i = path2.length; i >= 0; i--) {
      if (path1.indexOf(path2[i]) !== -1) {
        return path2[i];
      }
    }
  }
}

Tree.prototype.getAncestorPath = function (target) {
  // Function to traverse through tree 
  const traverse = (node) => {
    if (node === target) {
      return [node]
    }
    // Traverse through tree   
    for (let child of node.children) {
      const path = traverse(child)
      if (path) {
        return [node].concat(path)
      }
    }
    return null
  }
  return traverse(this)
}


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
    throw new Error("That node is not an immediate child of this tree");
  }
};


/*** Testing & Logging***/
// Valid Child
var grandma = new Tree();
var mom = new Tree();
var uncle = new Tree();
grandma.addChild(mom);
grandma.addChild(uncle);
var me = new Tree();
mom.addChild(me);

grandma.getAncestorPath(me); // => [grandma, mom, me]
console.log(mom.getAncestorPath(me));  // => [mom, me]
console.log(me.getAncestorPath(me)); // => [me]
console.log(grandma.getClosestCommonAncestor(me, uncle)); // => grandma

// Invalid Child
console.log(grandma.getAncestorPath('H R Giger')); // => null
/**
  * remove an immediate child
  */
Tree.prototype.removeChild = function (child) {
  var index = this.children.indexOf(child);
  if (index !== -1) {
    // remove the child
    this.children.splice(index, 1);
  } else {
    throw new Error("That node is not an immediate child of this tree");
  }
};


/*** Testing & Logging***/
// Valid Child
var grandma = new Tree();
var mom = new Tree();
var uncle = new Tree();
grandma.addChild(mom);
grandma.addChild(uncle);
var me = new Tree();
mom.addChild(me);

console.log(grandma.getAncestorPath(me)); // => [grandma, mom, me]
console.log(mom.getAncestorPath(me));  // => [mom, me]
console.log(me.getAncestorPath(me)); // => [me]
console.log(grandma.getClosestCommonAncestor(me, uncle)); // => grandma

// Invalid Child
console.log(grandma.getAncestorPath('H R Giger')); // => null