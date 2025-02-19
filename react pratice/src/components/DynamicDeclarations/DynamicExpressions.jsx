import React from 'react'

const DynamicExpressions = () => {
    const myName = "Rohan"
    const multiple = (a,b) => a*b;
    const specialClass = 'simple-class'
  return (
    <section>
        <p>2+2 = {2+2}</p>
        <h1>{myName}</h1>
        <p>My Friends List:{["Alex","Jhon","Waheed","Jordan"]} </p>
        <p>2*2 = {multiple(2,2)} </p>
        <p className={specialClass}>"This is the special class"</p>
    </section>
  )
}

export default DynamicExpressions