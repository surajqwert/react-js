import React from 'react'
import RightCard from './RightCard'


const RightContent = (props) => {
  return (
    <div className='h-full p-6 overflow-auto w-2/3 flex gap-10'>
     {props.user.map(function(props, idx){
      return <RightCard id={idx+1} img = {props.img} tag = {props.tag}/>
     })}
    </div>
  )
}

export default RightContent
