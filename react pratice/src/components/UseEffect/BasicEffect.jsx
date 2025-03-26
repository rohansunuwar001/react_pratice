import React, { useEffect } from 'react'

const BasicEffect = () => {
    useEffect(()=>{
        console.log('useEffect is called')
    },[])
  return (
    <div>
      <h1>Check console to see the message </h1>
    </div>
  )
}

export default BasicEffect
