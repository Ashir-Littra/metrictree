import React from 'react'
import './otheruser.css'
const OtherUser = ({icon}) => {
  return (
    <div className='otheruser-container'>
        <img className='otheruser-container-img' src={icon} alt='' />
    </div>
  )
}

export default OtherUser