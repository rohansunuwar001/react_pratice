import React, { useEffect, useState } from 'react'

const CounterEffect = () => {
    const [count, setCount] = useState(0);
     const handleCount1 = () => {
        setCount(count+1)
     }
     const handleCount2 = () => {
        setCount(count-1)
     }

    useEffect(()=>{
       document.title = `Count: ${count}`
    },[count])
  return (
    <div>
      {count}
<br />
      <button onClick={handleCount1}>Increment</button>
      <button onClick={handleCount2}>Decrement</button>
    </div>
  )
}

export default CounterEffect
