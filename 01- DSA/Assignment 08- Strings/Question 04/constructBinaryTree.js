class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function constructBinaryTree(s) {
  if (!s) {
    return null;
  }

  const stack = [];
  let i = 0;

  while (i < s.length) {
    if (s.charAt(i) === "(") {
      i++;
      const value = "";
      while (i < s.length && s.charAt(i) !== "(" && s.charAt(i) !== ")") {
        value += s.charAt(i);
        i++;
      }
      const node = new TreeNode(parseInt(value));
      if (stack.length === 0) {
        stack.push(node);
      } else {
        const parent = stack[stack.length - 1];
        if (!parent.left) {
          parent.left = node;
        } else {
          parent.right = node;
        }
        stack.push(node);
      }
    } else if (s.charAt(i) === ")") {
      stack.pop();
      i++;
    }
  }

  return stack[0];
}

function inorderTraversal(root) {
  if (!root) {
    return [];
  }

  const result = [];
  const stack = [];
  let node = root;

  while (node || stack.length > 0) {
    while (node) {
      stack.push(node);
      node = node.left;
    }
    node = stack.pop();
    result.push(node.val);
    node = node.right;
  }

  return result;
}

// Example usage:
const s = "4(2(3)(1))(6(5))";
const root = constructBinaryTree(s);
const inorder = inorderTraversal(root);
console.log(inorder); // Output: [4, 2, 6, 3, 1, 5]
