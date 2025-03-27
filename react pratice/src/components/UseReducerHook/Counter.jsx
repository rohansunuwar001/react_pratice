import React from 'react'
import { useReducer,useState } from 'react'
import { CounterReducer, initialState } from './CounterReducer'

const Counter = () => {
    const [state, dispatch] = useReducer(CounterReducer, initialState);
    const [inputValue, setInputValue] = useState(0)

    const handleIncrementByAmount = () => {
      dispatch({type: 'incrementByAmount', payload:Number(inputValue)});
      setInputValue(0);
    }
    
    const handleDecrementByAmount = () => {
    dispatch({type: 'decrementByAmount', payload:Number(inputValue)});
    setInputValue(0);
    }
  return (
    <div>
      <h2>Count : {state.count}</h2>
      <br />
      <button onClick={()=> dispatch({type:'increment'})}>Increment</button>
      <button onClick={()=>dispatch({type:'decrement'})}>Decrement</button>
     <div>
        <input type="number" value={inputValue} onChange={(e)=>setInputValue(e.target.value)} />

        <button onClick={handleIncrementByAmount}>Add by Value</button>
        <button onClick={handleDecrementByAmount}>Sub by Value</button>
     </div>
      
    </div>
  )
}

export default Counter
