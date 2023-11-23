import React from 'react';

import useCounter from './hooks/useCounter';

export default function CounterOne() {
  const [count, increment, decrement, reset] = useCounter(10, 5);
  return (
    <>
      COUNT : {count}
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={reset}>reset</button>
    </>
  );
}
