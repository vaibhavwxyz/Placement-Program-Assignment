class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function flipBinaryTree(root) {
  if (root === null || (root.left === null && root.right === null)) {
    return root;
  }

  let flippedRoot = flipBinaryTree(root.left);

  root.left.left = root.right;
  root.left.right = root;
  root.left = null;
  root.right = null;

  return flippedRoot;
}
