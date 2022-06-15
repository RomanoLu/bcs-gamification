import React from 'react';
import { Table } from "react-bootstrap";
import style from "./AufgabenStyles.module.css";

function Tabellen(props) {
  return (
    <div className={style.container}>
    <div className={style.aufgaben}>
    {
      props.display === "Challenges" ? (
      <Table responsive="sm">
        <thead className={style.test}>
          <tr>
            <th>Challenges</th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr className={style.secondhead}>
            <td>ID</td>
            <td>Titel</td>
            <td>Belohnung</td>
            <td>Zeit</td>
            <td>Akzeptieren</td>
            <td>Ablehnen</td>
          </tr>
          {props.data.map(val =>
            <tr onClick={this.onSelectedRow.bind(this, val)}>
              <td>{val.idchallenges}</td>
              <td>{val.titel}</td>
              <td>{val.idbelohnung}</td>
              <td>{val.zeit}</td>
            </tr>
          )}
        </tbody>
      </Table>
      ):
      props.display === "Aufgaben" ? (
        <Table responsive="sm">
        <thead className={style.test}>
          <tr>
            <th>Aktuelle Aufgaben</th>
          </tr>
        </thead>
        <tbody>
          <tr className={style.secondhead}>
            <td style = {{width: "10px"}}>ID</td>
            <td>Aufgabe</td>
            <td>Projektbezug</td>
            <td>Start</td>
            <td>Ende</td>
          </tr>
          <tr>
            <td style = {{width: "10px"}}>#55</td>
            <td>Backup aller Server erstellen</td>
            <td>Datenmigration auf Cloud-Server</td>
            <td>2022-05-01 10:00:00</td>
            <td>2022-05-30 18:00:00</td>
          </tr>
          <tr>
            <td style = {{width: "10px"}}>#69</td>
            <td>neue Kaffeemaschine kaufen</td>
            <td>interne Angelegenheiten</td>
            <td>2022-04-21 09:00:00</td>
            <td>2022-07-19 1:00:00</td>
          </tr>
        </tbody>
      </Table>
        ): props.display === "Termin" ?  ( 
          <Table responsive="sm">
          <thead className={style.test}>
            <tr>
              <th>Nächste Termine</th>
            </tr>
          </thead>
          <tbody>
            <tr className={style.secondhead}>
              <td style = {{width: "5%"}}>ID</td>
              <td>Beginn</td>
              <td>Ende</td>
              <td>Betreff</td>
            </tr>
            <tr>
              <td style = {{width: "5%"}}>1</td>
              <td>2022-08-30 14:00:00</td>
              <td>2022-08-30 20:00:00</td>
              <td>Golfturnier</td>
            </tr>
            <tr>
              <td style = {{width: "5%"}}>2</td>
              <td>2022-07-09 00:00:00</td>
              <td>2022-10-04 00:00:00</td>
              <td>Semesterferien</td>
            </tr>
          </tbody>
        </Table>
        ): props.display === "Workflow" ? (
        <Table responsive="sm">
          <thead className={style.test}>
            <tr>
              <th>Offene Workflows</th>
            </tr>
          </thead>
          <tbody>
            <tr className={style.secondhead}>
              <td>ID</td>
              <td>Schritt</td>
              <td>Bezug</td>
              <td>Rest</td>
              <td>Status</td>
            </tr>
            <tr>
              <td>1</td>
              <td>2</td>
              <td>Zwischenpräsentation BCS-Gamification</td>
              <td>4 Tage</td>
              <td>Offen</td>
            </tr>
            <tr>
              <td>2</td>
              <td>5</td>
              <td>Tabellen formatieren</td>
              <td>21 Tage</td>
              <td>Offen</td>
            </tr>
          </tbody>
        </Table>
        ): props.display === "Wiedervorlagen" ? (
        <Table responsive="sm">
          <thead className={style.test}>
            <tr>
              <th>Wiedervorlagen</th>
            </tr>
          </thead>
          <tbody>
            <tr className={style.secondhead}>
              <td>ID</td>
              <td>Betreff</td>
              <td>Ende</td>
              <td>Bezug</td>
            </tr>
            <tr>
              <td>1</td>
              <td>Seitenlayout</td>
              <td>2022-07-01 00:00:00</td>
              <td>
                BCS-Gamification
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Softwarearchitektur-Buch lesen</td>
              <td>2022-08-10 00:00:00</td>
              <td>
              BCS-Gamification
              </td>
            </tr>
          </tbody>
        </Table>
        ): props.display === "Ticket" && (
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
        )
    }
    </div>
  </div>

  )
}

export default Tabellen