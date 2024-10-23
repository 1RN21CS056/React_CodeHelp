import react from 'react'

import './App.css'

function App() {

  function handleClick() {
    alert("I am clicked");
  }

  function handleMouseOver() { 
    alert("Mouse is over me");
  }

  function handleInputChange(e)
  {
    console.log("Value Till Now:", e.target.value);
  }

  function handleSubmit(e)
  {
    // preventDefault is used to prevent the default behavior of the form, means it will not submit the form
    e.preventDefault();
    // i am writing my cusom behavior here
    alert("Can i Submit the Form?");  
  }
 

  return (
    <div>
    {/* // without arrow function , this is for immediately invoking the function, dont use this so for that use arrow method type */}
    <button onClick={() => alert("Button Clicked without click , did you oserved that ?")}>
      Click Me
    </button>


    {/* <form onSubmit={handleSubmit}>
      <input type='text' onChange={handleInputChange} />
      <button type='submit'>Submit</button>  
    </form> */}

    {/* <p onMouseOver={handleMouseOver} style={{color:"red"}} >
      I am a Para
    </p>
      <button onClick={handleClick}>  
        Click Me
      </button> */}
    </div>
  )
}

export default App
