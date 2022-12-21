import React from 'react'
import OtherUser from '../OtherUser/OtherUser'
import './sendmoney.css'
import hank from '../../assets/hank.jpeg'
import jesse from '../../assets/jesse.jpeg'
import add from '../../assets/add.png'
import guss from '../../assets/gusss.jpg'

const SendMoney = () => {
  return (
    <div className='sendmoney-container'>
        <div className='sendmoney-title'>
        <p style={{fontWeight:'bold' ,fontSize:'18px'}}>Send money to</p>
        <p style={{fontWeight:100,fontSize:'18px'}}>&gt;</p>
        </div>
        <div className='horizontal-line'></div>
        <div className='sendmoney-users'>
        <OtherUser icon={add}/>   
        <OtherUser icon={hank}/>
        <OtherUser icon={jesse}/>
        <OtherUser icon={guss}/>
        </div>
    </div>
  )
}

export default SendMoney