import React from "react";
import { Table } from "react-bootstrap";
import style from "./AufgabenStyles.module.css";

function Ticket() {
  return (
    <div className={style.container}>
      <div className={style.aufgaben}>
        <Table responsive="sm">
          <thead className={style.test}>
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
            </tr>
            <tr>
              <td>1</td>
              <td>Flexbox anpassung</td>
              <td>
                BCS Gamification
              </td>
              <td>1</td>
              <td>Hoch</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Backend Server lädt Falsche Daten</td>
              <td>
                BCS Gamification
              </td>
              <td>4</td>
              <td>Sehr hoch</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default Ticket;
