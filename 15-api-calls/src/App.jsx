import React from 'react'
import axios from 'axios'

const App = () => {

  const getData = async() =>{

   const {data}= await axios.get('https://jsonplaceholder.typicode.com/todos/1');
   console.log(data)
  }
  return (
    <div>
       <button onClick={getData}>Get Data</button>
    </div>
  )
}

export default App
 