import { useState, useCallback } from "react";

export function useCounter({ initialValue = 0 }) {
  const [counter, setCounter] = useState(initialValue);

  const handleCounterIncrement = useCallback(() => {
    setCounter((c) => c + 1);
  }, [counter]);
  const handleCounterDecrement = useCallback(() => {
    setCounter((c) => c - 1);
  }, [counter]);
  const handleCounterReset = useCallback(() => {
    setCounter(initialValue);
  }, [initialValue]);

  return {
    counter: counter,
    onIncrement: handleCounterIncrement,
    onDecrement: handleCounterDecrement,
    onReset: handleCounterReset,
  };
}
