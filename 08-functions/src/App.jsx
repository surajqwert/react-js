import React from 'react'

const App = () => {

  let a=20;
  function changeA(){
    a=30;
  }
  return (
    <div>
      <div>
        <h2>Value of a is {a}</h2>
        <button onClick={changeA}>Click-</button>
      </div>
    </div>
  )
}

export default App
