# Assignment 12- Linked List

## 💡 Question 01

> Given a singly linked list, delete **middle** of the linked list. For example, if given linked list is 1->2->**3**->4->5 then linked list should be modified to 1->2->4->5.If there are **even** nodes, then there would be **two middle** nodes, we need to delete the second middle element. For example, if given linked list is 1->2->3->4->5->6 then it should be modified to 1->2->3->5->6.If the input linked list is NULL or has 1 node, then it should return NULL
> 
> **Example 1:**
> 
> ```
> Input:
> LinkedList: 1->2->3->4->5
> Output:1 2 4 5
> 
> ```
>
> **Example 2:**
> 
> ```
> Input:
> LinkedList: 2->4->6->7->5->1
> Output:2 4 6 5 1
> ```

### 🚀 Answer

```javascript
function deleteMiddle(head) {
  if (head === null || head.next === null) {
    return null;
  }

  let slow = head;
  let fast = head;
  let prev = null;

  while (fast !== null && fast.next !== null) {
    fast = fast.next.next;
    prev = slow;
    slow = slow.next;
  }

  prev.next = slow.next;
  return head;
}


```

## 💡 Question 02

> Given a linked list of **N** nodes. The task is to check if the linked list has a loop. Linked list can contain self loop.
> 
> **Example 1:**
> 
> ```
> Input:
> N = 3
> value[] = {1,3,4}
> x(position at which tail is connected) = 2
> Output:True
> Explanation:In above test case N = 3.
> The linked list with nodes N = 3 is
> given. Then value of x=2 is given which
> means last node is connected with xth
> node of linked list. Therefore, there
> exists a loop.
> ```
> 
> **Example 2:**
> 
> ```
> Input:
> N = 4
> value[] = {1,8,3,4}
> x = 0
> Output:False
> Explanation:For N = 4 ,x = 0 means
> then lastNode->next = NULL, then
> the Linked list does not contains
> any loop.
> ```

### 🚀 Answer

```javascript
function detectLoop(head) {
  if (head === null || head.next === null) {
    return false;
  }

  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      return true;
    }
  }

  return false;
}


```

## 💡 Question 03

> Given a linked list consisting of **L** nodes and given a number **N**. The task is to find the **N**th node from the end of the linked list.
> 
> **Example 1:**
> 
> ```
> Input:
> N = 2
> LinkedList: 1->2->3->4->5->6->7->8->9
> Output:8
> Explanation:In the first example, there
> are 9 nodes in linked list and we need
> to find 2nd node from end. 2nd node
> from end is 8.
> 
> ```
> 
> **Example 2:**
> 
> ```
> Input:
> N = 5
> LinkedList: 10->5->100->5
> Output:-1
> Explanation:In the second example, there
> are 4 nodes in the linked list and we
> need to find 5th from the end. Since 'n'
> is more than the number of nodes in the
> linked list, the output is -1.
> ```

### 🚀 Answer

```javascript
function nthFromEnd(head, n) {
  if (head === null) {
    return null;
  }

  let slow = head;
  let fast = head;

  for (let i = 0; i < n; i++) {
    if (fast === null) {
      return null;
    }
    fast = fast.next;
  }

  while (fast) {
    slow = slow.next;
    fast = fast.next;
  }

  return slow.data;
}

```

## 💡 Question 04

> Given a singly linked list of characters, write a function that returns true if the given list is a palindrome, else false.
> 
> <img src="https://pwskills.notion.site/image/https%3A%2F%2Fmedia.geeksforgeeks.org%2Fwp-content%2Fuploads%2F20220816144425%2FLLdrawio.png?id=e46487ad-3f04-4232-b8af-934a670fef6e&table=block&spaceId=6fae2e0f-dedc-48e9-bc59-af2654c78209&width=1600&userId=&cache=v2" height="220px">
> 
> **Examples:**
> 
> **Input:** R->A->D->A->R->NULL
> **Output:** Yes
> **Input:** C->O->D->E->NULL
> **Output:** No

### 🚀 Answer

```javascript
function isPalindrome(head) {
  if (head === null || head.next === null) {
    return true;
  }

  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  let prev = null;
  let curr = slow;

  while (curr !== null) {
    let nextNode = curr.next;
    curr.next = prev;
    prev = curr;
    curr = nextNode;
  }

  let first = head;
  let second = prev;

  while (second !== null) {
    if (first.data !== second.data) {
      return false;
    }
    first = first.next;
    second = second.next;
  }

  return true;
}


```

## 💡 Question 05

> Given a linked list of **N** nodes such that it may contain a loop.
> 
> A loop here means that the last node of the link list is connected to the node at position X(1-based index). If the link list does not have any loop, X=0.
> 
> Remove the loop from the linked list, if it is present, i.e. unlink the last node which is forming the loop.
> 
> **Example 1:**
> 
> ```
> Input:
> N = 3
> value[] = {1,3,4}
> X = 2
> Output:1
> Explanation:The link list looks like
> 1 -> 3 -> 4
>      ^    |
>      |____|
> A loop is present. If you remove it
> successfully, the answer will be 1.
> ```
> 
> **Example 2:**
> 
> ```
> Input:
> N = 4
> value[] = {1,8,3,4}
> X = 0
> Output:1
> Explanation:The Linked list does not
> contains any loop.
> ```
> 
> **Example 3:**
> 
> ```
> Input:
> N = 4
> value[] = {1,2,3,4}
> X = 1
> Output:1
> Explanation:The link list looks like
> 1 -> 2 -> 3 -> 4
> ^              |
> |______________|
> A loop is present.
> If you remove it successfully,
> the answer will be 1.
> ```

### 🚀 Answer

```javascript
function removeLoop(head) {
  if (head === null || head.next === null) {
    return;
  }

  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      break;
    }
  }

  if (slow === fast) {
    slow = head;

    while (slow.next !== fast.next) {
      slow = slow.next;
      fast = fast.next;
    }

    fast.next = null;
  }
}


```

## 💡 Question 06

> Given a linked list and two integers M and N. Traverse the linked list such that you retain M nodes then delete next N nodes, continue the same till end of the linked list.
> 
> Difficulty Level: Rookie
> 
> **Examples**:
> 
> ```
> Input:
> M = 2, N = 2
> Linked List: 1->2->3->4->5->6->7->8
> Output:
> Linked List: 1->2->5->6
> 
> Input:
> M = 3, N = 2
> Linked List: 1->2->3->4->5->6->7->8->9->10
> Output:
> Linked List: 1->2->3->6->7->8
> 
> Input:
> M = 1, N = 1
> Linked List: 1->2->3->4->5->6->7->8->9->10
> Output:
> Linked List: 1->3->5->7->9
> ```

### 🚀 Answer

```javascript
function skipMdeleteN(head, M, N) {
  if (head === null) {
    return null;
  }

  let current = head;

  while (current) {
    for (let i = 0; i < M - 1; i++) {
      if (current === null) {
        return head;
      }
      current = current.next;
    }

    if (current === null) {
      return head;
    }

    let temp = current.next;

    for (let i = 0; i < N; i++) {
      if (temp === null) {
        break;
      }
      temp = temp.next;
    }

    current.next = temp;
    current = temp;
  }

  return head;
}


```

## 💡 Question 07

> Given two linked lists, insert nodes of second list into first list at alternate positions of first list.
> For example, if first list is 5->7->17->13->11 and second is 12->10->2->4->6, the first list should become 5->12->7->10->17->2->13->4->11->6 and second list should become empty. The nodes of second list should only be inserted when there are positions available. For example, if the first list is 1->2->3 and second list is 4->5->6->7->8, then first list should become 1->4->2->5->3->6 and second list to 7->8.
> 
> Use of extra space is not allowed (Not allowed to create additional nodes), i.e., insertion must be done in-place. Expected time complexity is O(n) where n is number of nodes in first list.
> 
### 🚀 Answer

```javascript
function insertAtAlternatePositions(first, second) {
  if (first === null || second === null) {
    return first;
  }

  let curr1 = first;
  let curr2 = second;

  while (curr1 !== null && curr2 !== null) {
    let next1 = curr1.next;
    let next2 = curr2.next;

    curr1.next = curr2;
    curr2.next = next1;

    curr1 = next1;
    curr2 = next2;
  }

  return first;
}


```

## 💡 Question 08

> Given a singly linked list, find if the linked list is [circular](https://www.geeksforgeeks.org/circular-linked-list/amp/) or not.
>
> A linked list is called circular if it is not NULL-terminated and all nodes are connected in the form of a cycle. Below is an example of a circular linked list.
>
> <img src="https://pwskills.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fd30bbf79-b1eb-4ba4-b23e-6d3f27ccdfe5%2FUntitled.png?id=5ccbc796-7fb9-4c82-b385-f45ba589a896&table=block&spaceId=6fae2e0f-dedc-48e9-bc59-af2654c78209&width=1300&userId=&cache=v2" height="220px">
>


### 🚀 Answer

```javascript
function isCircular(head) {
  if (head === null) {
    return false;
  }

  let current = head.next;

  while (current !== null && current !== head) {
    current = current.next;
  }

  return current === head;
}
```
