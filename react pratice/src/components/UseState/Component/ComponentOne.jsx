import React from "react";

const ComponentOne = ({ count, onClickHandler }) => {
  const handleClick = () => onClickHandler();

  return (
    <div>
        <h1>
      ComponentOne
        </h1>
      <p>{count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
};

export default ComponentOne;
