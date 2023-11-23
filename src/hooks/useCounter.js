import { useState } from 'react';

export default function Counter(initialValue, step) {
  const [count, setCount] = useState(initialValue);

  function increment() {
    setCount((prev) => prev + step);
  }

  function decrement() {
    setCount((prev) => prev - step);
  }

  function reset() {
    setCount(0);
  }

  return [count, increment, decrement, reset];
}
