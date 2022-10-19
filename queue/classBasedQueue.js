// Class based approach:

class Queue {
  constructor() {
    this.elements = [];
  }

  enqueue(node) {
    this.elements.push(node);
  }

  dequeue() {
    if (this.elements.length > 0) {
      return this.elements.shift();
    } else {
      return "Underflow situation";
    }
  }
  isEmpty() {
    return this.elements.length == 0;
  }

  front() {
    if (this.elements.length > 0) {
      return this.elements[0];
    } else {
      return "The Queue is empty!";
    }
  }
  print() {
    return this.elements;
  }
}

const firstUniqChar = function (s) {
  for (let j = 0; j < s.length; j++) {
    let count = 0;
    let queue = new Queue();
    for (let i = 0; i < s.length; i++) {
      queue.enqueue(s[i]);
    }
    while (!queue.isEmpty()) {
      if (queue.front() === s[j]) {
        count++;
      }
      queue.dequeue();
    }
    if (count === 1) {
      return j;
    }
  }
  return -1;
};

console.log(firstUniqChar("aaabc"));
console.log(firstUniqChar("loveleetcode"));
console.log(firstUniqChar("aabbcc"));
