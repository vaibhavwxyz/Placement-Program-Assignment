function isPalindrome(head) {
  if (head === null || head.next === null) {
    return true;
  }

  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  let prev = null;
  let curr = slow;

  while (curr !== null) {
    let nextNode = curr.next;
    curr.next = prev;
    prev = curr;
    curr = nextNode;
  }

  let first = head;
  let second = prev;

  while (second !== null) {
    if (first.data !== second.data) {
      return false;
    }
    first = first.next;
    second = second.next;
  }

  return true;
}
