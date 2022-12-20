import React from 'react'
import './transactionbox.css'

const TransactionBox = ({image,title,amount,bcolor}) => {
  return (
    <div className='transaction-container' style={{backgroundColor : bcolor?bcolor:null}}>
      <img src={image} alt='' className='transaction-image'/>
      <div className='transaction-desc'>
        <p>{title}</p>
        <p>{amount}</p>
      </div>
    </div>
  )
}

export default TransactionBox