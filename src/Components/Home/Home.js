import React from 'react'
import Profile from '../Profile/Profile'
import TopBanner from '../TopBanner/TopBanner'
import Balance from "../Balance/Balance"
import './home.css'
import Limit from '../Limit/Limit'
const Home = () => {
  return (
    <div className='home-container'>
        <TopBanner />
        <Profile />
        <h1 className='home-dashboard-title'>Dashboard</h1>
        <Balance />
        <Limit />
    </div>
  )
}

export default Home