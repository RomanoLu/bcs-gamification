import React from "react";
import { Table } from "react-bootstrap";
import style from "./AufgabenStyles.module.css";

function Workflow() {
  return (
    <div className={style.container}>
      <div className={style.challenges}>
        <Table striped bordered hover responsive="sm">
          <thead>
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
              <td>3</td>
            </tr>
            <tr>
              <td>2</td>
              <td>5</td>
              <td>Tabellen formatieren</td>
              <td>21 Tage</td>
              <td>1</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default Workflow;
