import React, { useState } from 'react'
import './counter.css'

// React provides a lot of functionality to make the development process easier. One of the most important features is the useState hook. The useState hook is a function that allows you to add state to functional components. In this example, we have created a simple counter component that uses the useState hook to keep track of the number of times a button is clicked. The useState hook returns an array with two elements: the current state value and a function that allows you to update the state value. In this example, we use the setCount function to update the count value when the button is clicked. The count value is displayed in a paragraph element. The button element has an onClick event handler that calls the setCount function to increment the count value by one each time the button is clicked.
const Counter = () => {
    const [count, setCount] = useState(0);
  return (
    <div className='counter-container'>
      <p id='para'>You Have Clicked {count} Times</p>
      <button id='btn' onClick={() => {setCount(count+1) }}>Click Me </button>
        
     
    </div>
  )
}

export default Counter
