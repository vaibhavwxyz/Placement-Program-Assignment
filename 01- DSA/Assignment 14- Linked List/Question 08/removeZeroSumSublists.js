function removeZeroSumSublists(head) {
  let dummy = new ListNode(0);
  dummy.next = head;

  let prefixSum = 0;
  let map = new Map();
  let current = dummy;

  while (current !== null) {
    prefixSum += current.val;

    if (map.has(prefixSum)) {
      let prev = map.get(prefixSum);
      let node = prev.next;

      while (node !== current) {
        prefixSum += node.val;
        map.delete(prefixSum);
        node = node.next;
      }

      prev.next = current.next;
    } else {
      map.set(prefixSum, current);
    }

    current = current.next;
  }

  return dummy.next;
}
