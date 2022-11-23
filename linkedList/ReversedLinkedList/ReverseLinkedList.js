class ListNode {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(array) {
    array.map((el) => {
      const newNode = new ListNode(el);
      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
        return this;
      }
      this.tail.next = newNode;
      this.tail = newNode;
    });
    return this;
  }

  reverse() {
    let currNode = this.head;
    let prevNode = null;
    let nextNode = null;

    while (currNode) {
      // Store next node.
      nextNode = currNode.next;

      // Change next node of the current node so it would link to previous node.
      currNode.next = prevNode;

      // Move prevNode and currNode nodes one step forward.
      prevNode = currNode;
      currNode = nextNode;
    }

    // Reset head and tail.
    this.tail = this.head;
    this.head = prevNode;

    return this;
  }

  toArray() {
    const nodes = [];

    let currentNode = this.head;
    while (currentNode) {
      nodes.push(currentNode);
      currentNode = currentNode.next;
    }

    return nodes;
  }
}

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const reverseList = function (head) {
  let myList = new LinkedList();
  if (head.length === 0) {
    return [];
  }
  myList.append(head);
  myList.reverse();

  const result = myList.toArray().map((el) => el.value);
  return result;
};

let myOuterList = new LinkedList();

console.log(reverseList([1, 2, 3, 4, 5]));
console.log(reverseList([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(reverseList([]));
