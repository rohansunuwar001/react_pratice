import React from "react";
const ValidPassword = () => <h1>Valid Password</h1>;
const InvalidPassword = () => <h1>Invalid Password</h1>;

const IfRendering = ({ isValid }) => {
//   if (isValid) {
//     return <ValidPassword />;
//   }
//   return <InvalidPassword />;

// Using ternery
return isValid ? <ValidPassword /> : <InvalidPassword />;
};

export default IfRendering;
