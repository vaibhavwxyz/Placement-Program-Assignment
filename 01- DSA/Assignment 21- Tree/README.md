# Assignment 21- Tree

## 💡 Question 01- Convert Binary Tree to Binary Search Tree

> You are given a binary tree. The binary tree is represented using the TreeNode class. Each TreeNode has an integer value and left and right children, represented using the TreeNode class itself. Convert this binary tree into a binary search tree.
>
> Input:
>
>         10
>
>        /   \
>
>      2      7
>
> / \
>
> 8 4
>
> Output:
>
>         8
>
>       /   \
>
>     4     10
>
> / \
>
> 2 7

### 🚀 Answer

```javascript
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
```

## 💡 Question 02- Find Distance Between Two Nodes in BST

> Given a Binary Search Tree with all unique values and two keys. Find the distance between two nodes in BST. The given keys always exist in BST.
>
> Example:
>
> Consider the following BST:
>
> <img src="https://pwskills.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Ff2455039-7e12-43fc-a7d3-b5be24931c1c%2F1.png?id=d4bc1913-d662-4c2d-a70e-d9eb224f4f9e&table=block&spaceId=6fae2e0f-dedc-48e9-bc59-af2654c78209&width=650&userId=&cache=v2" height="250px" width="250px"/>
>
> **Input-1:**
>
> n = 9
>
> values = [8, 3, 1, 6, 4, 7, 10, 14,13]
>
> node-1 = 6
> node-2 = 14
>
> **Output-1:**
>
> The distance between the two keys = 4
>
> **Input-2:**
>
> n = 9
>
> values = [8, 3, 1, 6, 4, 7, 10, 14,13]
>
> node-1 = 3
> node-2 = 4
>
> **Output-2:**
>
> The distance between the two keys = 2

### 🚀 Answer

```javascript
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
```

## 💡 Question 03- Convert Binary Tree to Doubly Linked List

> Write a program to convert a binary tree to a doubly linked list.
>
> Input:
>
>         10
>
>        /   \
>
>      5     20
>
>            /   \
>
>         30     35
>
> Output:
>
> 5 10 30 20 35

### 🚀 Answer

```javascript
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
```

## 💡 Question 04- Connect Nodes at the Same Level

> Write a program to connect nodes at the same level.
>
> Input:
>
>         1
>
>       /   \
>
>     2      3
>
> / \ / \
>
> 4 5 6 7
>
> Output:
>
> 1 → -1
> 2 → 3
> 3 → -1
> 4 → 5
> 5 → 6
> 6 → 7
> 7 → -1

### 🚀 Answer

```javascript
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
```
