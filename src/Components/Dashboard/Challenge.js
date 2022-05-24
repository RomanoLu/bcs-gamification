import React from "react";
import { Table } from "react-bootstrap";
import style from "./ChallengesStyles.module.css";

function Challenge() {
  return (
    <div className={style.container}>
      <div className={style.challenges}>
        <Table striped bordered hover responsive="sm">
          <thead>
            <tr>
              <th>aktuelle Challenges</th>
            </tr>
          </thead>
          <tbody>
            <tr className={style.secondhead}>
              <td>ID</td>
              <td>Beschreibung</td>
              <td>Titel</td>
              <td>Schwierigkeit</td>
              <td>Belohnung</td>
              <td>Zeit</td>
              <td>angenommen</td>
              <td>absolviert</td>
              <td>Start</td>
              <td>Ende</td>
            </tr>
            <tr>
              <td>1</td>
              <td>
                Bearbeite und schließe drei Tickets mit einer Priorität von
                "Normal" oder "Hoch" innerhalb von fünf Tagen.
              </td>
              <td>Langsam läufts</td>
              <td>Einfach</td>
              <td>1/100 Arbeitstag</td>
              <td>4 Tage</td>
              <td>2022-05-01 10:00:00</td>
              <td>2022-05-30 18:00:00</td>
              <td>2021-12-16 07:29:54</td>
              <td>2021-12-20 07:29:54</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Schließe ein Ticket, dass älter als ein Jahr ist</td>
              <td>Die Mumie</td>
              <td>Schwer</td>
              <td>2 Kinotickets</td>
              <td>5 Tage</td>
              <td>2022-04-21 09:00:00</td>
              <td>2022-07-19 16:00:00</td>
              <td>2022-05-16 17:02:32</td>
              <td>2022-05-21 17:02:32</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default Challenge;
