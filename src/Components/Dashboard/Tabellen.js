import React from "react";
import { Table } from "react-bootstrap";
import style from "./AufgabenStyles.module.css";
import wiedervorlagen from "../Pictures/Wiedervorlagen.png";
import projektbezug from "../Pictures/projektbezug.png";
import aufgaben from "../Pictures/Aufgaben.png";
import workflow from "../Pictures/Workflow.png";
import { FcCheckmark } from "react-icons/fc";
import tickets from "../Pictures/tickets.png";
import termine from "../Pictures/Termine.png";


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
                    /> Datenbankadministration
                </td>
                <td>
                  <img
                      src={projektbezug}
                      alt=""
                      className= {style.avatar2}
                      /> BCS Gamification
                </td>
                <td style = {{color: "black"}}>Mi 20.07.2022</td>
                <td style = {{color: "black"}}>Fr 22.07.2022</td>
              </tr>
              <tr>
              <td>
                  <img
                    src={aufgaben}
                    alt=""
                    className= {style.avatar2}
                    /> Challenge
                </td>
                <td>
                  <img
                      src={projektbezug}
                      alt=""
                      className= {style.avatar2}
                      /> BCS Gamification
                </td>
                <td style = {{color: "black"}}>Do 21.07.2022</td>
                <td style = {{color: "black"}}>Mo 25.07.2022</td>
              </tr>
              <tr>
              <td>
                  <img
                    src={aufgaben}
                    alt=""
                    className= {style.avatar2}
                    /> Belohnung
                </td>
                <td>
                  <img
                      src={projektbezug}
                      alt=""
                      className= {style.avatar2}
                      /> BCS Gamification
                </td>
                <td style = {{color: "black"}}>Do 21.07.2022</td>
                <td style = {{color: "black"}}>Mo 25.07.2022</td>
              </tr>
              <tr>
              <td>
                  <img
                    src={aufgaben}
                    alt=""
                    className= {style.avatar2}
                    /> Tickets
                </td>
                <td>
                  <img
                      src={projektbezug}
                      alt=""
                      className= {style.avatar2}
                      /> BCS Gamification
                </td>
                <td style = {{color: "black"}}>Di 02.08.2022</td>
                <td style = {{color: "black"}}>Do 04.08.2022</td>
              </tr>
            </tbody>
          </Table>
        ) : props.display === "Termin" ? (
          <Table responsive="sm">
            <caption className={style.caption}>Nächste Termine</caption>
            <tbody>
              <tr className={style.secondhead}>
                <td>Beginn</td>
                <td>Ende</td>
                <td>Betreff</td>
              </tr>
              <tr>
                <td style={{color: "black"}}>Mi 20.07.2022 14:00</td>
                <td style={{color: "black"}}>17:00</td>
                <td><img
                      src={termine}
                      alt=""
                      className= {style.avatar2}
                      /> Fifa Turnier</td>
              </tr>
              <tr>
                <td style={{color: "black"}}>Fr 22.07.2022 09:00</td>
                <td style={{color: "black"}}>10:00</td>
                <td><img
                      src={termine}
                      alt=""
                      className= {style.avatar2}
                      /> Weekly</td>
              </tr>
              <tr>
                <td style={{color: "black"}}>Mo 25.07.2022 14:30</td>
                <td style={{color: "black"}}>16:00</td>
                <td><img
                      src={termine}
                      alt=""
                      className= {style.avatar2}
                      /> Meeting mit CGI</td>
              </tr>
              <tr>
                <td style={{color: "black"}}>Mi 27.07.2022 10:00</td>
                <td style={{color: "black"}}>12:00</td>
                <td><img
                      src={termine}
                      alt=""
                      className= {style.avatar2}
                      /> Meeting mit MC</td>
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
                <td>Betreff</td>
                <td>Ende</td>
                <td>Bezug</td>
              </tr>
              <tr>
                <td><img
                      src={wiedervorlagen}
                      alt=""
                      className= {style.avatar2}
                      /> Icons für BCS nachfragen</td>
                <td style = {{color: "black"}}>Mo 25.07.2022</td>
                <td>
                  <img
                      src={projektbezug}
                      alt=""
                      className= {style.avatar2}
                      /> BCS Gamification</td>
              </tr>
              <tr>
                <td><img
                      src={wiedervorlagen}
                      alt=""
                      className= {style.avatar2}
                      /> CSS Farbschema</td>
                <td style = {{color: "black"}}>Mi 27.07.2022</td>
                <td><img
                      src={projektbezug}
                      alt=""
                      className= {style.avatar2}
                      /> BCS Gamification
                </td>
              </tr>
              <tr>
                <td><img
                      src={wiedervorlagen}
                      alt=""
                      className= {style.avatar2}
                      /> Softwarearchitektur-Buch lesen</td>
                <td style = {{color: "black"}}>Mo 01.09.2022</td>
                <td><img
                      src={projektbezug}
                      alt=""
                      className= {style.avatar2}
                      /> BCS Gamification
                </td>
              </tr>
              <tr>
                <td><img
                      src={wiedervorlagen}
                      alt=""
                      className= {style.avatar2}
                      /> Feature Selection besprechen</td>
                <td style = {{color: "black"}}>Di 02.09.2022</td>
                <td><img
                      src={projektbezug}
                      alt=""
                      className= {style.avatar2}
                      /> MC-Analytics
                </td>
              </tr>
              <tr>
                <td><img
                      src={wiedervorlagen}
                      alt=""
                      className= {style.avatar2}
                      /> Bias-Varianz Kompromiss nachlesen</td>
                <td style = {{color: "black"}}>Do 04.09.2022</td>
                <td><img
                      src={projektbezug}
                      alt=""
                      className= {style.avatar2}
                      /> MC-Analytics
                </td>
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
                  <td style={{ width: "20%" }}>Status</td>
                  <td>Priorität</td>
                </tr>
                <tr>
                  <td style = {{color: "black"}}>#12</td>
                  <td><img
                      src={tickets}
                      alt=""
                      className= {style.avatar2}
                      /> Aktuelle Version der MySQL-Datenbank in MS Teams hochladen</td>
                  <td><img
                      src={projektbezug}
                      alt=""
                      className= {style.avatar2}
                      /> BCS Gamification</td>
                  <td style = {{color: "black"}}>7-Eingeplant</td>
                  <td style = {{color: "red"}}>Sehr hoch</td>
                </tr>
                <tr>
                  <td style = {{color: "black"}}>#13</td>
                  <td><img
                      src={tickets}
                      alt=""
                      className= {style.avatar2}
                      /> Bearbeitung der Tickets ist fehlerhaft</td>
                  <td><img
                      src={aufgaben}
                      alt=""
                      className= {style.avatar2}
                      /> Tickets</td>
                  <td style = {{color: "black"}}>1-Neu</td>
                  <td style = {{color: "darkred"}}>Hoch</td>
                </tr>
                <tr>
                  <td style = {{color: "black"}}>#14</td>
                  <td><img
                      src={tickets}
                      alt=""
                      className= {style.avatar2}
                      /> Backend Server lädt Falsche Daten</td>
                  <td><img
                      src={projektbezug}
                      alt=""
                      className= {style.avatar2}
                      /> BCS Gamification</td>
                  <td style = {{color: "black"}}>4-Absprache</td>
                  <td style = {{color: "red"}}>Sehr hoch</td>
                </tr>
                <tr>
                  <td style = {{color: "black"}}>#15</td>
                  <td><img
                      src={tickets}
                      alt=""
                      className= {style.avatar2}
                      /> Belohnungsmechanismus muss implementiert werden</td>
                  <td><img
                      src={aufgaben}
                      alt=""
                      className= {style.avatar2}
                      /> Belohnung</td>
                  <td style = {{color: "black"}}>1-Neu</td>
                  <td style = {{color: "gold"}}>Mittel</td>
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
