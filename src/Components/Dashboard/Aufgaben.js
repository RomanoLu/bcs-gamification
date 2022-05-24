import React from "react";
import { Table } from "react-bootstrap";
import style from "./AufgabenStyles.module.css";

function Aufgaben() {
  return (
    <div className={style.container}>
      <div className={style.aufgaben}>
        <Table striped bordered hover responsive="sm">
          <thead>
            <tr>
              <th>Aktuelle Aufgaben</th>
            </tr>
          </thead>
          <tbody>
            <tr className={style.secondhead}>
              <td>ID</td>
              <td>Aufgabe</td>
              <td>Projektbezug</td>
              <td>Start</td>
              <td>Ende</td>
            </tr>
            <tr>
              <td>1</td>
              <td>Backup aller Server erstellen</td>
              <td>Datenmigration auf Cloud-Server</td>
              <td>2022-05-01 10:00:00</td>
              <td>2022-05-30 18:00:00</td>
            </tr>
            <tr>
              <td>2</td>
              <td>neue Kaffeemaschine kaufen</td>
              <td>interne Angelegenheiten</td>
              <td>2022-04-21 09:00:00</td>
              <td>2022-07-19 1:00:00</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default Aufgaben;
