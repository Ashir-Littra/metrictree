import React from 'react'
import Subscription from '../SubscriptionBox/Subscription'
import './scheduledpay.css'
import discord from '../../assets/discord.svg'

const ScheduledPayments = () => {
  
  return (
    <div className='scheduled-container'>
        <p className='scheduled-title'>
            Scheduled payments
        </p>
        <div className='scheduled-subs'>
    <Subscription icon={discord} amount='$1.99/m' title='Discord' color='blue' />
    <Subscription icon={discord} amount='$1.99/m' title='Discord' color='red' />
    <Subscription icon={discord} amount='$1.99/m' title='Discord' color='black' />
        </div>
    </div>
  )
}

export default ScheduledPayments