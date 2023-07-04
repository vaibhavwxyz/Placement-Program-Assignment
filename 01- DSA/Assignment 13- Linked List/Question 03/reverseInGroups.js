function reverseInGroups(head, k) {
  if (head === null || head.next === null) {
    return head;
  }

  let current = head;
  let next = null;
  let prev = null;
  let count = 0;

  while (count < k && current !== null) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
    count++;
  }

  if (next !== null) {
    head.next = reverseInGroups(next, k);
  }

  return prev;
}
