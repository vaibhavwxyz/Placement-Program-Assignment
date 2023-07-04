function insertAtAlternatePositions(first, second) {
  if (first === null || second === null) {
    return first;
  }

  let curr1 = first;
  let curr2 = second;

  while (curr1 !== null && curr2 !== null) {
    let next1 = curr1.next;
    let next2 = curr2.next;

    curr1.next = curr2;
    curr2.next = next1;

    curr1 = next1;
    curr2 = next2;
  }

  return first;
}
