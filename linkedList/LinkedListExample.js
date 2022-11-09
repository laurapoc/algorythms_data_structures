class LinkedListNode {
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

  prepend(value) {
    if (!this.head) {
      this.head = new LinkedListNode(value, null);
    } else {
      let currenthead = this.head;
      this.head = new LinkedListNode(value, currenthead);
      this.tail = currenthead;
    }

    return this;
  }

  apend(value) {
    let newTail = new LinkedListNode(value);
    if (this.tail) {
      this.tail.next = newTail;
      this.tail = newTail;
    } else {
      this.head = newTail;
      this.tail = newTail;
    }

    return this;
  }
}

let myLinkedList = new LinkedList();
let myNewLinkedList = new LinkedList();

myLinkedList.prepend("first");
myLinkedList.prepend("second");
myNewLinkedList.apend("first");
myNewLinkedList.apend("second");
myNewLinkedList.apend("third");

console.log(myLinkedList);
console.log(myNewLinkedList);
