import React from 'react'

const RightCardContent = (props) => {
  return (
     <div className='absolute top-0 left-0 h-full w-full p-6 flex flex-col justify-between'>
      <h2 className='bg-white rounded-full h-15 w-15 flex justify-center items-center text-2xl font-bold'>{props.id}</h2>
      <div>
        <p className='text-xl leading-normal text-white mb-10'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, necessitatibus?</p>
        <div className='flex justify-between'>
            <button className='bg-blue-600 text-white font-medium px-8 py-2 rounded-full'>{props.tag}</button>
            <buttom  className='bg-blue-600 text-white font-medium px-3  py-2 rounded-full'><i className="ri-arrow-right-line"></i></buttom>
        </div>
      </div>
    </div>
  )
}

export default RightCardContent
