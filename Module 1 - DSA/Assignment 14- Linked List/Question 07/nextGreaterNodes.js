function nextGreaterNodes(head) {
  let result = [];
  let stack = [];
  let index = 0;

  while (head !== null) {
    result[index] = 0;

    while (stack.length > 0 && stack[stack.length - 1].data < head.data) {
      let node = stack.pop();
      result[node.index] = head.data;
    }

    stack.push({ data: head.data, index: index });
    index++;
    head = head.next;
  }

  return result;
}
