import React,{useState} from 'react'
import './subs.css'

const Subscription = ({icon,amount,title,color}) => {
  const style= {
    backgroundColor: color
  }

  return (
    <div className='subs-container' style={style}>
        <p className='subs-amount'>{amount}</p>
        <div className='subs-bottom'>
            <img src={icon} alt='' className='subs-bottom-icon' />
            <p className='subs-bottom-title'>{title}</p>
        </div>
    </div>
  )
}

export default Subscription