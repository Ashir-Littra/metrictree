import React from 'react'
import TransactionBox from '../TransactionBox/TransactionBox'
import './limit.css'
import income from '../../assets/income.svg'
import expense from '../../assets/expense.svg'

const Limit = () => {
  return (
    <div className='limit-container'>
        <div className='limit-top'>
      <div className='limit-top-title'>
      <p style={{paddingRight:'150px'}}>Internet payment limit</p>
        <p> $ 1200/3000</p>
      </div>
      <div className='limit-top-progressBar'>
   <div className='progress-bar'>
    <div className='progress-bar-black'></div>
    <div></div>
   </div>
      </div>
        </div>
        <div className='limit-bottom'>
    <TransactionBox image={income} title='income' amount='$5,700' />
    <TransactionBox image={expense} title='spendings' amount='$2,254' bcolor='white' />
        </div>
    </div>
  )
}

export default Limit