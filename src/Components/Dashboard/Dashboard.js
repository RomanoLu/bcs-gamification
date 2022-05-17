import React from 'react'
import Challenge from './Challenge.js';
import './DashboardStyles.css';
import Ticket from './Ticket.js';
import Termin from './Termin.js';
import Wiedervorlagen from './Wiedervorlagen.js';
import Aufgaben from './Aufgaben.js';
import Workflow from './Workflow.js';


const Dashboard = () => {
  return (
    <div>
      <div className='dashboard'>
        <div className='row1'>
          <Termin />
          <Challenge />
          <Ticket />
          <Ticket />
        </div>
        <div className='row2'>
          <Aufgaben />
        </div>
        <div className='row3'>
          <Wiedervorlagen />
          <Workflow />
        </div>
      </div>
    </div>

  )
}

export default Dashboard