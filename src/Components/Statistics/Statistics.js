import React, { Component, useState, useEffect } from "react";
import style from "./Statistics.module.css";
import { FaAward } from "react-icons/fa";
import { Table, Dropdown, Button, Form } from "react-bootstrap";

import { ProgressBar } from "react-bootstrap";
import Axios from "axios";
import LineChart from "./LineChart";
import PieChart from "./PieChart";
import BarChart from "./BarChart";
import openChallenge from "./OpenChallenge";

class Statistics extends Component {
  constructor() {
    super();
    this.state = {
      alert: false,
      showPopup: false,
      progress: [],
      challengeList: [],
      filter: "Offen",
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
          <Form.Select
            className={style.form}
            id="disabledSelect"
            onChange={(e) => {
              this.setState({ filter: e.target.value });
            }}
            required
          >
            <option>Offen</option>
            <option>Absolviert</option>
          </Form.Select>
        </Form.Group>
        <div className={style.container2}>
          <OpenChallenges
            display={this.state.filter}
            challengeProgress={this.state.progress.challengeProgress}
          />
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
              */}
      </div>
    );
  }
}

export default Statistics;

/*ChallengeList */
const OpenChallenges = (props) => {
  const [state, setState] = useState([]);
  useEffect(() => {
    Axios.get("http://localhost:3001/api/getOpenChallenges")
      .then((res) => setState(res.data))
      .catch(function (error) {
        console.log(error);
      });
  });

  const openChallenge = state.filter((open) => open.absolviert != 1);
  const solvedChallenge = state.filter((open) => open.absolviert == 1);

  return (
    <>
      {props.display === "Offen" ? (
        <Table responsive="sm">
          <tbody>
            <tr className={style.secondhead}>
              <td style={{ width: "5%" }}>ID</td>
              <td style={{ width: "25%" }}>Titel</td>
              <td style={{ width: "5%" }}>Anzahl</td>
              <td style={{ width: "20%" }}>Belohnung</td>
              <td style={{ width: "20%" }}>Zeit bis</td>
              <td>Fortschritt</td>
            </tr>
            {openChallenge.map((val) => (
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
                      now={props.challengeProgress * 100}
                      label={props.challengeProgress * 100 + "%"}
                    />
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        props.display === "Absolviert" && (
          <Table responsive="sm">
            <tbody>
              <tr className={style.secondhead}>
                <td>ID</td>
                <td>Titel</td>
                <td>Anzahl</td>
                <td>Belohnung</td>
                <td>Abgeschlossen am</td>
              </tr>
              {solvedChallenge.map((val) => (
                <tr>
                  <td>{val.idchallenges}</td>
                  <td>{val.titel}</td>
                  <td>{val.anzahl}</td>
                  <td>{val.ende}</td>
                  <td>
                    <span style={{ color: "green" }}></span>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        )
      )}
    </>
  );
};
