import React from 'react'
import './limit.css'

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
    
        </div>
    </div>
  )
}

export default Limit