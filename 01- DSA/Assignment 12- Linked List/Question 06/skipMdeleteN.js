function skipMdeleteN(head, M, N) {
  if (head === null) {
    return null;
  }

  let current = head;

  while (current) {
    for (let i = 0; i < M - 1; i++) {
      if (current === null) {
        return head;
      }
      current = current.next;
    }

    if (current === null) {
      return head;
    }

    let temp = current.next;

    for (let i = 0; i < N; i++) {
      if (temp === null) {
        break;
      }
      temp = temp.next;
    }

    current.next = temp;
    current = temp;
  }

  return head;
}
