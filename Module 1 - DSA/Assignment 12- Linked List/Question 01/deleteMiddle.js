function deleteMiddle(head) {
  if (head === null || head.next === null) {
    return null;
  }

  let slow = head;
  let fast = head;
  let prev = null;

  while (fast !== null && fast.next !== null) {
    fast = fast.next.next;
    prev = slow;
    slow = slow.next;
  }

  prev.next = slow.next;
  return head;
}
