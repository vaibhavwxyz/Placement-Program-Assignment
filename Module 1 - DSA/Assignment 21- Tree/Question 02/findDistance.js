class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function findDistance(root, node1, node2) {
  function findLCA(node, p, q) {
    if (node === null) return null;
    if (node.val > p.val && node.val > q.val) {
      return findLCA(node.left, p, q);
    }
    if (node.val < p.val && node.val < q.val) {
      return findLCA(node.right, p, q);
    }
    return node;
  }

  function findLevel(node, target, level) {
    if (node === null) return -1;
    if (node.val === target.val) return level;
    const leftLevel = findLevel(node.left, target, level + 1);
    if (leftLevel !== -1) return leftLevel;
    return findLevel(node.right, target, level + 1);
  }

  const lca = findLCA(root, node1, node2);
  const dist1 = findLevel(lca, node1, 0);
  const dist2 = findLevel(lca, node2, 0);

  return dist1 + dist2;
}
