import React from 'react'

const App = () => {
  return (
    <div className='h-screen bg-black text-white'>
      <form className='flex flex-col gap-4 p-10 justify-between'>
        <input
        type="text"
        placeholder='Enter Task Heading'
        className='px-5 py-2 border-2 rounded'
        />
       
       <input 
       type='text'
       className='px-5 py-2 h-20 border-2 rounded'
       placeholder='Enter your details'></input>

       <button className='bg-white text-black rounded px-5 py-2'>Add Notes</button>
      </form>
    </div>
  )
}

export default App
