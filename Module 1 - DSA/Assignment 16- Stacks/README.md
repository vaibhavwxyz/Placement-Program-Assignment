# Assignment 16- Stacks

## 💡 Question 01

> Given an array, for each element find the value of the nearest element to the right which is having a frequency greater than that of the current element. If there does not exist an answer for a position, then make the value ‘-1’.
>
> **Examples:**
>
> ```
> Input: a[] = [1, 1, 2, 3, 4, 2, 1]
> Output : [-1, -1, 1, 2, 2, 1, -1]
>
> Explanation:
> Given array a[] = [1, 1, 2, 3, 4, 2, 1]
> Frequency of each element is: 3, 3, 2, 1, 1, 2, 3
>
> Lets calls Next Greater Frequency element as NGF
>
> 1. For element a[0] = 1 which has a frequency = 3,
>    As it has frequency of 3 and no other next element
>    has frequency more than 3 so '-1'
> 2. For element a[1] = 1 it will be -1 same logic
>    like a[0]
> 3. For element a[2] = 2 which has frequency = 2,
>    NGF element is 1 at position = 6 with frequency
>    of 3 > 2
> 4. For element a[3] = 3 which has frequency = 1,
>    NGF element is 2 at position = 5 with frequency
>    of 2 > 1
> 5. For element a[4] = 4 which has frequency = 1,
>    NGF element is 2 at position = 5 with frequency
>    of 2 > 1
> 6. For element a[5] = 2 which has frequency = 2,
>    NGF element is 1 at position = 6 with frequency
>    of 3 > 2
> 7. For element a[6] = 1 there is no element to its
>    right, hence -1
> ```
>
> ```
> Input : a[] = [1, 1, 1, 2, 2, 2, 2, 11, 3, 3]
> Output : [2, 2, 2, -1, -1, -1, -1, 3, -1, -1]
> ```

### 🚀 Answer

```javascript
function findNearestGreaterFrequency(arr) {
  const frequencies = {};
  const result = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    const current = arr[i];
    frequencies[current] = (frequencies[current] || 0) + 1;

    let found = false;
    for (let j = i + 1; j < arr.length; j++) {
      if (frequencies[arr[j]] > frequencies[current]) {
        result.unshift(arr[j]);
        found = true;
        break;
      }
    }

    if (!found) {
      result.unshift(-1);
    }
  }

  return result;
}
```

## 💡 Question 02

> Given a stack of integers, sort it in ascending order using another temporary stack.
>
> **Examples:**
>
> ```
> Input : [34, 3, 31, 98, 92, 23]
> Output : [3, 23, 31, 34, 92, 98]
>
> Input : [3, 5, 1, 4, 2, 8]
> Output : [1, 2, 3, 4, 5, 8]
> ```

### 🚀 Answer

```javascript
function sortStack(stack) {
  const tempStack = [];

  while (stack.length > 0) {
    const temp = stack.pop();

    while (tempStack.length > 0 && tempStack[tempStack.length - 1] > temp) {
      stack.push(tempStack.pop());
    }

    tempStack.push(temp);
  }

  return tempStack;
}
```

## 💡 Question 03

> Given a stack with **push()**, **pop()**, and **empty()** operations, The task is to delete the **middle** element \*\*\*\*of it without using any additional data structure.
>
> Input  : Stack[] = [1, 2, 3, 4, 5]
> Output : Stack[] = [1, 2, 4, 5]
>
> Input  : Stack[] = [1, 2, 3, 4, 5, 6]
> Output : Stack[] = [1, 2, 4, 5, 6]

### 🚀 Answer

```javascript
function deleteMiddleElement(stack) {
  if (stack.length === 0) {
    return;
  }

  const middleIndex = Math.floor(stack.length / 2);

  if (stack.length % 2 === 0) {
    stack.splice(middleIndex - 1, 1);
  } else {
    stack.splice(middleIndex, 1);
  }
}
```

## 💡 Question 04

> Given a Queue consisting of first **n** natural numbers (in random order). The task is to check whether the given Queue elements can be arranged in increasing order in another Queue using a stack. The operation allowed are:
>
> 1. Push and pop elements from the stack
> 2. Pop (Or Dequeue) from the given Queue.
> 3. Push (Or Enqueue) in the another Queue.
>
> **Examples :**
>
> Input : Queue[] = { 5, 1, 2, 3, 4 }
> Output : Yes
>
> Pop the first element of the given Queue
> i.e 5. Push 5 into the stack.
> Now, pop all the elements of the given Queue and push them to second Queue.
> Now, pop element 5 in the stack and push it to the second Queue.
>
> Input : Queue[] = { 5, 1, 2, 6, 3, 4 }
> Output : No
>
> Push 5 to stack.
> Pop 1, 2 from given Queue and push it to another Queue.
> Pop 6 from given Queue and push to stack.
> Pop 3, 4 from given Queue and push to second Queue.
>
> Now, from using any of above operation, we cannot push 5 into the second Queue because it is below the 6 in the stack.

### 🚀 Answer

```javascript
function checkQueueOrder(queue) {
  const stack = [];
  let expected = 1;

  while (queue.length > 0) {
    if (queue[0] === expected) {
      queue.shift();
      expected++;
    } else if (stack.length > 0 && stack[stack.length - 1] === expected) {
      stack.pop();
      expected++;
    } else {
      stack.push(queue.shift());
    }
  }

  while (stack.length > 0 && stack[stack.length - 1] === expected) {
    stack.pop();
    expected++;
  }

  return stack.length === 0;
}
```

## 💡 Question 05

> Given a number , write a program to reverse this number using stack.
>
> **Examples:**
>
> ```
> Input : 365
> Output : 563
>
> Input : 6899
> Output : 9986
> ```

### 🚀 Answer

```javascript
function reverseNumber(number) {
  const stack = [];
  const digits = number.toString().split("");

  for (let digit of digits) {
    stack.push(digit);
  }

  let reversedNumber = "";

  while (stack.length > 0) {
    reversedNumber += stack.pop();
  }

  return parseInt(reversedNumber);
}
```

## 💡 Question 06

> Given an integer k and a **[queue](https://www.geeksforgeeks.org/queue-data-structure/)** of integers, The task is to reverse the order of the first **k** elements of the queue, leaving the other elements in the same relative order.
>
> Only following standard operations are allowed on queue.
>
> - **enqueue(x) :** Add an item x to rear of queue
> - **dequeue() :** Remove an item from front of queue
> - **size() :** Returns number of elements in queue.
> - **front() :** Finds front item

### 🚀 Answer

```javascript
function reverseKElements(queue, k) {
  const stack = [];

  for (let i = 0; i < k; i++) {
    stack.push(queue.shift());
  }

  while (stack.length > 0) {
    queue.push(stack.pop());
  }

  for (let i = 0; i < queue.length - k; i++) {
    queue.push(queue.shift());
  }
}
```

## 💡 Question 07

> Given a sequence of n strings, the task is to check if any two similar words come together and then destroy each other then print the number of words left in the sequence after this pairwise destruction.
>
> **Examples:**
>
> Input : ab aa aa bcd ab
> Output : 3
>
> _As aa, aa destroys each other so,_ > _ab bcd ab is the new sequence._
>
> Input :  tom jerry jerry tom
> Output : 0
>
> _As first both jerry will destroy each other._ > _Then sequence will be tom, tom they will also destroy_ > _each other. So, the final sequence doesn’t contain any_ > _word._

### 🚀 Answer

```javascript
function countRemainingWords(sequence) {
  const stack = [];

  for (let word of sequence) {
    if (stack.length > 0 && stack[stack.length - 1] === word) {
      stack.pop();
    } else {
      stack.push(word);
    }
  }

  return stack.length;
}
```

## 💡 Question 08

> Given an array of integers, the task is to find the maximum absolute difference between the nearest left and the right smaller element of every element in the array.
>
> **Note:** If there is no smaller element on right side or left side of any element then we take zero as the smaller element. For example for the leftmost element, the nearest smaller element on the left side is considered as 0. Similarly, for rightmost elements, the smaller element on the right side is considered as 0.
>
> **Examples:**
>
> ```
> Input : arr[] = {2, 1, 8}
> Output : 1
> Left smaller  LS[] {0, 0, 1}
> Right smaller RS[] {1, 0, 0}
> Maximum Diff of abs(LS[i] - RS[i]) = 1
>
> Input  : arr[] = {2, 4, 8, 7, 7, 9, 3}
> Output : 4
> Left smaller   LS[] = {0, 2, 4, 4, 4, 7, 2}
> Right smaller  RS[] = {0, 3, 7, 3, 3, 3, 0}
> Maximum Diff of abs(LS[i] - RS[i]) = 7 - 3 = 4
>
> Input : arr[] = {5, 1, 9, 2, 5, 1, 7}
> Output : 1
> ```

### 🚀 Answer

```javascript
function maxAbsoluteDifference(arr) {
  const leftSmaller = [];
  const rightSmaller = [];
  const n = arr.length;

  for (let i = 0; i < n; i++) {
    leftSmaller[i] = 0;
    rightSmaller[i] = 0;
  }

  const stack = [];

  for (let i = 0; i < n; i++) {
    while (stack.length > 0 && arr[i] <= arr[stack[stack.length - 1]]) {
      stack.pop();
    }

    if (stack.length > 0) {
      leftSmaller[i] = arr[stack[stack.length - 1]];
    }

    stack.push(i);
  }

  while (stack.length > 0) {
    stack.pop();
  }

  for (let i = n - 1; i >= 0; i--) {
    while (stack.length > 0 && arr[i] <= arr[stack[stack.length - 1]]) {
      stack.pop();
    }

    if (stack.length > 0) {
      rightSmaller[i] = arr[stack[stack.length - 1]];
    }

    stack.push(i);
  }

  let maxDiff = -1;

  for (let i = 0; i < n; i++) {
    const diff = Math.abs(leftSmaller[i] - rightSmaller[i]);
    maxDiff = Math.max(maxDiff, diff);
  }

  return maxDiff;
}
```
