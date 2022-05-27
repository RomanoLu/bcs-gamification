import React from "react";
import { Table } from "react-bootstrap";
import style from "./AufgabenStyles.module.css";
function Termin() {
  return (
    <div className={style.container}>
      <div className={style.challenges}>
        <Table striped bordered hover responsive="sm">
          <thead>
            <tr>
              <th>Nächste Termine</th>
            </tr>
          </thead>
          <tbody>
            <tr className={style.secondhead}>
              <td>ID</td>
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
      </div>
    </div>
  );
}

export default Termin;
