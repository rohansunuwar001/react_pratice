import React, { useState } from "react";

const UseStateHooks = () => {
  const [count, setCount] = useState(0);
  //   console.log(counter);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  return (
    <div>
      <h1>UseStateHooks</h1>

      <h1>{count}</h1>
      <br />
      <button onClick={increment}> Add </button> <button onClick={decrement}> Sub </button>
    </div>
  );
};

export default UseStateHooks;
