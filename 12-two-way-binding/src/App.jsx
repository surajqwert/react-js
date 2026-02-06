import React, { useState } from 'react'

const App = () => {
  const[first, setfirst] = useState('');
  
  const submitHandler=(e)=>{
    e.preventDefault();
    console.log('Form Submitted');
  }

  return (
    <div>
      <form onSubmit={(e)=>{
        submitHandler(e);
      }}>
      <input type='text' placeholder='Enter your name' 
      onChange={()=>{
        console.log("Consoleing...")
      }}/>
      <button>Submit</button>
      </form>
    </div>
  )
}

export default App
