function flattenLinkedList(head) {
  if (head === null || head.next === null) {
    return head;
  }

  // Merge two sorted linked lists
  head.next = flattenLinkedList(head.next);

  head = mergeLists(head, head.next);

  return head;
}

function mergeLists(a, b) {
  if (a === null) {
    return b;
  }

  if (b === null) {
    return a;
  }

  let result;

  if (a.data <= b.data) {
    result = a;
    result.bottom = mergeLists(a.bottom, b);
  } else {
    result = b;
    result.bottom = mergeLists(a, b.bottom);
  }

  return result;
}
