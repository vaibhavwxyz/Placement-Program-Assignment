function mergeSortedLists(a, b) {
  if (a === null) {
    return b;
  }

  if (b === null) {
    return a;
  }

  let result;

  if (a.data <= b.data) {
    result = a;
    result.next = mergeSortedLists(a.next, b);
  } else {
    result = b;
    result.next = mergeSortedLists(a, b.next);
  }

  return result;
}
