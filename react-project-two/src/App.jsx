// use rafc for creating a functional component

import UserCard from "./components/UserCard"
import './App.css'
import logo from './assets/logo.jpg'
import prithviraj from './assets/prithviraj.jpg'
import maharana from './assets/maharana.jpg'

function App() {

  return (
    // whenever creating the component we need to wrap it in a  single div, not multiple divs
    // we can pass the props to the component by using the name of the prop and the value
    // And in HTML we are calling props as attributes
  <div className="container">

    <UserCard name="Eshwar K" desc="des1" image={logo} style={{"border-radius":"10px"}}/>
    <UserCard name="Prithviraj" desc="des2" image={prithviraj} style={{"border-radius":"10px"}}/>
    <UserCard name="Maharana" desc="des3" image={maharana} style={{"border-radius":"10px"}}/>
  </div>
  )
}

export default App
