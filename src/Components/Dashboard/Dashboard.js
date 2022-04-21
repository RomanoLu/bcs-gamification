import React from 'react'
import Challenge from './Challenge.js';
import './DashboardStyles.css';
import Header from '../Header/Header.js';


const Dashboard = () => {
    return (
      <div className='dashboard'>
        <Header />
        <Challenge/>
        <Challenge />
      </div>
    )
}

export default Dashboard