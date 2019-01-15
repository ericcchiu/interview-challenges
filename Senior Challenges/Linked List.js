// Implement a linked-list in pseudoclassical inheritance pattern 
const LinkedList = function (initialValue) {
  this.head = new Node(initialValue);
  this.tail = this.head;
  this.list = {};
  if (initialValue) this.list[initialValue] = true;

}

LinkedList.prototype.addToTail = function (value) {
  this.list[value] = true;
  if (this.head.value === null) {
    this.head.value = value;
    this.head = this.tail;
  } else {
    this.tail.next = new Node(value);
    this.tail = this.tail.next;
  }
}

LinkedList.prototype.removeHead = function () {
  delete this.list[this.head.value];
  if (this.head === this.tail) this.tail = null;
  this.head = this.head.next;
}

LinkedList.prototype.contains = function (target) {
  return !!this.list[target]
}

const Node = function (value) {
  this.value = value || null;
  this.next = null;
}

/*** Logging ***/
var list = new LinkedList();
list.addToTail(4);
list.addToTail(5);
list.addToTail(6);
console.log(list);

/*
var LinkedList = function(value) {
  this.head = { value, next: null };
  this.tail = { value, next: null };
};

LinkedList.prototype.makeNode = function(value) {
  const node = {};
  node.value = value;
  node.next = null;
  return node;
};

LinkedList.prototype.addToTail = function(value) {
  const newNode = this.makeNode(value);
  if (!this.head.value) {
    this.head = newNode;
  }
  this.head.next = newNode;
  this.tail = newNode;
};

LinkedList.prototype.removeHead = function() {
  if (this.head === null) {
    return null;
  }
  const oldHead = this.head;
  this.head = this.head.next;
  this.tail = this.tail.next;
};

LinkedList.prototype.contains = function(value) {
  let node = this.head;
  while (node) {
    if (node.value === value) {
      return true;
    }
    node = node.next;
  }
  return false;
};
*/