function createNewList(list1, list2) {
  if (!list1 || !list2) {
    return null;
  }

  let newList = null;
  let newListTail = null;

  let current1 = list1;
  let current2 = list2;

  while (current1 !== null && current2 !== null) {
    let newNode;

    if (current1.data >= current2.data) {
      newNode = new Node(current1.data);
      current1 = current1.next;
    } else {
      newNode = new Node(current2.data);
      current2 = current2.next;
    }

    if (newList === null) {
      newList = newNode;
      newListTail = newNode;
    } else {
      newListTail.next = newNode;
      newListTail = newListTail.next;
    }
  }

  if (current1 !== null) {
    newListTail.next = current1;
  }

  if (current2 !== null) {
    newListTail.next = current2;
  }

  return newList;
}
