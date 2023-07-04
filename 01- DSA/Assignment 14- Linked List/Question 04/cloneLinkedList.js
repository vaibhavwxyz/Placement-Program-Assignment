function cloneLinkedList(head) {
  if (head === null) {
    return null;
  }

  // Create a copy of each node and insert it next to the original node
  let current = head;
  while (current !== null) {
    let newNode = new Node(current.data);
    newNode.next = current.next;
    current.next = newNode;
    current = current.next.next;
  }

  // Set random pointers for the copied nodes
  current = head;
  while (current !== null) {
    if (current.random !== null) {
      current.next.random = current.random.next;
    }
    current = current.next.next;
  }

  // Separate the original and copied nodes
  let clonedHead = head.next;
  current = head;
  while (current.next !== null) {
    let temp = current.next;
    current.next = current.next.next;
    current = temp;
  }

  return clonedHead;
}
