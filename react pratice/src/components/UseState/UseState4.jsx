import React, { useState } from "react";
import ComponentOne from "./Component/ComponentOne";
import ComponentTwo from "./Component/ComponentTwo";

const UseState4 = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
     <h1>
        UseState4
        </h1> 
      <ComponentOne count={count} onClickHandler={ ()=> setCount(count + 1)} />
      <ComponentTwo count={count} onClickHandler={ ()=> setCount(count + 1)} />
    </div>
  );
};

export default UseState4;
