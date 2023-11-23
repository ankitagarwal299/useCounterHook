import React from 'react';
import useCounter from './hooks/useCounter';

export default function CounterTwo() {
  const [count, increment, decrement, reset] = useCounter(20, 5);

  return (
    <>
      COUNT : {count}
      {/* Somehow arrow function not working  */}
      {/* <button onClick={()=> increment}>increment</button>
    <button onClick={()=> decrement}>decrement</button>
    <button onClick={()=> reset}>reset</button> */}
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={reset}>reset</button>
    </>
  );
}
