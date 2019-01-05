/* Write a stack. Once you’re done, implement a queue using two stacks to create
 * FIFO behavior. The queue should not have any storage separate from its stacks.
 */
const Stack = function() {
  const storage = [];

  this.push = function(val) {
    storage.push(val);
  };

  this.pop = function() {
    return storage.pop();
  };

  this.size = function() {
    return storage.length;
  };
};

const Queue = function() {
  const inbox = new Stack();
  const outbox = new Stack();

  this.enqueue = function(val) {
    inbox.push(val);
  };

  this.dequeue = function() {
    if (outbox.size() > 0) return outbox.pop();
    while (inbox.size() > 0) {
      outbox.push(inbox.pop());
    }
    return outbox.pop();
  };

  this.size = function() {
    return outbox.size() + inbox.size();
  };
};
