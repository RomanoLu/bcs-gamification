import React from "react";
import { Table } from "react-bootstrap";
import style from "./AufgabenStyles.module.css";

function Wiedervorlagen() {
  return (
    <div className={style.container}>
      <div className={style.aufgaben}>
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
      </div>
    </div>
  );
}

export default Wiedervorlagen;
