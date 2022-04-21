import React from 'react'
import { Table } from 'react-bootstrap';
import {FaAward} from 'react-icons/fa';
import './ChallengesStyles.css';

function Wiedervorlagen() {
    return (
        <div className='container'>
          <div className='challenges'>
            <Table responsive="sm">
              <thead>
                <tr>
                  <th>Wiedervorlagen</th>
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
                  Aboslviere 3 Tickets
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

export default Wiedervorlagen