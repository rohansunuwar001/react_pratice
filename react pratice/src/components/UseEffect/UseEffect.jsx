import React, { useEffect, useState } from "react";
// UseEffect Hook allows you to perform side effects in your components. Some Examples of side effects are : fecting data, directly updating the DOM etc.

// 1. Without the array -> on every single reader
// 2. With the array -> only on the first render

// 3. we cannot wrap the hooks inside the conditional statement
// for eg

// if(value > 0){
//     useEffect(() => {
//       console.log("call useEffect");
//       document.title = `Increment (${value})`
//     }
//     )
// }

// if we want to use then , we have to use inside the conditional statement
// useEffect(() => {
//   if(value > 0){
//     console.log("call useEffect");
//     document.title =  `Increment (${value})`
//   }
// }
// )

// We setup useEffect hook to run some code When
// compnent renders for the first time
//  whenever it re-renders
// some data in out component changes

const UseEffect = () => {
  const [value, setValue] = useState(0);
  const [something, setSomething] = useState(0);

  useEffect(() => {
    if(value > 0){
        console.log("call useEffect");
        document.title = `Increment (${value})`;
    }
  }, [value]);
  //   useEffect(() => {
  //     console.log('call something')
  //     document.title = `Something (${something})`
  //   },[something]
  //   )

  return (
    <div>
      <h2>{value}</h2>
      <button onClick={() => setValue(value + 1)}>Click Me</button>
      <button onClick={() => setSomething(value + 1)}>
        Click by Something
      </button>
    </div>
  );
};

export default UseEffect;
