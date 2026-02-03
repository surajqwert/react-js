import React from 'react'
import RightCardContent from './RightCardContent'

const RightCard = (props) => {
  return (
    <div className= 'h-full w-80 overflow-hidden shrink-0 relative bg-red-800 rounded-4xl'>
      <img className= 'h-full w-full object-cover' src={props.img} alt='working profesion' />

     <RightCardContent id={props.id} tag={props.tag}/>
    </div>
  )
}

export default RightCard
