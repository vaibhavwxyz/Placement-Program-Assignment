function reverseAlternateKNodes(head, k) {
  if (head === null || head.next === null) {
    return head;
  }

  let current = head;
  let next = null;
  let prev = null;
  let count = 0;

  while (count < k && current !== null) {
    next = current.next;

    if (count % 2 === 0) {
      current.next = prev;
    }

    prev = current;
    current = next;
    count++;
  }

  if (head.next !== null) {
    head.next = reverseAlternateKNodes(current, k);
  }

  return prev;
}
