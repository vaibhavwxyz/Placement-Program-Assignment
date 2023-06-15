function deleteNodeAtPosition(head, position) {
  if (head === null) {
    return null;
  }

  if (position === 1) {
    head = head.next;

    if (head !== null) {
      head.prev = null;
    }

    return head;
  }

  let current = head;
  let count = 1;

  while (current !== null && count < position) {
    current = current.next;
    count++;
  }

  if (current === null) {
    return head;
  }

  if (current.next !== null) {
    current.next.prev = current.prev;
  }

  if (current.prev !== null) {
    current.prev.next = current.next;
  }

  return head;
}
