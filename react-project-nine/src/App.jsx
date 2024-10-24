import { createContext, useState } from 'react'
import './App.css'
import ChildA from './components/ChildA';


// //Step:1 Create Context
// const UserContext = createContext();

// //Step:2 Wrap all the child inside the Provider

// //Step:3 Pass the value to the Provider 

// //Step:4 consume the value in the Consumer

const ThemeContext = createContext();
function App() {
  // const [user, setUser] = useState({name:"Eshwar"});
  
  const [theme, setTheme] = useState("light"); 


  return (
    <>
    <ThemeContext.Provider value = {{ theme, setTheme}}>
    <div id="container" style={{backgroundColor :theme==='light'?"beige":"black"}}>
      <ChildA />
    </div>
      
    </ThemeContext.Provider>


{/* 
      <UserContext.Provider value = {user}>
        <ChildA /> 
      </UserContext.Provider> */}
   
    </>
 
  )
}

export default App
// export {UserContext}
export {ThemeContext}
