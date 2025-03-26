import React from 'react'
import { Data, Data1 } from '../../App'

// Context Api is a feature that allows you to manage and share state across your component tree without having to pass props down manually at every level. It's useful for scenarios where your need to share data or funtions across many components especially when these components are deeply nested.

const ContextApi = () => {
  return (
    <Data.Consumer>
        {(name)=>{
            return(
                <Data1.Consumer>
                    {(age)=>{
                        return(
                            <h1>My name is {name} and my age is {age} </h1>
                        )
                    }}
                </Data1.Consumer>
            )
        }}
    </Data.Consumer>
  )
}

export default ContextApi
