import React from "react";
import { Table } from "react-bootstrap";
import style from "./AufgabenStyles.module.css";

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
              <td>Einloggen in BCS-Account ist immer möglich</td>
              <td>
                Bro, ich hatte noch nie ein Problem in meinen Account
                reinzukommen. Gott segne BCS und Projektron.
              </td>
              <td>2</td>
              <td>Maximal</td>
              <td>2022-05-24 15:28:15</td>
            </tr>
            <tr>
              <td>2</td>
              <td>React ist super!</td>
              <td>
                Hallo Fatih, diese Tabellen in das Dashboard zu implementieren
                ist ein Klacks. Wir sollten nächstes Semester wieder so ein
                Projekt machen!
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
