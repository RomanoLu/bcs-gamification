import React, { Component, useState, useEffect } from "react";
import style from "./Statistics.module.css";
import { Table, Dropdown, Button, Form, Row } from "react-bootstrap";
import { ProgressBar } from "react-bootstrap";
import Axios from "axios";
import Moment from "moment";
import challenge from "../Pictures/ChallengeIcon.png";
import belohnung from "../Pictures/belohnung.png";

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

  componentWillMount() {
    Axios.get("http://localhost:3001/api/getOpenChallenges")
      .then((response) => {
        const challengeList = response.data;
        console.log(challengeList[0].idchallenges);
        this.setState({ challengeList: challengeList[0] });
      })
      .catch(function (error) {
        console.log(error);
      });
    Axios.get("http://localhost:3001/api/getChallengeProgress")
      .then((response) => {
        const progress = response.data;
        this.setState({ progress: progress[0] });
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
    console.log("WAS: " + this.state.progress.challengeProgress);
    console.log("WAS2: " + this.state.challengeList);
    if (this.state.progress.challengeProgress >= 1) {
      Axios.post("http://localhost:3001/api/updateChallenge", {
        id: this.state.challengeList.idchallenges,
      });
    }
    return (
      <div className={style.container}>
        <h2>Meine Statistik: Challenge</h2>
        <Form style={{ marginLeft: "3.8%" }}>
          <Form.Group>
            <Form.Select
              size="sm"
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
        </Form>
        <div className={style.container2}>
          <OpenChallenges
            display={this.state.filter}
            challengeProgress={this.state.progress.challengeProgress}
          />
        </div>
      </div>
    );
  }
}

export default Statistics;

/*ChallengeList */
const OpenChallenges = (props) => {
  const [state, setState] = useState([]);
  useEffect(() => {
    Axios.get("http://localhost:3001/api/getAllChallenges")
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
                <td>#{val.idchallenges}</td>
                <td style={{ color: "darkblue" }}>
                  <img src={challenge} alt="" className={style.avatar2} />
                  {val.titel}
                </td>
                <td>{val.anzahl}</td>
                <td style={{ color: "darkblue" }}>
                  <img src={belohnung} alt="" className={style.avatar2} />
                  {val.belohnung}
                </td>
                <td>
                  {Moment(
                    new Date(val.ende)
                      .toISOString()
                      .slice(0, 19)
                      .replace("T", " ")
                  ).format("DD.MM.YYYY")}
                </td>
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
                <td>Belohnung</td>
                <td>Abgeschlossen am</td>
              </tr>
              {solvedChallenge.map((val) => (
                <tr>
                  <td>#{val.idchallenges}</td>
                  <td style={{ color: "darkblue" }}>
                    <img src={challenge} alt="" className={style.avatar2} />
                    {val.titel}
                  </td>
                  <td>
                    <img src={belohnung} alt="" className={style.avatar2} />
                    {val.belohnung}
                  </td>
                  <td>
                    {" "}
                    {Moment(
                      new Date(val.abgeschlossen_am)
                        .toISOString()
                        .slice(0, 19)
                        .replace("T", " ")
                    ).format("DD.MM.YYYY")}
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
