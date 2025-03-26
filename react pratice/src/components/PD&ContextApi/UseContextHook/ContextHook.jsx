import React, { useContext } from 'react'
import { Data, Data1 } from '../../../App'

// useContext Hook allows us to access the context values provided by a Context object directly within a functional component.Context provides a way to pass data through the component tree without having to pass props down manually to every single component.

const ContextHook = () => {
    const username = useContext(Data);
    const age = useContext(Data1);
  return (
    <div>
      <h1 style={{
        color: 'red',
        border: '2px solid pink'
      }}>My name is {username} and My Age is {age} </h1> 
    </div>
  )
}

export default ContextHook
