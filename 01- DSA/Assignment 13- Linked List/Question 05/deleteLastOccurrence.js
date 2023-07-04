function deleteLastOccurrence(head, key) {
  if (head === null) {
    return null;
  }

  let lastOccurrence = null;
  let current = head;

  while (current !== null) {
    if (current.data === key) {
      lastOccurrence = current;
    }
    current = current.next;
  }

  if (lastOccurrence === null) {
    return head;
  }

  if (lastOccurrence === head) {
    return head.next;
  }

  current = head;

  while (current.next !== lastOccurrence) {
    current = current.next;
  }

  current.next = lastOccurrence.next;

  return head;
}
