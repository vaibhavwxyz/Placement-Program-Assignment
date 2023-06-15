function reorderLinkedList(head) {
  if (head === null || head.next === null) {
    return head;
  }

  // Find the middle of the linked list
  let slow = head;
  let fast = head;

  while (fast.next !== null && fast.next.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  let secondHalf = slow.next;
  slow.next = null;

  // Reverse the second half of the linked list
  secondHalf = reverseLinkedList(secondHalf);

  // Merge the two halves alternatively
  let current1 = head;
  let current2 = secondHalf;

  while (current2 !== null) {
    let temp1 = current1.next;
    let temp2 = current2.next;

    current1.next = current2;
    current2.next = temp1;

    current1 = temp1;
    current2 = temp2;
  }

  return head;
}

function reverseLinkedList(head) {
  let current = head;
  let prev = null;
  let next = null;

  while (current !== null) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  return prev;
}
