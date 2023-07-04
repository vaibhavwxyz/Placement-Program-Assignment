class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function convertToDoublyLinkedList(root) {
  let head = null;
  let prev = null;

  function inorderTraversal(node) {
    if (node === null) return;
    inorderTraversal(node.left);
    if (prev === null) {
      head = node;
    } else {
      prev.right = node;
      node.left = prev;
    }
    prev = node;
    inorderTraversal(node.right);
  }

  inorderTraversal(root);
  if (head !== null) {
    head.left = null;
    prev.right = null;
  }
  return head;
}
