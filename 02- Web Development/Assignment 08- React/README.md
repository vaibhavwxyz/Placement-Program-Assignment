## 💡 Q.1 React is a JavaScript library for building user interfaces. It allows developers to create reusable UI components and efficiently update and render them when the data changes. React follows a declarative approach, where developers describe how the UI should look based on the current state, and React takes care of updating the actual DOM efficiently.

**Pros of React:**

- **Virtual DOM:** React uses a Virtual DOM, which is an in-memory representation of the actual DOM. It allows React to perform efficient updates by minimizing direct manipulations of the real DOM.
- **Component-Based:** React promotes a component-based architecture, making it easier to reuse and maintain UI code.
- **One-Way Data Flow:** React follows a unidirectional data flow, making it easier to track and understand how data changes in the application.
- **React Native:** React can be used to build native mobile applications using React Native, sharing code between web and mobile platforms.
- **Large Ecosystem:** React has a vast ecosystem of libraries, tools, and community support, making it easier to find solutions, resources, and third-party integrations.

**Cons of React:**

- **Steep Learning Curve:** React has a learning curve, especially for developers who are new to component-based architectures or functional programming concepts.
- **Boilerplate Code:** React requires additional tooling and setup, which can sometimes lead to more boilerplate code compared to traditional JavaScript.
- **Performance Optimization:** Although React performs well out of the box, optimizing performance for complex applications may require additional effort and knowledge.

## 💡 Q.2 The Virtual DOM is a concept in React that represents a lightweight copy of the actual DOM. It is a JavaScript object that mirrors the structure of the real DOM but is detached from the browser's rendering engine. React uses the Virtual DOM to perform efficient updates and reconciliation.

When changes occur in the application's state, React creates a new Virtual DOM tree by diffing it with the previous version. This process is called reconciliation. React then efficiently updates only the necessary parts of the actual DOM to reflect the changes.

The Virtual DOM allows React to optimize performance by reducing direct manipulations of the real DOM. Instead of updating the entire DOM tree, React identifies the minimal set of changes required and applies them in an optimized manner.

## 💡 Q.3 The main difference between the Virtual DOM and the Real DOM is how they handle updates.

**Virtual DOM:**

- The Virtual DOM is an in-memory representation of the actual DOM.
- Changes are first applied to the Virtual DOM, which is faster and cheaper compared to directly manipulating the real DOM.
- React performs a diffing process to identify the minimal set of changes between the previous and current Virtual DOM tree.
- Only the necessary changes are then applied to the real DOM, resulting in an optimized update process.
- Provides better performance compared to direct manipulation of the real DOM.

**Real DOM:**

- The Real DOM is the actual tree structure of the HTML elements rendered by the browser.
- Directly manipulating the real DOM can be slower and more expensive compared to using the Virtual DOM.
- Any change to the real DOM can trigger reflow and repaint, affecting performance.
- Updating the real DOM directly can lead to performance bottlenecks, especially in complex applications.

In summary, the Virtual DOM acts as a lightweight and efficient representation of the real DOM, allowing React to optimize updates and improve performance.

## 💡 Q.4 In React, a component is a reusable and self-contained piece of UI that encapsulates its own logic and rendering. Components are the building blocks of React applications, and they can be composed to create complex UI structures.

**There are two types of components in React:**

1. Functional Components: Functional components are defined as JavaScript functions. They accept props (input data) as parameters and return JSX (HTML-like syntax) to define the component's UI. Functional components are stateless by default, but with the introduction of React Hooks, they can also handle state and lifecycle-related functionalities.
   Example of a functional component:

```jsx
function MyComponent(props) {
  return <h1>Hello, {props.name}!</h1>;
}
```

2. Class Components: Class components are defined as ES6 classes that extend the React.Component class. They have more features compared to functional components, such as the ability to hold state, lifecycle methods, and access to this context. Class components are useful when you need to manage local state or use lifecycle methods.

Example of a class component:

```jsx
class MyComponent extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}!</h1>;
  }
}
```

Both functional and class components can be used interchangeably in most cases. However, with the introduction of React Hooks, functional components have become the recommended approach due to their simplicity and improved performance.

## 💡 Q.5 The main difference between class-based and function-based components in React is the syntax and the way they handle state and lifecycle methods.

**Class-based components:**

- Defined as ES6 classes that extend the `React.Component` class.
- Have a `render()` method that returns JSX to define the component's UI.
- Can hold and manage state using the `this.state` object.
- Have access to lifecycle methods such as `componentDidMount()`, `componentDidUpdate()`, and `componentWillUnmount()`.
- Use the `this` keyword to access props, state, and class methods.
  Example of a class-based component:

```jsx
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  increment() {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  }

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={() => this.increment()}>Increment</button>
      </div>
    );
  }
}
```

**Function-based components:**

- Defined as JavaScript functions.
- Accept props as parameters and return JSX to define the component's UI.
- Can use React Hooks, such as `useState` and `useEffect`, to handle state and lifecycle-related functionalities.
- Hooks allow function-based components to manage state and access lifecycle methods without the need for a class.
  Example of a function-based component using React Hooks:

```jsx
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount((prevCount) => prevCount + 1);
  }

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}
```

In general, function-based components with React Hooks are preferred due to their simplicity, readability, and improved performance. However, class-based components are still necessary in some cases, such as when working with legacy codebases or integrating with libraries that rely on class components.

## 💡 Q.6 React component lifecycle refers to the series of methods that are automatically called at different stages of a component's existence. These methods allow you to perform certain actions at specific points in the component's lifecycle, such as initializing state, fetching data, updating the UI, or cleaning up resources.

The React component lifecycle consists of three main phases:

1. Mounting: Occurs when an instance of a component is being created and inserted into the DOM.

- `constructor()`: Called when the component is being initialized, used to set initial state and bind event handlers.
- `static getDerivedStateFromProps()`: Called before rendering, used to update the state based on the props.
- `render()`: Returns the JSX representation of the component's UI.
- `componentDidMount()`: Called after the component is mounted in the DOM, used for performing side effects such as data fetching.

2. Updating: Occurs when a component's state or props change.

- `static getDerivedStateFromProps()`: Called before rendering, used to update the state based on the props.
- `shouldComponentUpdate()`: Called before rendering, used to determine whether the component should re-render or not.
- `render()`: Returns the JSX representation of the component's UI.
- `getSnapshotBeforeUpdate()`: Called right before the changes are reflected in the DOM, used to capture information from the DOM (e.g., scroll position).
- `componentDidUpdate()`: Called after the component's updates are flushed to the DOM, used for performing side effects.

3. Unmounting: Occurs when a component is being removed from the DOM.

- `componentWillUnmount()`: Called just before the component is unmounted and destroyed, used for cleaning up resources (e.g., canceling timers, event listeners).

Additionally, there are other lifecycle methods that are considered legacy or less commonly used:

- `componentWillMount()`: Deprecated method called before rendering, should be avoided in favor of constructor() or componentDidMount().
- `componentWillReceiveProps()`: Deprecated method called when the component is receiving new props, should be avoided in favor of static getDerivedStateFromProps().
- `componentWillUpdate()`: Deprecated method called before rendering, should be avoided in favor of getSnapshotBeforeUpdate().

## 💡 Q.7 Prop drilling in React refers to the process of passing props through multiple intermediate components to reach a deeply nested child component that needs access to the props. This can happen when components in the middle of the component tree do not need the props themselves but are responsible for passing them down to their child components.

Prop drilling can lead to code that is hard to maintain and understand because it requires passing props through multiple layers of components, even when those intermediate components do not need the props.

To avoid prop drilling, there are a few alternative approaches:

- **Context API:** React's Context API allows you to create a context and share values within a component tree without explicitly passing them through props. By using context, you can directly access values from any component within the tree without the need for prop drilling.

- **Component Composition:** Instead of passing props through multiple components, you can compose components together to create a higher-level component that encapsulates the logic and data needed by the nested child components. This way, the child components can directly access the required props from their parent component.

- **State Management Libraries:** Using state management libraries like Redux or MobX can centralize the state and make it accessible to any component in the application without the need for prop drilling. These libraries provide a global state store that can be accessed from any component, simplifying the sharing of data across the application.

By applying these techniques, you can avoid excessive prop drilling and improve the maintainability and readability of your React codebase.

## 💡 Q.9 Develop a GitHub User Finder web application using React The application should allow users to enter a GitHub username and display relevant information about the user, including their avatar and name. The design of the application should follow the layout provided in the image below.

- Use Github Api to get User Data “https://api.github.com/users”

### 🚀 Answer

**To see project in action, visit [https://github-user-search-by-vaibhav-shinde.netlify.app/](https://github-user-search-by-vaibhav-shinde.netlify.app/)**

## 💡 Q.10 Develop a simple website using React, fetch and display products from the "https://fakestoreapi.com/products" API. The website should have the following features:

- Fetch product data from the "https://fakestoreapi.com/products" API.
- Display the products in a user-friendly UI.
- Show **Three products** in a single row for optimal visibility and layout.
- Use **React** to achieve the desired layout and functionality.
- Ensure that the UI is visually appealing and responsive.
- Implement error handling to handle any issues with API requests.
- Test the website thoroughly to ensure proper functionality and performance.
- Provide clear and concise documentation to guide users on how to interact with the website and understand its features.

### 🚀 Answer

**To see project in action, visit [https://fakestore6-by-vaibhav.netlify.app/](https://fakestore6-by-vaibhav.netlify.app/)**
