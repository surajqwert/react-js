import React from 'react'

const App = () => {
  let user = localStorage.getItem('user')
  console.log(user)

  return (
    <div>
      App
    </div>
  )
}

export default App
