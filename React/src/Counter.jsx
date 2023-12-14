import { useState } from "react";
import { CounterDisplay } from "./CounterDisplay";

export function Counter({ initial, amount }) {
  const [counter, setCounter] = useState(initial);

  if (counter < initial) {
    setCounter(initial);
  }

  function handleCounterIncrement() {
    setCounter((c) => c + amount);
  }
  function handleCounterDecrement() {
    setCounter((c) => c - amount);
  }
  function handleCounterReset() {
    setCounter(initial);
  }

  return (
    <div>
      <CounterDisplay countNum={counter} />
      <button onClick={handleCounterIncrement}>Increment</button>
      <button onClick={handleCounterDecrement}>Decrement</button>
      <button onClick={handleCounterReset}>Reset</button>
    </div>
  );
}
