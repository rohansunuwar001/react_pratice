import React from "react";

const Greeting = () => {
    const greetMessage = "This is a greeting message for Jhon"
   const data = new Date();
  return <div>
    <h1> {greetMessage} </h1>
    <p>Date: {data.getDate()} </p>
  </div>;
};

export default Greeting;
