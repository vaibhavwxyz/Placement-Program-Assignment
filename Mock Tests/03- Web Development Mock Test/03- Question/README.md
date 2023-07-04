## Explain what is execution context in detail with diagram

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
