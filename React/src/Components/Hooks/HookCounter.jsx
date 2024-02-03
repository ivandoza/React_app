import { CounterDisplay } from "../CounterDisplay/CounterDisplay";
import { useCounter } from "../CustomHooks/useCounter";

export function HookCounter(initialValue = 0) {
  const { counter, onIncrement, onDecrement, onReset } =
    useCounter(initialValue);

  return (
    <div>
      <CounterDisplay countNum={counter} />
      <button onClick={onIncrement}>Increment</button>
      <button onClick={onDecrement}>Decrement</button>
      <button onClick={onReset}>Reset</button>
    </div>
  );
}
