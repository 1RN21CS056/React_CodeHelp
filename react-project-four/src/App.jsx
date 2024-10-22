import { useState } from 'react'
import './App.css'
import Button from './components/Button'
// import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0);


  function handleClick() {
    setCount(count+1);
  }


  return (
   <div>
    <Button increment={handleClick}
      text="Click me">
      <h1>{count}</h1>
    </Button>

    {/* <Card name="Eshwar">
      <h1>Web Development</h1>
      <p>Trying to be consistent in this</p>
      <p> will Complete this soon</p>
    </Card> */}
   </div>
  )
}


export default App
