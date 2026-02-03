import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Page1Content = (props) => {
  return (
    <div className='pb-20 pt-6 flex items-center h-[90vh] gap-10 px-8'>
      <LeftContent />
      <RightContent user={props.user}/>
    </div>
  )
}

export default Page1Content
