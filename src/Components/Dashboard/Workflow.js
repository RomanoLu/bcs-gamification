import React from 'react'
import { Table } from 'react-bootstrap';
import {FaAward} from 'react-icons/fa';
import './ChallengesStyles.css';

function Workflow() {
    return (
        <div className='container'>
          <div className='challenges'>
            <Table responsive="sm">
              <thead>
                <tr>
                  <th>Offene Workflows</th>
                </tr>
              </thead>
              <tbody>
                <tr className = 'secondhead'>
                  <td>Beschreibung</td>
                  <td>Schwierigkeit</td>
                  <td>Zeit</td>
                  <td>Belohnung</td>
                </tr>
                <tr className='items'>
                  <td>
                  <i><FaAward /></i>
                  Absolviere 3 Tickets
                  </td>
                  <td>Einfach</td>
                  <td>2 Stunden</td>
                  <td>1/100 Urlaubstage</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      )
}

export default Workflow