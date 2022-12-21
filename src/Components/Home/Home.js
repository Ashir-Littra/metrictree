import React from 'react'
import Profile from '../Profile/Profile'
import TopBanner from '../TopBanner/TopBanner'
import Balance from "../Balance/Balance"
import './home.css'
import Limit from '../Limit/Limit'
import LatestSpendings from '../LatestSpendings/LatestSpendings'
import Graph from '../Graph/Graph'
const Home = () => {
  return (
    <div className='home-container'>
        <TopBanner />
        <Profile />
        <h1 className='home-dashboard-title'>Dashboard</h1>
        <Balance />
        <Limit />
        <LatestSpendings />
        <p className='home-graph-title'>Expenses statitics</p>
        <Graph />
    </div>
  )
}

export default Home