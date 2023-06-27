# Assignment 22- Tree

## 💡 Question 01- Convert Binary Tree to Doubly Linked List (DLL)

> Given a Binary Tree (Bt), convert it to a Doubly Linked List(DLL). The left and right pointers in nodes are to be used as previous and next pointers respectively in converted DLL. The order of nodes in DLL must be the same as in Inorder for the given Binary Tree. The first node of Inorder traversal (leftmost node in BT) must be the head node of the DLL.
>
> Example:
>
> <img src="https://pwskills.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Ff9dda6ae-60b9-427b-990f-dc5b3117a5e3%2FUntitled.png?id=f5542efd-4d64-4904-9259-23aeb80f012b&table=block&spaceId=6fae2e0f-dedc-48e9-bc59-af2654c78209&width=860&userId=&cache=v2" height="300px"/>

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

## 💡 Question 02- Flip Binary Tree Clockwise

> A Given a binary tree, the task is to flip the binary tree towards the right direction that is clockwise. See the below examples to see the transformation.
>
> In the flip operation, the leftmost node becomes the root of the flipped tree and its parent becomes its right child and the right sibling becomes its left child and the same should be done for all left most nodes recursively.
>
> **Example1:**
>
> <img src="https://pwskills.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fa5f5bbbe-8607-4f17-9ab4-b31327ffa2d0%2FUntitled.png?id=bf2642e8-4284-4d78-9cf8-ea00a926b238&table=block&spaceId=6fae2e0f-dedc-48e9-bc59-af2654c78209&width=860&userId=&cache=v2" height="300px"/>
>
> **Example2:**
>
> <img src="https://pwskills.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F063636b4-9f35-4524-b6d9-c97e30cac510%2FUntitled.png?id=257a6e42-4876-4a44-ac0e-07f80a570f83&table=block&spaceId=6fae2e0f-dedc-48e9-bc59-af2654c78209&width=860&userId=&cache=v2" height="300px"/>

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

## 💡 Question 03- Print Root-to-Leaf Paths

> Given a binary tree, print all its root-to-leaf paths without using recursion. For example, consider the following Binary Tree.
>
> Input:
>
>         6
>      /    \
>     3      5
>
> / \ \
>  2 5 4
> / \
>  7 4
>
> Output:
>
> There are 4 leaves, hence 4 root to leaf paths -
> 6->3->2
> 6->3->5->7
> 6->3->5->4
> 6->5>4

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

## 💡 Question 04- Check if Traversals Belong to the Same Tree

> Given Preorder, Inorder and Postorder traversals of some tree. Write a program to check if they all are of the same tree.
>
> **Examples:**
>
> Input :
>
>         Inorder -> 4 2 5 1 3
>         Preorder -> 1 2 4 5 3
>         Postorder -> 4 5 2 3 1
>
> Output :
>
> Yes
> Explanation :
>
> All of the above three traversals are of
> the same tree
>
>                            1
>                          /   \
>                         2     3
>                       /   \
>                      4     5
>
> Input :
>
>         Inorder -> 4 2 5 1 3
>         Preorder -> 1 5 4 2 3
>         Postorder -> 4 1 2 3 5
>
> Output :
>
> No

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
