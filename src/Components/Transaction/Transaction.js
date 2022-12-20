import React from 'react'
import './transaction.css'

const Transaction = ({title,icon,amount,date,time}) => {
  return (
    <div className='transaction-container'>
       <div className='transaction-left'>
      <div className='transaction-icon-container'>
      <img className='transaction-icon' src={icon} alt='' />
      </div>
        <div className='transaction-details'>
            <p>{title}</p>
            <p>{date} at {time}</p>
        </div>
       </div>
        <div className='transaction-right'>
        <div className='transaction-amount'>
            {amount}
        </div>
        <p> &lt; </p>
        </div>
    </div>
  )
}

export default Transaction