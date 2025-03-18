import React, { useState } from 'react'

const ExampleTwo = () => {
    const [randomNumber , setRandomNumber] = useState(0);
    // ()=> Math.floor(Math.random()*10)

    const generatenumb = () => {
      const newNumb = Math.floor(Math.random() * 100);
      setRandomNumber(newNumb);
    }
    
  return (
    <div>
        <h1>
            ExampleTwo
            </h1>

            <h1>Random Number : {randomNumber}</h1>
            <button onClick={generatenumb}>Generate Random Number</button>

    </div>
  )
}

export default ExampleTwo