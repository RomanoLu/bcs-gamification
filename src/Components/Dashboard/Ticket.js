import React from "react";
import { Table } from "react-bootstrap";
import style from "./ChallengesStyles.module.css";

function Ticket() {
  return (
    <div className={style.container}>
      <div className={style.challenges}>
        <Table striped bordered hover responsive="sm">
          <thead>
            <tr>
              <th>Tickets</th>
            </tr>
          </thead>
          <tbody>
            <tr className={style.secondhead}>
              <td>ID</td>
              <td>Betreff</td>
              <td>Bezug</td>
              <td>Status</td>
              <td>Priorität</td>
              <td>Erstellt am</td>
            </tr>
            <tr>
              <td>1</td>
              <td>Einloggen in BCS-Account nicht möglich</td>
              <td>
                Bro, ich komm nicht mehr in meinen Account rein. Scheiß BCS und
                scheiß Projektron.
              </td>
              <td>2</td>
              <td>Maximal</td>
              <td>2022-05-24 15:28:15</td>
            </tr>
            <tr>
              <td>2</td>
              <td>React ist behindert</td>
              <td>
                Hallo Fatih, ich kriege diese scheiß Tabellen in React nicht
                hin. Warum schmeißen wir das Projekt nicht einfach und versuchen
                es nächstes Semester wieder.
              </td>
              <td>5</td>
              <td>Sehr hoch</td>
              <td>2022-05-24 15:28:15</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default Ticket;
