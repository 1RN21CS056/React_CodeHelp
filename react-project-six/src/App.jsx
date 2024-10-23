import { useState } from 'react'

import './App.css'
import LogoutBtn from './components/LogoutBtn'
import LoginBtn from './components/LoginBtn'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true)
  // using if else statement to check if the user is logged in or not
  // if(isLoggedIn)
  // {
  //   return (
  //     <LogoutBtn />
  //   )
  // }
  // else{
  //   return (
  //     <LoginBtn />
  //   )
  // }


// Now we will use ternary operator to check if the user is logged in or not
  // return(
  //   <div>
  //      {isLoggedIn ? <LogoutBtn /> : <LoginBtn />}
  //   </div>
   
  // ) 


  // Now we will use logical AND operator to check if the user is logged in or not
  // return (
  //   <div>
  //     <h1>Welcome Everyone</h1>
  //     <div>
  //       {isLoggedIn && <LogoutBtn />}
  //     </div>
  //   </div>
  // )

  // Using early return pattern
  if(!isLoggedIn){
    return(
      <div>
      <h1>False Case</h1>
        <LoginBtn />
      </div>
    )
  }

    return (
    <div>
      <h1>True Case</h1>
      <div>
        {isLoggedIn && <LogoutBtn />}
      </div>
    </div>
  )

}

export default App
