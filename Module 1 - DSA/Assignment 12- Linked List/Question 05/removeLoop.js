function removeLoop(head) {
  if (head === null || head.next === null) {
    return;
  }

  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      break;
    }
  }

  if (slow === fast) {
    slow = head;

    while (slow.next !== fast.next) {
      slow = slow.next;
      fast = fast.next;
    }

    fast.next = null;
  }
}
