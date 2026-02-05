import React from 'react'
import { useState } from 'react'

const App = () => {
  let val=0;
  const[num, setNum] = useState(val);

  function inc(){
    setNum(num+1);
  }
  function dec(){
    setNum(num-1);
  } 

  return (
    <div>
      <h1>{num}</h1>
      <button onClick={inc}>increase</button>
      <button onClick={dec}>decrease</button>
    </div>
  )
}

export default App