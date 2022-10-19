// function based code:

const newQueue = [];

const enqueue = (queue, element) => {
  return queue.push(element);
};

const dequeue = (queue) => {
  return queue.shift();
};

const isQueueEmpty = (queue) => {
  return queue.length === 0;
};

const front = (queue) => {
  if (queue.length > 0) {
    return queue[0];
  } else {
    return "The Queue is empty!";
  }
};

const printQueue = (queue) => {
  return queue;
};

const firstUniqChar2 = function (s) {
  for (let j = 0; j < s.length; j++) {
    let count = 0;
    let queue = [];
    for (let i = 0; i < s.length; i++) {
      enqueue(queue, s[i]);
    }
    while (!isQueueEmpty(queue)) {
      if (front(queue) === s[j]) {
        count++;
      }
      dequeue(queue);
    }
    if (count === 1) {
      return j;
    }
  }
  return -1;
};

const firstUniqChar = function (s) {
  let queue = [];
  for (let i = 0; i < s.length; i++) {
    enqueue(queue, s[i]);
  }
  for (const el of queue) {
    if (queue.indexOf(el) === queue.lastIndexOf(el)) {
      return queue.indexOf(el);
    }
  }
  return -1;
};

console.log(firstUniqChar2("loveleetcode"));
console.log(firstUniqChar2("aabb"));
console.log(firstUniqChar2("leetcode"));
console.log(firstUniqChar2("aaabs"));
console.log(firstUniqChar("loveleetcode"));
console.log(firstUniqChar("aabb"));
console.log(firstUniqChar("leetcode"));
console.log(firstUniqChar("aaabs"));
