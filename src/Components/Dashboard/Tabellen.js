import React from "react";
import { Table } from "react-bootstrap";
import style from "./AufgabenStyles.module.css";
import wiedervorlagen from "../Pictures/Wiedervorlagen.png";
import projektbezug from "../Pictures/projektbezug.png";
import aufgaben from "../Pictures/Aufgaben.png";
import workflow from "../Pictures/Workflow.png";
import { FcCheckmark } from "react-icons/fc";



function Tabellen(props) {
  return (
    <div className={style.container}>
      <div className={style.aufgaben}>
        {props.display === "Challenges" ? (
          <Table responsive="sm">
            <caption className={style.caption}>Challenges</caption>
            <tbody>
              <tr className={style.secondhead}>
                <td>ID</td>
                <td>Titel</td>
                <td>Belohnung</td>
                <td>Zeit</td>
                <td>Akzeptieren</td>
                <td>Ablehnen</td>
              </tr>
              {props.data.map((val) => (
                <tr onClick={this.onSelectedRow.bind(this, val)}>
                  <td>{val.idchallenges}</td>
                  <td>{val.titel}</td>
                  <td>{val.idbelohnung}</td>
                  <td>{val.zeit}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        ) : props.display === "Aufgaben" ? (
          <Table responsive="sm">
            <caption className={style.caption}>Aktuelle Aufgaben</caption>
            <tbody>
              <tr className={style.secondhead}>
                <td>Aufgabe</td>
                <td>Projektbezug</td>
                <td>Start</td>
                <td>Ende</td>
              </tr>
              <tr>
                <td>
                  <img
                    src={aufgaben}
                    alt=""
                    className= {style.avatar2}
                    /> Datenbankserver installieren
                </td>
                <td>
                  <img
                      src={projektbezug}
                      alt=""
                      className= {style.avatar2}
                      /> Datenmigration auf Cloud-Server
                </td>
                <td style = {{color: "black"}}>Mi 20.07.2022</td>
                <td style = {{color: "black"}}>Fr 22.07.2022</td>
              </tr>
              <tr>
                <td>neue Kaffeemaschine kaufen</td>
                <td>interne Angelegenheiten</td>
                <td style = {{color: "black"}}>Do 21.07.2022</td>
                <td style = {{color: "black"}}>Mo 25.07.2022</td>
              </tr>
              <tr>
                <td>neue Kaffeemaschine kaufen</td>
                <td>interne Angelegenheiten</td>
                <td style = {{color: "black"}}>Do 21.07.2022</td>
                <td style = {{color: "black"}}>Mo 25.07.2022</td>
              </tr>
            </tbody>
          </Table>
        ) : props.display === "Termin" ? (
          <Table responsive="sm">
            <caption className={style.caption}>Nächste Termine</caption>
            <tbody>
              <tr className={style.secondhead}>
                <td style={{ width: "5%" }}>ID</td>
                <td>Beginn</td>
                <td>Ende</td>
                <td>Betreff</td>
              </tr>
              <tr>
                <td>1</td>
                <td>2022-08-30 14:00:00</td>
                <td>2022-08-30 20:00:00</td>
                <td>Golfturnier</td>
              </tr>
              <tr>
                <td>2</td>
                <td>2022-07-09 00:00:00</td>
                <td>2022-10-04 00:00:00</td>
                <td>Semesterferien</td>
              </tr>
            </tbody>
          </Table>
        ) : props.display === "Workflow" ? (
          <Table responsive="sm">
            <caption className={style.caption}>Offene Workflow-Schritte</caption>
            <tbody>
              <tr className={style.secondhead}>
                <td style={{ width: "50%" }}>Schritt</td>
                <td>Bezug</td>
                <td>Rest</td>
                <td>Status</td>
                <td>Aktionen</td>
              </tr>
              <tr>
                <td className={style.inlineicon}>
                  <img
                  src={workflow}
                  alt=""
                  className= {style.avatar2}
                  /> Datenbankserver installieren
                </td>
                <td>
                  <img
                    src={aufgaben}
                    alt=""
                    className= {style.avatar2}
                    />  Datenbankadministration
                </td>
                <td>4 Tage</td>
                <td style = {{color: "red"}}>Offen</td>
                <td><FcCheckmark size= {15}/></td>
              </tr>
              <tr>
                <td className={style.inlineicon}>
                  <img
                  src={workflow}
                  alt=""
                  className= {style.avatar2}
                  /> Challenge Logik
                </td>
                <td>
                  <img
                    src={aufgaben}
                    alt=""
                    className= {style.avatar2}
                    />  Challenge
                </td>
                <td>2 Tage</td>
                <td style = {{color: "red"}}>Offen</td>
                <td><FcCheckmark size= {15}/></td>
              </tr>
              <tr>
                <td className={style.inlineicon}>
                  <img
                  src={workflow}
                  alt=""
                  className= {style.avatar2}
                  /> Backend-Server für Challenge
                </td>
                <td>
                  <img
                    src={aufgaben}
                    alt=""
                    className= {style.avatar2}
                    />  Challenge
                </td>
                <td>9 Tage</td>
                <td style = {{color: "red"}}>Offen</td>
                <td><FcCheckmark size= {15}/></td>
              </tr>
              <tr>
                <td className={style.inlineicon}>
                  <img
                  src={workflow}
                  alt=""
                  className= {style.avatar2}
                  /> Belohnungsmechanismus
                </td>
                <td>
                  <img
                    src={aufgaben}
                    alt=""
                    className= {style.avatar2}
                    />  Belohnung
                </td>
                <td>4 Tage</td>
                <td  style = {{color: "red"}}>Offen</td>
                <td><FcCheckmark size= {15}/></td>
              </tr>
            </tbody>
          </Table>
        ) : props.display === "Wiedervorlagen" ? (
          <Table responsive="sm">
            <caption className={style.caption}>Wiedervorlagen</caption>
            <tbody>
              <tr className={style.secondhead}>
                <td style={{ width: "5%" }}>ID</td>
                <td>Betreff</td>
                <td>Ende</td>
                <td>Bezug</td>
              </tr>
              <tr>
                <td>1</td>
                <td>Seitenlayout</td>
                <td>2022-07-01 00:00:00</td>
                <td>BCS-Gamification</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Softwarearchitektur-Buch lesen</td>
                <td>2022-08-10 00:00:00</td>
                <td>BCS-Gamification</td>
              </tr>
            </tbody>
          </Table>
        ) : (
          props.display === "Ticket" && (
            <Table responsive="sm">
              <caption className={style.caption}>Tickets</caption>
              <tbody>
                <tr className={style.secondhead}>
                  <td style={{ width: "5%" }}>ID</td>
                  <td>Betreff</td>
                  <td>Bezug</td>
                  <td style={{ width: "5%" }}>Status</td>
                  <td>Priorität</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Flexbox anpassung</td>
                  <td>BCS Gamification</td>
                  <td>1</td>
                  <td>Hoch</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Backend Server lädt Falsche Daten</td>
                  <td>BCS Gamification</td>
                  <td>4</td>
                  <td>Sehr hoch</td>
                </tr>
              </tbody>
            </Table>
          )
        )}
      </div>
    </div>
  );
}

export default Tabellen;
