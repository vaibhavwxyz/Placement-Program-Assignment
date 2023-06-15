function addOne(head) {
  // Reverse the linked list
  head = reverseLinkedList(head);

  let current = head;
  let carry = 1;

  // Add 1 to the linked list
  while (current !== null) {
    let sum = current.data + carry;
    carry = Math.floor(sum / 10);
    current.data = sum % 10;
    current = current.next;
  }

  // Reverse the linked list again
  head = reverseLinkedList(head);

  // If carry is still remaining, create a new head node
  if (carry > 0) {
    let newNode = new Node(carry);
    newNode.next = head;
    head = newNode;
  }

  return head;
}

function reverseLinkedList(head) {
  let current = head;
  let prev = null;
  let next = null;

  while (current !== null) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  return prev;
}
