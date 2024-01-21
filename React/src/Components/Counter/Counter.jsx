import { useState, useEffect, useRef } from "react";
import { CounterDisplay } from "../CounterDisplay/CounterDisplay";

export function Counter({ initial, amount }) {
  const [counter, setCounter] = useState(initial);

  if (counter < initial) {
    setCounter(initial);
  }

  function handleCounterIncrement() {
    setCounter((c) => c + amount);
    ref.current = "UP";
  }
  function handleCounterDecrement() {
    setCounter((c) => c - amount);
    ref.current = "Down";
  }
  function handleCounterReset() {
    setCounter(initial);
  }

  const ref = useRef(null);

  useEffect(() => {
    console.log(`Current value of the counter: ${counter}`);
    console.log(ref.current);
  }, [counter]);

  return (
    <div>
      <CounterDisplay countNum={counter} />
      <button onClick={handleCounterIncrement}>Increment</button>
      <button onClick={handleCounterDecrement}>Decrement</button>
      <button onClick={handleCounterReset}>Reset</button>
    </div>
  );
}
