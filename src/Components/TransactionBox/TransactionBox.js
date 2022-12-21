import React from 'react'
import './transactionbox.css'

const TransactionBox = ({image,title,amount,bcolor}) => {
  return (
    <div className='transactionBox-container' style={{backgroundColor : bcolor?bcolor:null}}>
      <img src={image} alt='' className='transactionBox-image'/>
      <div className='transactionBox-desc'>
        <p>{title}</p>
        <p>{amount}</p>
      </div>
    </div>
  )
}

export default TransactionBox