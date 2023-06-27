class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
    this.hd = 0; // horizontal distance
  }
}

function printBottomView(root) {
  if (root === null) return;

  const map = new Map();
  const queue = [{ node: root, hd: 0 }];

  while (queue.length > 0) {
    const { node, hd } = queue.shift();

    map.set(hd, node.val);

    if (node.left !== null) {
      queue.push({ node: node.left, hd: hd - 1 });
    }
    if (node.right !== null) {
      queue.push({ node: node.right, hd: hd + 1 });
    }
  }

  for (const [key, value] of map) {
    console.log(value);
  }
}
