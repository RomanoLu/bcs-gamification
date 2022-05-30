import React, { Component, useState } from "react";
import style from "./Statistics.module.css";
import { FaAward } from "react-icons/fa";
import { Table, Dropdown, Button, Form } from "react-bootstrap";
import { ProgressBar } from "react-bootstrap";
import Axios from "axios";
import LineChart from "./LineChart";
import PieChart from "./PieChart";
import BarChart from "./BarChart";
/*
class Popup extends React.Component {
  constructor() {
    super();
    this.state = {
      showPopup: false,
      betreff: "",
      art: "Fehler",
      bezug: "",
      prio: "Normal",
      sta: "Neu",
    };
  }

  render() {
    const submit = () => {
      if (this.state.betreff === "" || this.state.bezug === "") {
        alert("Bitte füllen Sie alle Pflichtfelder aus!");
      } else {
        this.props.closePopup();
        Axios.post("http://localhost:3001/api/insertTicket", {
          betreff: this.state.betreff,
          bezug: this.state.bezug,
          prio: this.state.prio,
          sta: this.state.sta,
        }).then(() => {
          console.log("succesfull insert");
        });
      }
    };

    return (
      <div className={style.popup}>
        <div className={style.popup_inner}>
          <h4>Neues Ticket erstellen</h4>
          <hr></hr>
          <Form className={style.formcontainer}>
            <div className={style.parent}>
              <div className={style.div1}>
                <Form.Group
                  className={style.mb - 3}
                  htmlFor="disabledTextInput"
                >
                  <Form.Label>
                    Betreff <span style={{ color: "red" }}>*</span>
                  </Form.Label>
                  <Form.Control
                    onChange={(e) => {
                      this.setState({ betreff: e.target.value });
                    }}
                    className={style.tfstyle}
                    type="email"
                  />
                </Form.Group>

                <Form.Group className={style.mb - 3}>
                  <Form.Label htmlFor="disabledTextInput">
                    Ticketart <span style={{ color: "red" }}>*</span>
                  </Form.Label>

                  <Form.Select
                    id="disabledSelect"
                    onChange={(e) => {
                      this.setState({ art: e.target.value });
                    }}
                  >
                    <option style={{ backgroundColor: "#f0f9ff" }}>
                      Fehler
                    </option>
                    <option style={{ backgroundColor: "#f0f9ff" }}>
                      Anpassung
                    </option>
                    <option style={{ backgroundColor: "#f0f9ff" }}>
                      Dienstleistung
                    </option>
                    <option style={{ backgroundColor: "#f0f9ff" }}>
                      Offener Punkt
                    </option>
                    <option style={{ backgroundColor: "#f0f9ff" }}>
                      Vorschlag
                    </option>
                    <option style={{ backgroundColor: "#f0f9ff" }}>
                      Anfrage
                    </option>
                  </Form.Select>
                </Form.Group>
                <Form.Group
                  className={style.mb - 3}
                  htmlFor="disabledTextInput"
                >
                  <Form.Label>
                    Bezug <span style={{ color: "red" }}>*</span>
                  </Form.Label>
                  <Form.Control
                    onChange={(e) => {
                      this.setState({ bezug: e.target.value });
                    }}
                    className={style.tfstyle}
                    type="email"
                  />
                </Form.Group>
                <Form.Group className={style.mb - 3}>
                  <Form.Label>
                    Status <span style={{ color: "red" }}>*</span>
                  </Form.Label>

                  <Form.Select
                    id="disabledSelect"
                    onChange={(e) => {
                      this.setState({ sta: e.target.value });
                    }}
                  >
                    <option
                      style={{ color: "blue", backgroundColor: "#f0f9ff" }}
                    >
                      Neu
                    </option>
                    <option
                      style={{ color: "red", backgroundColor: "#f0f9ff" }}
                    >
                      Gesichtet
                    </option>
                    <option
                      style={{ color: "purple", backgroundColor: "#f0f9ff" }}
                    >
                      Klärung
                    </option>
                    <option style={{ backgroundColor: "#f0f9ff" }}>
                      Absprache
                    </option>
                    <option
                      style={{ color: "purple", backgroundColor: "#f0f9ff" }}
                    >
                      Angeboten
                    </option>
                    <option style={{ backgroundColor: "#f0f9ff" }}>
                      Aufgenommen
                    </option>
                    <option style={{ backgroundColor: "#f0f9ff" }}>
                      Eingeplant
                    </option>
                    <option
                      style={{ color: "red", backgroundColor: "#f0f9ff" }}
                    >
                      Bearbeitung
                    </option>
                    <option
                      style={{ color: "green", backgroundColor: "#f0f9ff" }}
                    >
                      Abnahme
                    </option>
                    <option
                      style={{ color: "green", backgroundColor: "#f0f9ff" }}
                    >
                      Geschlossen
                    </option>
                    <option style={{ backgroundColor: "#f0f9ff" }}>
                      Unbeantwortet
                    </option>
                    <option style={{ backgroundColor: "#f0f9ff" }}>
                      (Importiert)
                    </option>
                  </Form.Select>
                </Form.Group>
                <Form.Group className={style.mb - 3}>
                  <Form.Label>
                    Priorität (intern) <span style={{ color: "red" }}>*</span>
                  </Form.Label>

                  <Form.Select
                    id="disabledSelect"
                    onChange={(e) => {
                      this.setState({ prio: e.target.value });
                    }}
                  >
                    <option style={{ backgroundColor: "#f0f9ff" }}>
                      Maximal
                    </option>
                    <option
                      style={{ color: "#FF0000", backgroundColor: "#f0f9ff" }}
                    >
                      Sehr Hoch
                    </option>
                    <option
                      style={{ color: "#AA0000", backgroundColor: "#f0f9ff" }}
                    >
                      Hoch
                    </option>
                    <option style={{ backgroundColor: "#f0f9ff" }}>
                      Normal
                    </option>
                    <option
                      style={{ color: "#c7c7c7", backgroundColor: "#f0f9ff" }}
                    >
                      Niedrig
                    </option>
                  </Form.Select>
                </Form.Group>
              </div>
              <div className="div2">
                <Form.Group className={style.mb - 3} controlId="formBasicEmail">
                  <Form.Label>
                    Beschreibung <span style={{ color: "red" }}>*</span>
                  </Form.Label>
                  <Form.Control className="tfstyle2" type="email" />
                </Form.Group>
              </div>
            </div>
            <Button variant="primary" onClick={submit}>
              Submit
            </Button>
          </Form>
        </div>
      </div>
    );
  }
}
*/

class Statistics extends Component {
  constructor() {
    super();
    this.state = {
      alert: false,
      showPopup: false,
      ticketsList: [],
    };
  }

  componentDidMount() {
    Axios.get("http://localhost:3001/api/getTickets")
      .then((response) => {
        const ticketsList = response.data;
        this.setState({ ticketsList });
        console.log(this.state.ticketsList);
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
        {/*
        <div className={style.buttons}>
          <Button variant="light" onClick={this.togglePopup.bind(this)}>
            Neu
          </Button>{" "}
          <Button variant="primary">Bearbeiten</Button>{" "}
        </div>
        <Dropdown>
          <Dropdown.Toggle id="1" size="sm" variant="secondary">
            Zeitraum
          </Dropdown.Toggle>
          <Dropdown.Menu variant="dark1"></Dropdown.Menu>
          <Dropdown.Toggle id="2" size="sm" variant="secondary">
            Eingang
          </Dropdown.Toggle>

          <Dropdown.Menu variant="dark1">
            <Dropdown.Item href="#/action-1" active>
              Wunschtermin
            </Dropdown.Item>
            <Dropdown.Item href="#/action-2">Termin</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Eingefügt</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item href="#/action-4">Aktualisiert am</Dropdown.Item>
          </Dropdown.Menu>
          <Dropdown.Toggle id="3" size="sm" variant="secondary">
            Gesamt
          </Dropdown.Toggle>

          <Dropdown.Menu variant="dark2">
            <Dropdown.Item href="#/action-1" active>
              Jahr
            </Dropdown.Item>
            <Dropdown.Item href="#/action-2">Geschäftsjahr</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Quartal</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item href="#/action-4">Monat</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
    */}
        <div className={style.container2}>
          <Table responsive="sm">
            <tbody>
              <tr className={style.secondhead}>
                <td>ID</td>
                <td>Titel</td>
                <td>Belohnung</td>
                <td>Zeit</td>
                <td>Akzeptieren</td>
                <td>Fortschritt</td>
              </tr>
              <tr>
                <td>1</td>
                <td>SIUU</td>
                <td>Ein Date mit CR7</td>
                <td>3 Tage</td>
                <td>29.05.2022</td>
                <td>
                  {" "}
                  <span style={{ color: "green" }}>
                    <ProgressBar
                      striped
                      variant="success"
                      now={85}
                      label={"85%"}
                    />
                  </span>
                </td>
              </tr>
              {this.state.ticketsList.map((val) => (
                <tr className={style.items}>
                  <td>{val.idchallenges}</td>
                  <td>{val.titel}</td>
                  <td>{val.idbelohnung}</td>
                  <td>{val.zeit}</td>
                  <td>{val.fortschritt}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
        {/*
        {this.state.showPopup ? (
          <Popup text="Close Me" closePopup={this.togglePopup.bind(this)} />
        ) : null}
        */}

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
      </div>
    );
  }
}

export default Statistics;
