import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const [name, setName] = useState(''); // name is the state and setName is the function to change the state
   // create state
   // manage state
   // change state 
   // sync state with every child component
  return (
   <dev>
   {/* // pass the state and the function to change the state as props to the child component */}
      <Card title="Card1" name={name} setName={setName}/>  
      <Card title="Card2" name={name} setName={setName}/>  
      {/* <p>I am inside Parent component and value of name is : {name}</p> */}
   </dev>
  )
}

export default App
