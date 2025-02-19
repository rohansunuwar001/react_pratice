import React from "react";

const PropCard = (props) => {
  return (
    <div>
      <h1>PropCard</h1>
      {props.children}
    </div>
  );
};

export default PropCard;
