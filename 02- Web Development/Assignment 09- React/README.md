## Assignment 09- React

## 💡 Q.1 What are hooks in react? how to identify hooks?

### 🚀 Answer

In React, hooks are functions that allow us to use state and other React features in functional components. They were introduced in React version 16.8 as a way to write reusable and more concise code compared to using class components.

Hooks provide a way to "hook into" React's lifecycle and state management systems, enabling us to manage state, perform side effects, and access other React features within functional components. They are identified by the naming convention: use followed by a capitalized word. There are several built-in hooks provided by React, such as useState, useEffect, useContext etc.

## 💡 Q.2 Explain useState Hook & what can you achieve with it?

### 🚀 Answer

The useState hook is a built-in hook in React that allows functional components to have state. It provides a way to add and manage state variables in a simpler and more concise manner compared to using class components. The useState hook takes an initial value as its argument and returns an array with two elements: the current state value and a function to update the state value.

With the useState hook, we can achieve the following:

- **State management**: The useState hook allows us to add and manage state within functional components, enabling us to store and update data that affects the component's behavior and rendering.

- **Interactive UI**: By using state variables with useState, we can create interactive user interfaces that respond to user actions. For example, we can update the displayed content, show or hide elements, or change the styling based on the state.

- **Re-rendering**: useState triggers re-rendering of the component whenever the state is updated. This ensures that the UI reflects the current state and provides a seamless way to handle dynamic changes in our application.

## 💡 Q.3 How to pass data from one component to another component?

### 🚀 Answer

We can pass data from one component to another in React using props or context. Props are used to pass data from a parent component to its child component, while context allows for sharing data across components without the need for explicit prop passing.

## 💡 Q.4 What is the significance of the "key" prop in React lists, and why is it important to use it correctly?

### 🚀 Answer

The "key" prop in React lists is used to uniquely identify each item in the list. It is important to use it correctly because it helps React efficiently update and render the list by identifying changes, preventing state issues, and maintaining stable component identity across re-renders. Proper use of the "key" prop improves performance and ensures the integrity of component state.

## 💡 Q.5 What is the significance of using "setState" instead of modifying state directly in React?

### 🚀 Answer

Using `setState` instead of modifying state directly in React is significant because it ensures proper component rendering, allows for batched updates to improve performance, maintains state immutability for predictability and optimizations, and triggers necessary lifecycle methods for handling updates and side effects.

## 💡 Q.6 Explain the concept of React fragments and when you should use them?

### 🚀 Answer

React fragments are a feature that allows us to group multiple elements together without adding extra HTML elements to the DOM. We use `<>` as the opening tag of react fragment and `</>` as closing tag.

We should use fragments when we want to avoid unnecessary wrapper elements, return multiple elements from a component, or improve performance by reducing the number of DOM nodes. Fragments provide a cleaner and more efficient way to structure our components and maintain a concise and logical JSX syntax.

## 💡 Q.7 How do you handle conditional rendering in React?

### 🚀 Answer

In React, conditional rendering refers to the process of selectively rendering components or elements based on certain conditions. There are multiple approaches to handle conditional rendering in React:

- **Using if statements**: We can use traditional JavaScript if statements or ternary operators within the JSX to conditionally render components or elements. For example:

```jsx
const MyComponent = ({ isLoggedIn }) => {
  if (isLoggedIn) {
    return <UserDashboard />;
  } else {
    return <LoginScreen />;
  }
};
```

- **Using the && operator**: We can use the `&&` operator to conditionally render elements. If the condition is true, the following element is rendered; otherwise, nothing is rendered. For example:

```jsx
const MyComponent = ({ isLoggedIn }) => {
  return (
    <div>
      {isLoggedIn && <UserDashboard />}
      {!isLoggedIn && <LoginScreen />}
    </div>
  );
};
```

- **Using a variable or state**: We can use a variable or state to hold the condition and render components accordingly. We can update the variable or state based on certain events or user interactions. For example:

```jsx
const MyComponent = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return <div>{isLoggedIn ? <UserDashboard /> : <LoginScreen />}</div>;
};
```

These are some of the common approaches to handle conditional rendering in React. The specific approach we choose depends on the complexity of our conditions and the specific requirements of our application.

## 💡 Q.8 Create a Simple Todo Web App with following features Using React :

- An input button where users can type their tasks.
- On clicking the submit button, the entered task should be displayed in the UI.
- The UI layout should resemble the image provided.

### 🚀 Answer

**To see project in action, visit [https://todo-by-vaibhav-shinde.netlify.app/](https://todo-by-vaibhav-shinde.netlify.app/)**

## 💡 Q.9 Expand the existing todo web app with two additional functionalities:

1. On clicking the "Update Status" button:
   - Update the status of the task.
2. On clicking the "Remove Todo" button:
   - Remove the selected todo from the UI.
   - Ensure that the deleted todo is no longer visible in the todo list.

### 🚀 Answer

**To see project in action, visit [https://todo-by-vaibhav-shinde.netlify.app/](https://todo-by-vaibhav-shinde.netlify.app/)**

## 💡 Q.10 Build Calculator Web app using React

### 🚀 Answer

**To see project in action, visit [https://calculator-by-vaibhav-shinde.netlify.app/](https://calculator-by-vaibhav-shinde.netlify.app/)**
