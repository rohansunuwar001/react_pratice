import React, { useRef } from 'react'

const UserRef = () => {
    const inputElement = useRef(null);
    console.log(inputElement);

    const focusInput = () => {
      inputElement.current.focus();
      inputElement.current.style.color= 'red';
      inputElement.current.style.fontSize= '1rem';
      inputElement.current.style.width = '70%';
      inputElement.current.value = "Rohan Dai Don ho hai Guys"
    };
    
  return (
    <div>
      <input type='text' ref={inputElement} />
      <button onClick={()=>focusInput()}>Focus And Write Rohan Dai Don ho , bot haru</button>
      {/* <p ref={inputElement}></p> */}
    </div>
  )
}

export default UserRef
