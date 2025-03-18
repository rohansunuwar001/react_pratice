import React from 'react'

const ComponentTwo = ({ count, onClickHandler }) => {
    const handleClick = () => onClickHandler();
  return (
    <div>
        
        <h1>
            ComponentTwo
            </h1>

            <p>{count}</p>
            <button onClick={handleClick}>Increment</button>
        </div>
  )
}

export default ComponentTwo