# Assignment 13- Linked List

## 💡 Question 01

> Given two linked list of the same size, the task is to create a new linked list using those linked lists. The condition is that the greater node among both linked list will be added to the new linked list.
> 
> **Examples:**
>
> ```
> Input: list1 = 5->2->3->8
> list2 = 1->7->4->5
> Output: New list = 5->7->4->8
> 
> Input:list1 = 2->8->9->3
> list2 = 5->3->6->4
> Output: New list = 5->8->9->4
> ```

### 🚀 Answer

```javascript
function createNewList(list1, list2) {
  if (!list1 || !list2) {
    return null;
  }

  let newList = null;
  let newListTail = null;

  let current1 = list1;
  let current2 = list2;

  while (current1 !== null && current2 !== null) {
    let newNode;

    if (current1.data >= current2.data) {
      newNode = new Node(current1.data);
      current1 = current1.next;
    } else {
      newNode = new Node(current2.data);
      current2 = current2.next;
    }

    if (newList === null) {
      newList = newNode;
      newListTail = newNode;
    } else {
      newListTail.next = newNode;
      newListTail = newListTail.next;
    }
  }

  if (current1 !== null) {
    newListTail.next = current1;
  }

  if (current2 !== null) {
    newListTail.next = current2;
  }

  return newList;
}

```

## 💡 Question 02

> Write a function that takes a list sorted in non-decreasing order and deletes any duplicate nodes from the list. The list should only be traversed once.
> 
> For example if the linked list is 11->11->11->21->43->43->60 then removeDuplicates() should convert the list to 11->21->43->60.
> 
> **Example 1:**
> 
> ```
> Input:
> LinkedList: 
> 11->11->11->21->43->43->60
> Output:
> 11->21->43->60
> ```
> 
> **Example 2:**
> 
> ```
> Input:
> LinkedList: 
> 10->12->12->25->25->25->34
> Output:
> 10->12->25->34
> ```

### 🚀 Answer

```javascript
function removeDuplicates(head) {
  if (head === null || head.next === null) {
    return head;
  }

  let current = head;

  while (current !== null && current.next !== null) {
    if (current.data === current.next.data) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }

  return head;
}

```

## 💡 Question 03

> Given a linked list of size **N**. The task is to reverse every **k** nodes (where k is an input to the function) in the linked list. If the number of nodes is not a multiple of *k* then left-out nodes, in the end, should be considered as a group and must be reversed (See Example 2 for clarification).
> 
> **Example 1:**
> 
> ```
> Input:
> LinkedList: 1->2->2->4->5->6->7->8
> K = 4
> Output:4 2 2 1 8 7 6 5
> Explanation:
> The first 4 elements 1,2,2,4 are reversed first
> and then the next 4 elements 5,6,7,8. Hence, the
> resultant linked list is 4->2->2->1->8->7->6->5.
> 
> ```
> 
> **Example 2:**
> 
> ```
> Input:
> LinkedList: 1->2->3->4->5
> K = 3
> Output:3 2 1 5 4
> Explanation:
> The first 3 elements are 1,2,3 are reversed
> first and then elements 4,5 are reversed.Hence,
> the resultant linked list is 3->2->1->5->4.
> ```

### 🚀 Answer

```javascript
function reverseInGroups(head, k) {
  if (head === null || head.next === null) {
    return head;
  }

  let current = head;
  let next = null;
  let prev = null;
  let count = 0;

  while (count < k && current !== null) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
    count++;
  }

  if (next !== null) {
    head.next = reverseInGroups(next, k);
  }

  return prev;
}

```

## 💡 Question 04

> Given a linked list, write a function to reverse every alternate k nodes (where k is an input to the function) in an efficient way. Give the complexity of your algorithm.
> 
> **Example:**
> 
> ```
> Inputs:   1->2->3->4->5->6->7->8->9->NULL and k = 3
> Output:   3->2->1->4->5->6->9->8->7->NULL.
> ```

### 🚀 Answer

```javascript
function reverseAlternateKNodes(head, k) {
  if (head === null || head.next === null) {
    return head;
  }

  let current = head;
  let next = null;
  let prev = null;
  let count = 0;

  while (count < k && current !== null) {
    next = current.next;

    if (count % 2 === 0) {
      current.next = prev;
    }

    prev = current;
    current = next;
    count++;
  }

  if (head.next !== null) {
    head.next = reverseAlternateKNodes(current, k);
  }

  return prev;
}

```

## 💡 Question 05

> Given a linked list and a key to be deleted. Delete last occurrence of key from linked. The list may have duplicates.
> 
> **Examples**:
> ```
> Input:   1->2->3->5->2->10, key = 2
> Output:  1->2->3->5->10
> ```

### 🚀 Answer

```javascript
function deleteLastOccurrence(head, key) {
  if (head === null) {
    return null;
  }

  let lastOccurrence = null;
  let current = head;

  while (current !== null) {
    if (current.data === key) {
      lastOccurrence = current;
    }
    current = current.next;
  }

  if (lastOccurrence === null) {
    return head;
  }

  if (lastOccurrence === head) {
    return head.next;
  }

  current = head;

  while (current.next !== lastOccurrence) {
    current = current.next;
  }

  current.next = lastOccurrence.next;

  return head;
}

```

## 💡 Question 06

> Given two sorted linked lists consisting of **N** and **M** nodes respectively. The task is to merge both of the lists (in place) and return the head of the merged list.
> 
> **Examples:**
> 
> Input: a: 5->10->15, b: 2->3->20
> Output: 2->3->5->10->15->20
> Input: a: 1->1, b: 2->4
> Output: 1->1->2->4

### 🚀 Answer

```javascript
function mergeSortedLists(a, b) {
  if (a === null) {
    return b;
  }

  if (b === null) {
    return a;
  }

  let result;

  if (a.data <= b.data) {
    result = a;
    result.next = mergeSortedLists(a.next, b);
  } else {
    result = b;
    result.next = mergeSortedLists(a, b.next);
  }

  return result;
}

```

## 💡 Question 07

> Given a **Doubly Linked List**, the task is to reverse the given Doubly Linked List.
> 
> **Example:**
> ```
> Original Linked list 10 8 4 2
> Reversed Linked list 2 4 8 10
> ```

### 🚀 Answer

```javascript
function reverseDoublyLinkedList(head) {
  if (head === null || head.next === null) {
    return head;
  }

  let current = head;
  let temp = null;

  while (current !== null) {
    temp = current.prev;
    current.prev = current.next;
    current.next = temp;
    current = current.prev;
  }

  if (temp !== null) {
    head = temp.prev;
  }

  return head;
}

```

## 💡 Question 08

> Given a doubly linked list and a position. The task is to delete a node from given position in a doubly linked list.
> 
> **Example 1:**
> 
> ```
> Input:
> LinkedList = 1 <--> 3 <--> 4
> x = 3
> Output:1 3
> Explanation:After deleting the node at
> position 3 (position starts from 1),
> the linked list will be now as 1->3.
> 
> ```
> 
> **Example 2:**
> 
> ```
> Input:
> LinkedList = 1 <--> 5 <--> 2 <--> 9
> x = 1
> Output:5 2 9
> ```

### 🚀 Answer

```javascript
function deleteNodeAtPosition(head, position) {
  if (head === null) {
    return null;
  }

  if (position === 1) {
    head = head.next;

    if (head !== null) {
      head.prev = null;
    }

    return head;
  }

  let current = head;
  let count = 1;

  while (current !== null && count < position) {
    current = current.next;
    count++;
  }

  if (current === null) {
    return head;
  }

  if (current.next !== null) {
    current.next.prev = current.prev;
  }

  if (current.prev !== null) {
    current.prev.next = current.next;
  }

  return head;
}

```
