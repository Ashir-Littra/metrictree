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
            <p style={{fontSize:'18px'}}>{title}</p>
            <p style={{fontSize:'15px',fontWeight:200}}>{date} at {time}</p>
        </div>
       </div>
        <div className='transaction-right'>
        <div className='transaction-amount' style={{fontSize:'23px'}}>
            {amount}
        </div>
        <p style={{fontSize:'22px',fontWeight:100}}> &gt; </p>
        </div>
    </div>
  )
}

export default Transaction