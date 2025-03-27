import React from "react";
import { useId } from "react";
const UniqueId = () => {
  const id = useId();
  return (
    <div>
      <label htmlFor={`${id}-email`}>Email</label>
      <input type="email" id={`${id}-password`} />
      <br />
      <label htmlFor={`${id}-email`}>Password</label>
      <input type="password" id={`${id}-password`} />
    </div>
  );
};

export default UniqueId;
