# Assignment 06- JavaScript 📕🚀

## Q.1 What's Constructor and Its Purpose?

A constructor is a special method in object-oriented programming languages that is used to initialize objects of a class. It is typically called when an instance (object) of a class is created. The purpose of a constructor is to set the initial state of an object, allocate memory if necessary, and perform any other necessary setup tasks.

## Q.2 Explain "this" Keyword and Its Purpose?

In JavaScript, the `this` keyword refers to the current object or context in which the code is being executed. Its value depends on how and where it is used. The purpose of the "this" keyword is to allow access to the properties and methods of the current object within the context of that object. It provides a way to refer to the object that is being operated on or accessed.

## Q.3 What's the Call, Apply, and Bind Methods, and the Difference Between Them?

**Call, apply, and bind are methods available in JavaScript to manipulate the execution context of a function.**

- The "call" method invokes a function with a specified "this" value and passes arguments individually.
- The "apply" method is similar to "call," but it accepts an array-like object as the second parameter, which is then treated as the list of arguments to be passed to the function.
- The "bind" method creates a new function with a specific "this" value and, when called, it executes the original function with the provided context and any additional arguments.
  The key difference between them is how arguments are passed:

**"Call" and "apply" execute the function immediately, while "bind" returns a new function with the bound context, allowing you to call it later.**

## Q.4 Explain OOP (Object-Oriented Programming)?

Object-Oriented Programming (OOP) is a programming paradigm that organizes code into objects, which are instances of classes. It focuses on encapsulating data and behavior together, providing a way to structure and organize complex code.

**The core principles of OOP are:**

- Encapsulation: Binding data and methods into a single unit (class/object) to hide internal details and provide a clear interface.
- Inheritance: Creating new classes by inheriting properties and methods from existing classes, allowing for code reuse and establishing hierarchical relationships.
- Polymorphism: The ability of objects of different classes to respond to the same method in different ways, based on their specific implementation.

**OOP promotes code reusability, modularity, and maintainability by providing a structured approach to programming.**

## Q.5 What's Abstraction and Its Purpose?

Abstraction is a concept in object-oriented programming that involves simplifying complex systems by breaking them down into smaller, more manageable parts. It focuses on defining the essential features and behaviors of an object while hiding the unnecessary details.

The purpose of abstraction is to provide a clear and simplified interface for working with objects. It allows programmers to think at a higher level of abstraction, reducing complexity and making code easier to understand and maintain. By hiding implementation details, abstraction also provides the flexibility to modify the underlying implementation without affecting other parts of the code.

## Q.6 What's Polymorphism, and What Is Its Purpose?

Polymorphism is a concept in object-oriented programming that allows objects of different classes to be treated as objects of a common superclass. It allows methods to be defined in the superclass and overridden in the subclasses, providing different implementations based on the specific class instance.

The purpose of polymorphism is to provide a way to write code that can work with objects of different types, as long as they adhere to a common interface or share a common superclass. It promotes code reusability, extensibility, and flexibility by allowing the same code to operate on different objects, without needing to know their specific types at compile time.

## Q.7 What's Inheritance, and What Is Its Purpose?

Inheritance is a fundamental concept in object-oriented programming where a class inherits properties and methods from another class. The class that inherits is called a subclass or derived class, and the class from which it inherits is called the superclass or base class.

The purpose of inheritance is to promote code reuse and establish hierarchical relationships between classes. It allows the subclass to inherit and extend the behavior of the superclass, adding or overriding methods as needed. This reduces redundancy, enhances modularity, and facilitates the creation of specialized classes that inherit common functionality from a shared superclass.

## Q.8 What's Encapsulation, and What Is Its Purpose?

Encapsulation is the practice of bundling data and methods together within a class, hiding the internal details and providing a controlled interface to interact with the object. It is one of the core principles of object-oriented programming.

The purpose of encapsulation is to achieve data abstraction and protect the internal state of an object from direct external access. By encapsulating data, you can ensure that it is accessed and modified only through well-defined methods, known as getters and setters, which provide controlled access and allow for validation and error handling. Encapsulation enhances data integrity, security, and code maintainability.

## Q.9 Explain Class in JavaScript.

In JavaScript, a class is a blueprint or a template for creating objects with similar properties and methods. Introduced in ECMAScript 2015 (ES6), classes provide a more structured way to define and create objects compared to traditional prototype-based inheritance.

A class definition acts as a constructor function and can include a constructor method for initializing object instances. It can also have other methods and properties defined within its body. Instances of a class are created using the "new" keyword, which calls the constructor to set up the object.

Here's an example of a class definition in JavaScript:

```javascript
class Person {
  constructor(name) {
    this.name = name;
  }

  sayHello() {
    console.log(`Hello, my name is ${this.name}.`);
  }
}

const person1 = new Person("Alice");
person1.sayHello(); // Output: Hello, my name is Alice.
```

## Q.10 What's the Super Keyword, and What Does It Do?

In JavaScript, the "super" keyword is used to call and access the parent class's properties and methods from within a subclass. It is primarily used in the constructor and methods of a subclass to invoke the corresponding behavior defined in the superclass.

By calling "super" in a subclass's constructor, you can invoke the parent class's constructor and pass any required arguments. This ensures that the superclass initializes its part of the object correctly before adding subclass-specific behavior.

Here's an example:

```javascript
Copy code
class Vehicle {
constructor(color) {
this.color = color;
}

getInfo() {
console.log(`This vehicle is ${this.color}.`);
}
}

class Car extends Vehicle {
constructor(color, brand) {
super(color); // Call superclass constructor
this.brand = brand;
}

getInfo() {
super.getInfo(); // Call superclass method
console.log(`It is a ${this.brand} car.`);
}
}

const myCar = new Car("blue", "Toyota");
myCar.getInfo();
// Output:
// This vehicle is blue.
// It is a Toyota car.
```

In the example above, the "super(color)" call in the Car constructor invokes the Vehicle constructor to set the color property. The "super.getInfo()" call in the Car's getInfo method invokes the Vehicle's getInfo method to display the color.
