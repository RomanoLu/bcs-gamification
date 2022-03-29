import React  from 'react'
import {FaAward} from 'react-icons/fa';
import './ChallengesStyles.css';

const Challenges = () => {
    return (
      <div className='container'>
          <table className='challenges'>
              <thead>
                  <tr>
                      <th>Meine Challenges</th>
                  </tr>
              </thead>
              <tbody>
                  <tr className='secondhead'>
                      <td>Icon</td>
                      <td>Beschreibung</td>
                      <td>Schwierigkeit</td>
                      <td>Zeit</td>
                      <td>Belohnung</td>
                  </tr>
                  <tr>
                    <td><i><FaAward /></i></td>
                      <td>Absolviere 3 Tickets</td>
                      <td>Einfach</td>
                      <td>2 Stunden</td>
                      <td>1/100 Urlaubstage</td>
                  </tr>
              </tbody>
          </table>
      </div>
    )
}

export default Challenges