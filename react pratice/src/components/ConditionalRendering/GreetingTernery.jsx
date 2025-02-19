import React from "react";

const GoodMorning = () => <h1>Good Morning</h1>
const GoodAfternoon = () => <h1>Good Afternoon</h1>
const ElseNotFound = () => <h1>Please choose the greeting correctly</h1>


const GreetingTernery = ({ greet }) => {
  return greet == "morning" ? <GoodMorning /> : (greet == "afternoon" ? <GoodAfternoon /> : <ElseNotFound />);
};

export default GreetingTernery;
