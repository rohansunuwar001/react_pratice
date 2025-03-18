import React from "react";

const MoveComponent = () => {
  const moveHandler = () => {
    alert("Mouse move event fired");
    console.log("Mouse Move event fired");
  };

  return (
    <div>
      <h1>MoveComponent</h1>

      <p onMouseMove={moveHandler}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, eum
        sit. Officiis dolore placeat adipisci iusto incidunt, minus ducimus quod
        quasi sed!
      </p>
    </div>
  );
};

export default MoveComponent;
