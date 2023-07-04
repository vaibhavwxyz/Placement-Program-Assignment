# 01- DSA Mock Test 📕🚀

## 💡 moveZeroes

> Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the nonzero elements.
>
> Note that you must do this in-place without making a copy of the array.
>
> **Example 1:**
>
> - Input: nums = [0, 1, 0, 3, 12]
> - Output: [1, 3, 12, 0, 0]
>
> **Example 2:**
>
> - Input: nums = [0]
> - Output: [0]
>
> **Constraints:**
>
> - a. 1 <= nums.length <= 10^4
> - b. -2^31 <= nums[i] <= 2^31 - 1

### 🚀 Answer

```javascript
const moveZeroes = (nums) => {
  let p = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[p] = nums[i];
      p++;
    }
  }

  for (let i = p; i < nums.length; i++) {
    nums[i] = 0;
  }

  return nums;
};

console.log(moveZeroes([0, 0, 1]));
```

## 💡 First Unique Character in a String

> Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.
>
> **Example 1:**
>
> - Input: s = "leetcode"
> - Output: 0
>
> **Example 2:**
>
> - Input: s = "loveleetcode"
> - Output: 2
>
> **Example 3:**
>
> - Input: s = "aabb"
> - Output: -1
>
> **Constraints:**
>
> - a. 1 <= s.length <= 10^5
> - b. s consists of only lowercase English letters.

### 🚀 Answer

```javascript
function firstUniqChar(s) {
  const charCount = new Map();

  // Count the occurrences of each character
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    charCount.set(char, (charCount.get(char) || 0) + 1);
  }

  // Find the first unique character
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (charCount.get(char) === 1) {
      return i;
    }
  }

  return -1; // No unique characters found
}

// Example usage:
console.log(firstUniqChar("leetcode")); // Output: 0
console.log(firstUniqChar("loveleetcode")); // Output: 2
console.log(firstUniqChar("aabb")); // Output: -1
```

# 02- DSA Mock Test 📕🚀

## 💡 Stack

> Implement a stack using an array in JavaScript. Include the necessary methods such as push, pop, and isEmpty.

### 🚀 Answer

```javascript
class Stack {
  constructor() {
    this.stack = [];
  }

  // Add an element to the top of the stack
  push(element) {
    this.stack.push(element);
  }

  // Remove and return the top element from the stack
  pop() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.stack.pop();
  }

  // Check if the stack is empty
  isEmpty() {
    return this.stack.length === 0;
  }
}

// Usage example:
const stack = new Stack();

stack.push(10);
stack.push(20);
stack.push(30);

console.log(stack.pop()); // Output: 30
console.log(stack.pop()); // Output: 20
console.log(stack.isEmpty()); // Output: false
console.log(stack.pop()); // Output: 10
console.log(stack.isEmpty()); // Output: true
console.log(stack.pop()); // Output: Stack is empty
```

## 💡 Queue

> Implement a queue using an array in JavaScript. Include the necessary methods such as enqueue, dequeue, and isEmpty.

### 🚀 Answer

```javascript
class Queue {
  constructor() {
    this.queue = [];
  }

  // Add an element to the back of the queue
  enqueue(element) {
    this.queue.push(element);
  }

  // Remove and return the front element from the queue
  dequeue() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    return this.queue.shift();
  }

  // Check if the queue is empty
  isEmpty() {
    return this.queue.length === 0;
  }
}

// Usage example:
const queue = new Queue();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

console.log(queue.dequeue()); // Output: 10
console.log(queue.dequeue()); // Output: 20
console.log(queue.isEmpty()); // Output: false
console.log(queue.dequeue()); // Output: 30
console.log(queue.isEmpty()); // Output: true
console.log(queue.dequeue()); // Output: Queue is empty
```

# 03- Web Development Mock Test 📕🚀

## 💡 Question: Explain all the CSS positions(static, fixed, sticky, relative, absolute) with one code example each

### 🚀 Answer:

**CSS provides several positioning options for elements. Understanding these positions is essential for controlling the layout and positioning of elements on a web page. Here are the commonly used CSS positions:**

## 1. Static:

- The default position value in CSS is "static".
- Elements with a static position are positioned according to the normal flow of the document.

**Example:**

```html
<style>
  .box {
    background-color: lightblue;
    width: 200px;
    height: 200px;
  }
</style>

<div class="box">Static Position</div>
```

## 2. Fixed:

- Elements with a fixed position are positioned relative to the browser window.
- They will stay in the same position even if the page is scrolled.

**Example:**

```html
<style>
  .box {
    background-color: lightblue;
    width: 200px;
    height: 200px;
    position: fixed;
    top: 20px;
    left: 20px;
  }
</style>

<div class="box">Fixed Position</div>
```

## 3. Sticky:

- Elements with a sticky position are positioned based on the user's scroll position.
- They behave like "fixed" until a specified scroll position is reached, then they become "relative" and start scrolling with the rest of the content.

**Example:**

```html
<style>
  .box {
    background-color: lightblue;
    width: 200px;
    height: 200px;
    position: sticky;
    top: 20px;
  }
</style>

<div class="box">Sticky Position</div>
```

## 4. Relative:

- Elements with a relative position are positioned relative to their normal position.
- They can be moved using the top, right, bottom, and left properties.

**Example:**

```html
<style>
  .box {
    background-color: lightblue;
    width: 200px;
    height: 200px;
    position: relative;
    top: 20px;
    left: 20px;
  }
</style>

<div class="box">Relative Position</div>
```

## 5. Absolute:

- Elements with an absolute position are positioned relative to their nearest positioned ancestor.
- If there is no positioned ancestor, they are positioned relative to the initial containing block (usually the browser window).

**Example:**

```html
<style>
  .container {
    position: relative;
    height: 300px;
    width: 500px;
  }

  .box {
    background-color: lightblue;
    width: 200px;
    height: 200px;
    position: absolute;
    top: 20px;
    left: 20px;
  }
</style>

<div class="container">
  <div class="box">Absolute Position</div>
</div>
```

## 💡Question: Create a form with basic validation (name, email, phone number, password, age, gender, date, color picker)

### 🚀 Answer:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Form with Basic Validation</title>
    <style>
      .error {
        color: red;
      }
    </style>
  </head>
  <body>
    <h1>Form with Basic Validation</h1>

    <form id="myForm" onsubmit="validateForm(event)">
      <label for="name">Name:</label>
      <input type="text" id="name" name="name" required />
      <br />

      <label for="email">Email:</label>
      <input type="email" id="email" name="email" required />
      <br />

      <label for="phone">Phone Number:</label>
      <input type="tel" id="phone" name="phone" pattern="[0-9]{10}" required />
      <br />

      <label for="password">Password:</label>
      <input type="password" id="password" name="password" required />
      <br />

      <label for="age">Age:</label>
      <input type="number" id="age" name="age" min="18" max="99" required />
      <br />

      <label for="gender">Gender:</label>
      <select id="gender" name="gender" required>
        <option value="">Select</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </select>
      <br />

      <label for="date">Date:</label>
      <input type="date" id="date" name="date" required />
      <br />

      <label for="color">Favorite Color:</label>
      <input type="color" id="color" name="color" required />
      <br />

      <input type="submit" value="Submit" />
    </form>

    <script>
      function validateForm(event) {
        event.preventDefault();

        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var phone = document.getElementById("phone").value;
        var password = document.getElementById("password").value;
        var age = document.getElementById("age").value;
        var gender = document.getElementById("gender").value;
        var date = document.getElementById("date").value;
        var color = document.getElementById("color").value;

        // Basic validation
        if (
          name === "" ||
          email === "" ||
          phone === "" ||
          password === "" ||
          age === "" ||
          gender === "" ||
          date === "" ||
          color === ""
        ) {
          alert("Please fill in all fields.");
          return;
        }

        // Additional validation rules can be added here

        // If all validations pass, you can submit the form
        document.getElementById("myForm").submit();
      }
    </script>
  </body>
</html>
```

## 💡 Question: Explain what is execution context in detail with diagram

### 🚀 Answer:

**Execution context is an important concept in JavaScript that helps manage the execution of code. It provides an environment in which JavaScript code is executed and variables, functions, and objects are stored and accessed. Each time a function is called or a block of code is executed, a new execution context is created.**

### There are three types of execution contexts in JavaScript:

- **Global Execution Context:** The global execution context is the default and outermost context. It is created when the JavaScript code starts executing. In a browser, the global execution context represents the global scope and includes global variables, functions, and objects. It is accessible throughout the entire JavaScript code.

- **Function Execution Context:** When a function is called, a new function execution context is created. It represents the local scope of the function. The function execution context includes local variables, function arguments, and any nested functions or blocks within the function. Each function call creates a new function execution context, and when the function finishes executing, its execution context is destroyed.

- **Eval Execution Context:** The eval function in JavaScript can execute code dynamically. When the eval function is called, a new eval execution context is created. It is similar to the function execution context, but it operates within the scope where the eval function is called.

### The execution context consists of three main components:

- **Variable Environment:** The variable environment contains all the variables declared within the context, including function arguments and local variables. It also includes function declarations (hoisted functions) and the value of the this keyword.

- **Scope Chain:** The scope chain is a list of variables and functions that the current execution context has access to. It allows JavaScript to resolve variable names by searching through the scope chain until a match is found. The scope chain is created based on the lexical (static) scope of functions and the order of their nested definitions.

- **Lexical Environment:** The lexical environment is a combination of the variable environment and the reference to the outer environment. The outer environment points to the parent execution context, establishing the scope chain and allowing access to variables in the outer context.

### Diagram:

<img src="https://lh6.googleusercontent.com/ZPj2HPQrNlI1QaXznNXwcyUp8VPZdwjOuDeNz_9kbuLCpkmgkm8mkF8JzFF--jKcEkHdDPa9FRGRhAv6JHW5tRKPwZWGHf88X3SnD8Wp2i5cg1fgm52ZCvsgODiGMUmIBf8sMYv2" height="220px">

## 💡 Question: Implement a CSS grid layout to display a gallery of images in a grid format for design refer the image shown below, replace the empty boxed with actual images

### 🚀 Answer:

![image](https://github.com/vaibhavwxyz/Placement-Program-Assignment/assets/73052214/f56e5dc8-55be-4b0a-9545-4e231d26cd34)
