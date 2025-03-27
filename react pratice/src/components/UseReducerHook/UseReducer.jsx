import React, { useReducer } from "react";
// useReducer is a hook that is similar to useState, but it is designed for more complex state objects or state transitions that involves multiple subvalues. it allows you to manage state in a functional , immuntable way. it is a combination of useState and useEffect. it is a hook that is used to manage state in a functional component.

const initialState = { count: 1 };

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1 };
      break;

    case "decrement":
      return { ...state, count: state.count - 1 };
      break;

    case "reset":
      return { ...state, count: 1 };
      break;

    default:
      break;
  }
};

const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const handleIncrement = () => dispatch({type:"increment"});
  const handleDecrement = () => dispatch({type:"decrement"});
  const handleReset = () => dispatch({type:"reset"});
  
  
  return <div>
    <button onClick={handleIncrement}>+</button>
    <button onClick={handleDecrement}>-</button>
    <button onClick={handleReset}>Reset</button>

    <h1>Count : {state.count}</h1>
  </div>;
};

export default UseReducer;
