function calculateDepth(preorder) {
  let depth = 0;
  let stack = [];

  for (let i = 0; i < preorder.length; i++) {
    if (preorder[i] === "n") {
      stack.push(preorder[i]);
    } else {
      while (stack.length > 0 && stack[stack.length - 1] === "l") {
        stack.pop();
      }
      stack.push(preorder[i]);
      depth = Math.max(depth, stack.length - 1);
    }
  }

  return depth;
}
