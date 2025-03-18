import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const handleCount = () => {
    setCount(count+ 1);
  }
  
  return (
    <div>
      <h1>Counter</h1>
      <h1>Number : {count} </h1>
      <button onClick={handleCount}>Increment</button>
    </div>
  );
};

export default Counter;
