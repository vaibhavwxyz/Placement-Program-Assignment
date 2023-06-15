function nthFromEnd(head, n) {
  if (head === null) {
    return null;
  }

  let slow = head;
  let fast = head;

  for (let i = 0; i < n; i++) {
    if (fast === null) {
      return null;
    }
    fast = fast.next;
  }

  while (fast) {
    slow = slow.next;
    fast = fast.next;
  }

  return slow.data;
}
