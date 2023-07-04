function leftShiftLinkedList(head, k) {
  if (head === null || head.next === null || k === 0) {
    return head;
  }

  // Get the length of the linked list
  let length = 0;
  let current = head;

  while (current !== null) {
    length++;
    current = current.next;
  }

  // Adjust the value of k
  k = k % length;

  if (k === 0) {
    return head;
  }

  // Find the new head and tail of the linked list after shifting
  let newHead = head;
  let newTail = null;
  let steps = length - k;

  while (steps > 0) {
    newTail = newHead;
    newHead = newHead.next;
    steps--;
  }

  // Rearrange the pointers
  newTail.next = null;
  current = newHead;

  while (current.next !== null) {
    current = current.next;
  }

  current.next = head;

  return newHead;
}
