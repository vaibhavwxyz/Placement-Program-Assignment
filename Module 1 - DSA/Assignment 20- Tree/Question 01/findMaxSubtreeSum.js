class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function findMaxSubtreeSum(root) {
  let maxSum = -Infinity;
  let maxSubtree = null;

  function dfs(node) {
    if (node === null) return 0;
    const leftSum = dfs(node.left);
    const rightSum = dfs(node.right);
    const subtreeSum = node.val + leftSum + rightSum;

    if (subtreeSum > maxSum) {
      maxSum = subtreeSum;
      maxSubtree = node;
    }

    return subtreeSum;
  }

  dfs(root);
  return maxSum;
}
