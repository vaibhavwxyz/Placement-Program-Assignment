# JavaScript Answers

**Q.1 Explain Hoisting in JavaScript?**

<u>_Answer -_</u> Hoisting in JavaScript refers to the process where the interpreter appears to move declarations of functions, variables and classes to the top of their scope, prior to execution of the code. It allows us to use functions and variables before they are even declared.

Functions and variables are hoisted differently in JavaScript. If we declare a function using the function keyword and call the function before the function declaration it will give us the desired output because of hoisting. Example -

```javascript
printHello();
function printHello() {
  console.log(“Hello”);
}
```

Output: “Hello”

This function will print Hello without any error even though we are calling the function in the first line before we declare it in line no. 2.
For variables declared using var keyword if we try to access the value of the variable before declaring it, it will give us undefined. Example -

```javascript
console.log(x);
var x = 10;
```

Output: undefined

Variables that are declared using let or const can not be accessed before initialization because of the temporal dead zone.

**Q.2 Explain Temporal Dead Zone?**

<u>_Answer -_</u> The temporal dead zone (TDZ) is a term used in JavaScript to describe a behavior related to the hoisting of variables declared with the `let` and `const` keywords. When variables are declared using `let` or `const`, they are hoisted to the top of their respective scope, but unlike variables declared with `var`, they are not initialized with a default value of undefined during the hoisting process.

The temporal dead zone refers to the period between the start of the scope and the point at which a variable is declared with `let` or `const` where the variable exists, but accessing it results in a runtime error. In other words, variables in the temporal dead zone cannot be accessed or assigned any value before they are declared.

```javascript
console.log(myVariable);
let myVariable = 10;
```

In this example, the variable `myVariable` is accessed before it is declared. Since it's declared using `let`, it is hoisted to the top of the scope but remains uninitialized until the declaration statement. When the code tries to access the variable before its declaration, it throws a `ReferenceError` because it is still in the _temporal dead zone_.

The temporal dead zone helps catch potential issues with variable usage by enforcing proper declaration and avoiding the use of uninitialized variables. It encourages developers to declare variables before they are used, promoting better code quality and reducing accidental mistakes.

**Q.3 Difference between var & let?**

<u>_Answer -_</u> The main difference between `var` and `let` in JavaScript lies in their scoping behavior and how they are hoisted.

- Scoping Behavior:

  - `var`: Variables declared with `var` have function-level scope. This means that they are accessible throughout the entire function in which they are declared, regardless of block scope (e.g., if statements or loops).

  - `let`: Variables declared with `let` have block-level scope. They are limited to the block in which they are defined, such as within an if statement or loop. They are not accessible outside of the block.

- Hoisting:

  - `var`: Variables declared with `var` are hoisted to the top of their scope and are initialized with the value `undefined`. This means we can access a `var` variable before its declaration, but it will have an initial value of `undefined` until it is explicitly assigned.

  - `let`: Variables declared with `let` are also hoisted to the top of their scope but remain uninitialized (in the temporal dead zone) until the point of declaration. Accessing a `let` variable before its declaration results in a `ReferenceError`.

- Re-declaration:

  - `var`: Variables declared with `var` can be re-declared within the same scope without throwing an error. The subsequent declarations will override the previous ones.

  - `let`: Variables declared with `let` cannot be re-declared within the same scope. If we attempt to re-declare a `let` variable, it will throw a `SyntaxError`.

- Global scope behavior:

  - `var`: Variables declared with `var` outside of any function have global scope, meaning they are accessible throughout the entire JavaScript environment.

  - `let`: Variables declared with `let` outside of any function also have global scope but are not added as properties to the global object (e.g., window in browsers). This means they are not as easily accessible as `var` variables in some cases.

In general, it is recommended to use `let` and `const` instead of `var` because they provide better scoping and help avoid common issues associated with `var`, such as accidental re-declarations and hoisting-related bugs.

**Q.4 What are the major features introduced in ECMAScript 6?**

<u>_Answer -_</u> ECMAScript 6 or ES6, introduced several significant features and enhancements to JavaScript. Some of the major features introduced in ES6 include:

- `let` and `const`: ES6 introduced the `let` and `const` keywords for declaring variables with block-level scope, as opposed to function-level scope used by `var`. let allows variable re-assignment, while `const` is used for declaring constants that cannot be re-assigned.

- Arrow functions: Arrow functions provide a concise syntax for writing function expressions. They have implicit `this` binding and do not create their own `this` context, making them useful for avoiding common pitfalls of `this` binding.

- Classes: ES6 introduced `class` syntax, which provides a more straightforward and familiar way to define classes and create objects based on those classes. Classes in ES6 are syntactic sugar over JavaScript's prototype-based inheritance.

- Template literals: Template literals allow the embedding of expressions and multi-line strings in JavaScript by using backticks (``) as delimiters. They support placeholders for variable interpolation and provide improved readability for complex string concatenation.

- Destructuring assignment: Destructuring assignment allows extracting values from arrays or objects and assigning them to variables in a concise way. It provides a convenient syntax for working with complex data structures and simplifies variable assignment and extraction.

- Spread and rest operators: The spread operator (...) allows the expansion of arrays or iterable objects into multiple elements. The rest parameter syntax also uses the `...` operator to represent multiple function arguments as an array, simplifying variadic function handling.

- Modules: ES6 introduced a standardized module system, allowing developers to define and import/export modules in their JavaScript code. Modules provide better organization, encapsulation, and dependency management for larger projects.

- Promises: Promises provide a more structured approach to handling asynchronous operations. They simplify asynchronous programming by representing a value that may be available in the future, allowing chaining of operations and handling of success or error cases.

These are just a few of the major features introduced in ECMAScript 6. ES6 brought significant improvements to JavaScript, enhancing its syntax, readability, and functionality, and paved the way for subsequent versions of ECMAScript.

**Q.5 What is the difference between `let` and `const`?**

<u>_Answer -_</u> In JavaScript, `let` and `const` are used for variable declaration, but they have different behaviors and purposes.

`let` is used to declare mutable variables. These variables can be reassigned with new values, and they are _block-scoped_, meaning they are only accessible within the block of code where they are defined or declared. `let` variables have a limited lifetime and are not accessible before their declaration in the code.

```javascript
let x = 5;
x = 10; // Valid - reassigning the value
```

On the other hand, `const` is used to declare immutable variables. Once a value is assigned to a `const` variable, it cannot be reassigned. `const` variables are also block-scoped, like `let` variables.

```javascript
const PI = 3.14159;
PI = 3; // Invalid - cannot reassign the value
```

`const` is commonly used to declare constants or variables that should not be modified.

In summary, `let` is used to declare mutable variables that can be reassigned, while `const` is used to declare immutable variables that cannot be reassigned once assigned. Both `let` and `const` are block-scoped.

**Q.6 What is template literals in ES6 and how do you use them?**

<u>_Answer -_</u> Template literals, introduced in ECMAScript 2015 or ES6, provide a convenient way to work with strings in JavaScript. They are denoted by backticks (`) instead of single or double quotes.

Template literals offer several features -

- String Interpolation: Template literals allow us to embed expressions within the string using `${}`. The expressions inside `${}` are evaluated, and their values are inserted into the resulting string.

```javascript
const name = "Sayantan";
const greeting = `Hello, ${name}!`;
console.log(greeting); // Output: Hello, Sayantan!
```

- Multiline Strings: Template literals enable multiline strings without using escape characters or concatenation. we can simply write multiline text within the backticks, and it will be preserved as-is, including line breaks.

```javascript
const multiLineString = `
This is a
multiline
string.`;
console.log(multiLineString);
/*
Output:
This is a
multiline
string.
*/
```

- Expression Evaluation: Within template literals, we can also include JavaScript expressions or function calls. These expressions are evaluated, and the results are incorporated into the string.

```javascript
const a = 5;
const b = 3;
const sum = `${a} + ${b} = ${a + b}`;
console.log(sum); // Output: 5 + 3 = 8
```

**Q.7 What’s difference between map & forEach?**

<u>_Answer -_</u> Both `map()` and `forEach()` are array methods in JavaScript used to iterate over arrays. However, they have some differences in terms of functionality and return values -

- `forEach()`:

  - The `forEach()` method is used to iterate over each element of an array. It executes a provided callback function once for each element in the array in ascending order. The callback function can be used to perform some action on each element, but it does not return a new array. The return value of `forEach()` is `undefined`.

```javascript
const numbers = [1, 2, 3, 4, 5];
numbers.forEach((num) => {
  console.log(num);
});
// Output:
// 1
// 2
// 3
// 4
// 5
```

- `map()`:

  - The `map()` method is used to iterate over each element of an array and create a new array based on the result of the callback function. It executes the provided callback function once for each element in the array, and the returned values from the callback function are used to create a new array with the same length. The return value of `map()` is a new array containing the values returned by the callback function.

```javascript
const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map((num) => {
  return num * num;
});
console.log(squaredNumbers);
// Output: [1, 4, 9, 16, 25]
```

`forEach()` is used for iterating over an array and performing actions on each element without returning a new array. On the other hand, `map()` is used for iterating over an array, applying a transformation to each element, and creating a new array with the transformed values.

**Q.8 How can you destructure objects and arrays in ES6?**

<u>_Answer -_</u> object and array destructuring provide a concise syntax to extract values from objects and arrays and assign them to variables. Here's how We can destructure objects and arrays -

- _Objects Destructuring_ -
  We can destructure objects by creating variables that match the property names of the object. The syntax uses curly braces ({}) to indicate object destructuring.

```javascript
const person = {
  name: "Sayantan",
  age: 24,
  city: "Kolkata",
};

// Object Destructuring
const { name, age, city } = person;

console.log(name); // Output: Sayantan
console.log(age); // Output: 24
console.log(city); // Output: Kolkata
```

We can also assign new variable names while destructuring, for example -

```javascript
const { name: personName, age: personAge, city: personCity } = person;

console.log(personName); // Output: Sayantan
console.log(personAge); // Output: 24
console.log(personCity); // Output: Kolkata
```

- _Array Destructuring_ -
  Array destructuring allows us to extract values from an array by using square brackets ([]).

```javascript
const numbers = [1, 2, 3, 4, 5];

// Array Destructuring
const [first, second, third] = numbers;

console.log(first); // Output: 1
console.log(second); // Output: 2
console.log(third); // Output: 3
```

We can also ignore specific elements in the array by using commas -

```javascript
const [first, , third] = numbers;

console.log(first); // Output: 1
console.log(third); // Output: 3
```

We can also use the rest operator `...` to capture remaining elements of an array -

```javascript
const [first, ...rest] = numbers;

console.log(first); // Output: 1
console.log(rest); // Output: [2, 3, 4, 5]
```

Destructuring is a powerful feature in ES6 that simplifies the process of extracting values from objects and arrays, making the code more concise and readable.

**Q.9 How can you define default parameter values in ES6 functions?**

<u>_Answer -_</u> In ES6, we can define default parameter values for function parameters. Default parameter values allow we to specify a default value that will be used if an argument is not provided or is explicitly set to `undefined` when calling the function. Here's how us can define default parameter values -

```javascript
function greet(name = "Anonymous") {
  console.log(`Hello, ${name}!`);
}

greet(); // Output: Hello, Anonymous!
greet("Sayantan"); // Output: Hello, Sayantan!
```

In the above example, the `name` parameter in the `greet` function has a default value of `'Anonymous'`. If no argument is provided or if `undefined` is explicitly passed for `name`, the default value `'Anonymous'` will be used.

```javascript
function addNumbers(a, b = 0, c = 0) {
  console.log(a + b + c);
}

addNumbers(2, 3, 4); // Output: 9
addNumbers(5, 6); // Output: 11
addNumbers(7); // Output: 7
```

In the above example, the `addNumbers` function has three parameters: `a`, `b`, and `c`. The parameters `b` and `c` have default values of `0`. If these parameters are not provided or explicitly set to `undefined`, the default values of `0` will be used.

Default parameter values provide a convenient way to define fallback values for function parameters and handle cases where arguments are missing or not provided.

**Q.10 What is the purpose of the spread operator (...) in ES6?**

<u>_Answer -_</u> In ES6, the spread operator `...` has several purposes and can be used in different contexts -

- Array Spread - The spread operator can be used to expand an array into individual elements. It allows us to create a new array or pass array elements as arguments to a function.

```javascript
const numbers = [1, 2, 3];
const newArray = [...numbers, 4, 5];
console.log(newArray);
// Output: [1, 2, 3, 4, 5]

function sum(a, b, c) {
  return a + b + c;
}

console.log(sum(...numbers));
// Output: 6
```

- Object Spread - The spread operator can also be used to create a new object by copying properties from an existing object or combining properties from multiple objects.

```javascript
const obj1 = { x: 1, y: 2 };
const obj2 = { z: 3 };

const mergedObj = { ...obj1, ...obj2 };
console.log(mergedObj);
// Output: { x: 1, y: 2, z: 3 }
```

- Function Spread - The spread operator can be used to pass multiple arguments to a function, especially when the arguments are stored in an array.

```javascript
function sum(a, b, c) {
  return a + b + c;
}

const numbers = [1, 2, 3];
console.log(sum(...numbers));
// Output: 6
```

- Rest Parameters - The spread operator can be used as part of a function declaration to collect multiple arguments into an array called the "rest parameter."

```javascript
function sum(...numbers) {
  let total = 0;
  for (const number of numbers) {
    total += number;
  }
  return total;
}

console.log(sum(1, 2, 3, 4, 5));
// Output: 15
```

The spread operator in ES6 is a versatile feature that allows for convenient array manipulation, object merging, and function argument handling. It helps simplify code and provides a concise way to work with arrays and objects.
