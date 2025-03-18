import React, { useState } from "react";

const Example = () => {
  const [count, setCount] = useState(() => {
    const initialCount = 10;
    return initialCount;
  });

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default Example;
