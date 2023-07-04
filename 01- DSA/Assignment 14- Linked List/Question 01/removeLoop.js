function removeLoop(head) {
  if (head === null || head.next === null) {
    return;
  }

  let slow = head;
  let fast = head;

  // Detect the loop
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      break;
    }
  }

  // If loop is found, fix the loop
  if (slow === fast) {
    slow = head;

    while (slow.next !== fast.next) {
      slow = slow.next;
      fast = fast.next;
    }

    fast.next = null; // Remove the loop
  }
}
