# Assignment 20- Tree

## 💡 Question 01- Find Subtree with Maximum Sum in a Binary Tree

> Given a binary tree, your task is to find subtree with maximum sum in tree.
>
> Examples:
>
> Input1 :
>
>        1
>
>      /   \
>
> 2      3
>
> / \    / \
>
> 4   5  6   7
>
> Output1 : 28
>
> As all the tree elements are positive, the largest subtree sum is equal to sum of all tree elements.
>
> Input2 :
>
> 1
>
>      /    \
>
> -2      3
>
> / \    /  \
>
> 4   5  -6   2
>
> Output2 : 7
>
> Subtree with largest sum is :
>
> -2
>
> / \
>
> 4   5
>
> Also, entire tree sum is also 7.

### 🚀 Answer

```javascript
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
```

## 💡 Question 02- Construct Binary Search Tree (BST) from Level Order Traversal

> Construct the BST (Binary Search Tree) from its given level order traversal.
>
> Example:
>
> Input: arr[] = {7, 4, 12, 3, 6, 8, 1, 5, 10}
>
> Output: BST:
>
>             7
>
>          /    \
>
>        4     12
>
>      /  \     /
>
>     3   6  8
>
> /   /   \
>
> 1  5   10

### 🚀 Answer

```javascript
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function constructBSTFromLevelOrder(arr) {
  if (arr.length === 0) return null;

  const root = new TreeNode(arr[0]);
  const queue = [root];
  let i = 1;

  while (i < arr.length) {
    const node = queue.shift();

    if (arr[i] < node.val) {
      node.left = new TreeNode(arr[i]);
      queue.push(node.left);
    }

    i++;

    if (i < arr.length && arr[i] > node.val) {
      node.right = new TreeNode(arr[i]);
      queue.push(node.right);
    }

    i++;
  }

  return root;
}
```

## 💡 Question 03- Check if Array Represents Level Order Traversal of a Binary Search Tree (BST)

> Given an array of size n. The problem is to check whether the given array can represent the level order traversal of a Binary Search Tree or not.
>
> Examples:
>
> Input1 : arr[] = {7, 4, 12, 3, 6, 8, 1, 5, 10}
>
> Output1 : Yes
>
> For the given arr[], the Binary Search Tree is:
>
>             7
>
>          /    \
>
>        4     12
>
>      /  \     /
>
>     3   6  8
>
> /   /   \
>
> 1  5   10
>
> Input2 : arr[] = {11, 6, 13, 5, 12, 10}
>
> Output2 : No
>
> The given arr[] does not represent the level order traversal of a BST.

### 🚀 Answer

```javascript
function isLevelOrderBST(arr) {
  if (arr.length === 0) return true;

  const queue = [[arr[0], -Infinity, Infinity]];
  let i = 1;

  while (i < arr.length && queue.length > 0) {
    const [value, min, max] = queue.shift();

    if (value < min || value > max) {
      return false;
    }

    if (i < arr.length && arr[i] < value) {
      queue.push([arr[i], min, value - 1]);
    }

    i++;

    if (i < arr.length && arr[i] > value) {
      queue.push([arr[i], value + 1, max]);
    }

    i++;
  }

  return i === arr.length;
}
```
