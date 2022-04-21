import React from 'react'
import Challenge from './Challenge.js';
import './DashboardStyles.css';
import Header from '../Header/Header.js';
import Ticket from './Ticket.js';
import Termin from './Termin.js';
import Wiedervorlagen from './Wiedervorlagen.js';
import Aufgaben from './Aufgaben.js';
import Workflow from './Workflow.js';


const Dashboard = () => {
    return (
      <div className='dashboard'>
        <Header />
        <Termin/>
        <Challenge/>
        <Ticket/>
        <Ticket/>
        
        <Aufgaben/>
        
        <Wiedervorlagen/>        
        <Workflow/>
      </div>
    )
}

export default Dashboard