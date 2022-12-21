import React from 'react'
import Transaction from '../Transaction/Transaction'
import './latestspending.css'
import shopping from '../../assets/shopping.svg'
import home from '../../assets/home.svg'
import ticket from '../../assets/ticket.svg'

const LatestSpendings = () => {
  return (
    <div className='latestspending-container'>
        <div className='latestspending-title'>
    <p style={{fontSize:'18px',fontWeight:'bold'}}>Latest spendings</p>
    <p style={{fontWeight:120}}>View all</p>
    
        </div>
        <div className='horizontal-line'></div>
        <div className='latestspending-transactions'>
<Transaction title='Online store' icon={shopping} amount='-$32.50' date='May 21 2022' time='8:20 PM'/>
<Transaction title='HouseKeeping' icon={home} amount=' &nbsp; -$4.20' date='May 23 2022' time='4:20 PM'/>
<Transaction title='Tickets' icon={ticket} amount= '-$100.29' date='May 23 2022' time='1:20 PM'/>
        </div>
    </div>
  )
}

export default LatestSpendings