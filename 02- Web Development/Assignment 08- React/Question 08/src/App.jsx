import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="pink-box">
        <div className="red-box">
          <h1 className="count">{count}</h1>
          <div>
            <button className="increment" onClick={setCount(count + 1)}>
              Increment
            </button>
            <button className="decrement" onClick={setCount(count - 1)}>
              Decrement
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
