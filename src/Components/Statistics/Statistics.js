import React, { Component, useState } from "react";
import style from "./Statistics.module.css";
import { FaAward } from "react-icons/fa";
import { Table, Dropdown, Button, Form } from "react-bootstrap";

import { ProgressBar } from "react-bootstrap";
import Axios from "axios";
import LineChart from "./LineChart";
import PieChart from "./PieChart";
import BarChart from "./BarChart";

class Statistics extends Component {
  constructor() {
    super();
    this.state = {
      alert: false,
      showPopup: false,
      progress: [],
      challengeList: [],
      filter: ""
    };
  }

  componentDidMount() {
    Axios.get("http://localhost:3001/api/getOpenChallenges")
      .then((response) => {
        const challengeList = response.data;
        this.setState({ challengeList });
        console.log(this.state.challengeList);
      })
      .catch(function (error) {
        console.log(error);
      });
    Axios.get("http://localhost:3001/api/getChallengeProgress")
    .then((response) => {
      const progress = response.data;
      this.setState({ progress: progress[0] });
      console.log(this.state.progress);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  togglePopup() {
    this.setState({
      alert: !this.state.alert,
      showPopup: !this.state.showPopup,
    });
  }

  render() {
    return (
      <div className={style.container}>
        <h2>Meine Statistik: Challenge</h2>
        <Form.Group className="mb-3" controlId="validationCustom01">
          <Form.Select className={style.form} id="disabledSelect" onChange={(e) => {
                                  this.setState({ filter: e.target.value })
                              }}  required                >
            <option>Offen</option>
            <option>Absolviert</option>
          </Form.Select>
        </Form.Group> 
        <div className={style.container2}>
          <Table responsive="sm">
            <tbody>
              <tr className={style.secondhead}>
                <td>ID</td>
                <td>Titel</td>
                <td>Anzahl</td>
                <td>Belohnung</td>
                <td>Zeit bis</td>
                <td>Fortschritt</td>
              </tr>
              {this.state.challengeList.map((val) => (
                <>
              <tr>
                <td>{val.idchallenges}</td>
                <td>{val.titel}</td>
                <td>{val.anzahl}</td>
                <td>{val.idbelohnung}</td>
                <td>{val.ende}</td>
                  <td>
                  <span style={{ color: "green" }}>
                    <ProgressBar
                      striped
                      variant="success"
                      now={this.state.progress.challengeProgress*100}
                      label={this.state.progress.challengeProgress*100 + "%"}
                    />
                  </span>
                </td>
              </tr>
              </>
              ))}
            </tbody>
          </Table>
        </div>

        {/*
                  <div className={style.container3}>
                  <div className={style.chart1}>
                    {" "}
                    <LineChart title="abgeschlossene Challenges (Woche)" aspect={2} />
                  </div>
                  <div className={style.chart2}>
                    {" "}
                    <BarChart title="lol" aspect={3} />
                  </div>
                </div>
              */ }
      </div>
    );
  }
}

export default Statistics;
