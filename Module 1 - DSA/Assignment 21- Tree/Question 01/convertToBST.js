class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function convertToBST(root) {
  const values = [];

  function inorderTraversal(node) {
    if (node === null) return;
    inorderTraversal(node.left);
    values.push(node.val);
    inorderTraversal(node.right);
  }

  function convertNodeToBST(node) {
    if (node === null) return null;
    convertNodeToBST(node.left);
    node.val = values.shift();
    convertNodeToBST(node.right);
  }

  inorderTraversal(root);
  convertNodeToBST(root);
  return root;
}
