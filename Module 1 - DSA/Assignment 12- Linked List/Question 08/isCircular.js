function isCircular(head) {
  if (head === null) {
    return false;
  }

  let current = head.next;

  while (current !== null && current !== head) {
    current = current.next;
  }

  return current === head;
}
