

import './App.css'
import { useEffect, useState } from 'react'

function App() {
  const[count, setCount] = useState(0);
  const[total, setTotal] = useState(1);

 // first -> side-effect function 
 // second ->, if the  cleanup function, means when the component is unmounted, the cleanup function will be called
 // third -> dependency arrayvalue of the dependency array changes, the side-effect function will be called
  
 // variation:1
 // runs on every render

//  useEffect(() => {
//     alert('I am called on every render')
//   })


// variation:2
// runs on first render
    // useEffect(() => {
    //   alert('I will run on only 1st render')
    // }, [])
    
  
  // variation:3
  // useEffect(() => {
  //   alert('I will run on every time when count is updated ');
  // }, [count])


  // variation:4
  // multiple dependencies

  // useEffect(() => {
  //   alert('I will run on every time when count/total is updated ');
  // }, [count, total])

  // variation:5
  // this time lets add  cleanup function
  useEffect(() => {
   alert("Count is Updated");
   return() => {
    alert("Count is unmounted from UI");
   }
  }, [count])
  



  function handleClick() {
    setCount(count + 1);

  }

  function handleClickTotal() {
    setTotal(total + 1);
  }
  


  return (
    <div>
      <button onClick={handleClick}>
        Update Count
      </button>
      <br />
      Count is :  {count}

      <br />

      <button onClick={handleClickTotal}>
        Update Total
      </button>
      <br />
      Total is :  {total}
    </div>
  )
}

export default App
