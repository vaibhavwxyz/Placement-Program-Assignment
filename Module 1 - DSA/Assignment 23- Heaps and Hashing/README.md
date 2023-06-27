# Assignment 23- Heaps and Hashing

## 💡 Question 01- Calculate Depth of Binary Tree from Preorder

> Given preorder of a binary tree, calculate its **[depth(or height)](https://www.geeksforgeeks.org/write-a-c-program-to-find-the-maximum-depth-or-height-of-a-tree/)** [starting from depth 0]. The preorder is given as a string with two possible characters.
>
> 1. ‘l’ denotes the leaf
> 2. ‘n’ denotes internal node
>
> The given tree can be seen as a full binary tree where every node has 0 or two children. The two children of a node can ‘n’ or ‘l’ or mix of both.
>
> **Examples :**
>
> Input : nlnll
> Output : 2
> Explanation :
>
> <img src="https://pwskills.notion.site/image/https%3A%2F%2Fmedia.geeksforgeeks.org%2Fwp-content%2Fuploads%2Fbtree1.png?id=b9cd6bb1-1a24-45cf-a2ec-d9a665b7fd24&table=block&spaceId=6fae2e0f-dedc-48e9-bc59-af2654c78209&width=580&userId=&cache=v2" height="250px"/>
>
> Input : nlnnlll
> Output : 3
>
> <img src="https://pwskills.notion.site/image/https%3A%2F%2Fmedia.geeksforgeeks.org%2Fwp-content%2Fuploads%2Fdia2.png?id=604e28b1-a250-4e4f-9416-91e5c4545e60&table=block&spaceId=6fae2e0f-dedc-48e9-bc59-af2654c78209&width=580&userId=&cache=v2" height="250px"/>

### 🚀 Answer

```javascript
function calculateDepth(preorder) {
  let depth = 0;
  let stack = [];

  for (let i = 0; i < preorder.length; i++) {
    if (preorder[i] === "n") {
      stack.push(preorder[i]);
    } else {
      while (stack.length > 0 && stack[stack.length - 1] === "l") {
        stack.pop();
      }
      stack.push(preorder[i]);
      depth = Math.max(depth, stack.length - 1);
    }
  }

  return depth;
}
```

## 💡 Question 02- Print Left View of Binary Tree

> Given a Binary tree, the task is to print the **left view** of the Binary Tree. The left view of a Binary Tree is a set of leftmost nodes for every level.
>
> **Examples:**
>
> **_Input:_**
>
>             4
>
>           /   \
>
>         5     2
>
>              /   \
>
>             3     1
>
>            /  \
>
>           6    7
>
> **Output:** 4 5 3 6
>
> **Explanation:**
>
> <img src="https://pwskills.notion.site/image/https%3A%2F%2Fmedia.geeksforgeeks.org%2Fwp-content%2Fcdn-uploads%2Fleft-view.png?id=f7c11345-294e-45c8-99b2-eb1553a0c93d&table=block&spaceId=6fae2e0f-dedc-48e9-bc59-af2654c78209&width=380&userId=&cache=v2" height="250px"/>
>
> **_Input:_**
>
>                     1
>
>                   /   \
>
>                 2       3
>
>                  \
>
>                    4
>
>                      \
>
>                         5
>
>                            \
>
>                              6
>
> **Output:** 1 2 4 5 6

### 🚀 Answer

```javascript
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function printLeftView(root) {
  if (root === null) return;

  const queue = [root];

  while (queue.length > 0) {
    const size = queue.length;

    for (let i = 0; i < size; i++) {
      const node = queue.shift();

      if (i === 0) {
        console.log(node.val);
      }

      if (node.left !== null) {
        queue.push(node.left);
      }
      if (node.right !== null) {
        queue.push(node.right);
      }
    }
  }
}
```

## 💡 Question 03- Print Right View of Binary Tree

> Given a Binary Tree, print the Right view of it.
>
> The right view of a Binary Tree is a set of nodes visible when the tree is visited from the Right side.
>
> **Examples:**
>
> **Input:**
>
>          1
>
>       /     \
>
> 2        3
>
> /   \       /  \
>
> 4     5   6    7
>
>              \
>
>                8
>
> **Output**:
>
> Right view of the tree is 1 3 7 8
>
> **Input:**
>
>          1
>
>        /
>
>     8
>
> /
>
> 7
>
> **Output**:
>
> Right view of the tree is 1 8 7

### 🚀 Answer

```javascript
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function printRightView(root) {
  if (root === null) return;

  const queue = [root];

  while (queue.length > 0) {
    const size = queue.length;

    for (let i = 0; i < size; i++) {
      const node = queue.shift();

      if (i === size - 1) {
        console.log(node.val);
      }

      if (node.left !== null) {
        queue.push(node.left);
      }
      if (node.right !== null) {
        queue.push(node.right);
      }
    }
  }
}
```

## 💡 Question 04- Print Bottom View of Binary Tree

> Given a Binary Tree, The task is to print the **bottom view** from left to right. A node **x** is there in output if x is the bottommost node at its horizontal distance. The horizontal distance of the left child of a node x is equal to a horizontal distance of x minus 1, and that of a right child is the horizontal distance of x plus 1.
>
> **Examples:**
>
> **Input:**
>
>              20
>
>            /     \
>
>         8         22
>
>     /      \         \
>
> 5         3        25
>
>         /    \
>
> 10       14
>
> **Output:** 5, 10, 3, 14, 25.
>
> **Input:**
>
>              20
>
>            /     \
>
>         8         22
>
>     /      \      /   \
>
> 5         3   4     25
>
>          /    \
>
>      10       14
>
> **Output:**
> 5 10 4 14 25.
>
> **Explanation:**
>
> If there are multiple bottom-most nodes for a horizontal distance from the root, then print the later one in the level traversal.
>
> **3 and 4** are both the bottom-most nodes at a horizontal distance of 0, we need to print 4.

### 🚀 Answer

```javascript
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
```
