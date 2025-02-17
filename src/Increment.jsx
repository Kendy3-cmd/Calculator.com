import { useState } from "react";

function IncrementDecrement() {
  const [count, setCount] = useState(0);

  function Increment() {
    setCount(count + 1);
  }

  function Decrement() {
    setCount(count - 1);
  }

  function Reset() {
    setCount(0);
  }

  return (
    <div>
      <h1>INCREMENT THE NUMBER</h1>
      <h2>{count}</h2>
      <button onClick={Increment}>+</button>
      <button onClick={Decrement}>-</button>
      <button onClick={Reset}>RESET</button>
    </div>
  );
}

export default IncrementDecrement;
