class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
    this.next = null;
  }
}

function connectNodesAtSameLevel(root) {
  if (root === null) return;

  let levelStart = root;
  while (levelStart !== null) {
    let curr = levelStart;
    let prev = null;
    let nextLevelStart = null;

    while (curr !== null) {
      if (curr.left !== null) {
        if (prev !== null) {
          prev.next = curr.left;
        } else {
          nextLevelStart = curr.left;
        }
        prev = curr.left;
      }

      if (curr.right !== null) {
        if (prev !== null) {
          prev.next = curr.right;
        } else {
          nextLevelStart = curr.right;
        }
        prev = curr.right;
      }

      curr = curr.next;
    }

    levelStart = nextLevelStart;
  }
}
