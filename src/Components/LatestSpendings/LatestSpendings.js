import React from 'react'
import './latestspending.css'

const LatestSpendings = () => {
  return (
    <div className='latestspending-container'>
        <div className='latestspending-title'>
    <p style={{fontSize:'18px',fontWeight:'bold'}}>Latest spendings</p>
    <p style={{fontWeight:120}}>View all</p>
    
        </div>
        <div className='horizontal-line'></div>
        <div className='latestspending-transactions'>

        </div>
    </div>
  )
}

export default LatestSpendings