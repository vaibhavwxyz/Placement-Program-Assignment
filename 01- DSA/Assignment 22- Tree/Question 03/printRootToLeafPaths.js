class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function printRootToLeafPaths(root) {
  if (root === null) return;

  const stack = [{ node: root, path: "" }];

  while (stack.length > 0) {
    const { node, path } = stack.pop();

    const newPath = path === "" ? `${node.val}` : `${path}->${node.val}`;

    if (node.left === null && node.right === null) {
      console.log(newPath);
    } else {
      if (node.left !== null) {
        stack.push({ node: node.left, path: newPath });
      }
      if (node.right !== null) {
        stack.push({ node: node.right, path: newPath });
      }
    }
  }
}
