const reverse = (obj) => {
  let head = obj;
  if (head === null) return;

  let currentNode = head;
  let prevNode = null;
  let nextNode = null;

  // traverse list and adjust links
  while (currentNode) {
    nextNode = currentNode.next;
    currentNode.next = prevNode;
    prevNode = currentNode;
    currentNode = nextNode;
    nextNode = null;
  }
  head = prevNode; // reset head
  return head;
};

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
  let result = null;
  if (head === null) {
    return result;
  }
  result = reverse(head);

  return result;
};

// linked list
const head = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 4,
        next: {
          val: 5,
          next: null,
        },
      },
    },
  },
};

const head2 = {};

console.log(reverseList(head));
console.log(reverseList(head2));
