class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function convertToDLL(root) {
  if (root === null) return null;

  let prev = null;

  function convertNodeToDLL(node) {
    if (node === null) return;

    convertNodeToDLL(node.left);

    if (prev === null) {
      root = node;
    } else {
      node.left = prev;
      prev.right = node;
    }

    prev = node;

    convertNodeToDLL(node.right);
  }

  convertNodeToDLL(root);

  return root;
}
