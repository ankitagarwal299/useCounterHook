import React from 'react';
import './style.css';
import CounterOne from './CounterOne';
import CounterTwo from './CounterTwo';

//https://www.youtube.com/watch?v=W3_GIiN-nuc

export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>

      <p>
        <CounterOne />
      </p>
      <p>
        <CounterTwo />
      </p>
    </div>
  );
}
