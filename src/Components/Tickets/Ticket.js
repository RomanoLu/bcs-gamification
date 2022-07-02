import React, { Component, useState} from "react";
import style from "./TicketsStyles.module.css";
import { FaRegWindowClose } from "react-icons/fa";
import { Table, Button, Form, Row, Col, Modal } from "react-bootstrap";
import Axios from "axios";
import Notify from "../Notify";
import ticket from "../Pictures/tickets.png";
import aufgaben from "../Pictures/Aufgaben.png";
import Moment from 'moment';


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
      descr: ""
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
          descr: this.state.descr
        }).then(() => {
          alert("Ticket succesfully created")
          console.log("succesfull insert");
        });
      }
    };

    return (
      <div className={style.popup}>
        <div className={style.popup_inner}>
          <div>
            <div style={{ marginLeft: "95%" }}> <button onClick={this.props.closePopup}><FaRegWindowClose></FaRegWindowClose></button></div>
            <h4 style={{ marginLeft: "9.8%" }}>Ticket erstellen </h4>

          </div>
          <hr></hr>
          <Form>
            <fieldset>
              <div className={style.parent}>
                <div className={style.div2}>
                  {/*Priorität*/}
                  <Form.Group className="mb-3">
                    <Form.Label htmlFor="disabledSelect">
                      Priorität (intern)
                    </Form.Label>
                    <Form.Select
                      style={{ backgroundColor: "#d5e8f6" }}
                      id="disabledSelect"
                      onChange={(e) => {
                        this.setState({ prio: e.target.value });
                      }}
                    >
                      <option style={{ backgroundColor: "#f0f9ff" }}>
                        Maximal
                      </option>
                      <option
                        style={{
                          color: "#FF0000",
                          backgroundColor: "#f0f9ff",
                        }}
                      >
                        Sehr Hoch
                      </option>
                      <option
                        style={{
                          color: "#AA0000",
                          backgroundColor: "#f0f9ff",
                        }}
                      >
                        Hoch
                      </option>
                      <option style={{ backgroundColor: "#f0f9ff" }}>
                        Normal
                      </option>
                      <option
                        style={{
                          color: "#c7c7c7",
                          backgroundColor: "#f0f9ff",
                        }}
                      >
                        Niedrig
                      </option>
                    </Form.Select>
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Label htmlFor="disabledTextInput">
                      Beschreibung
                    </Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      placeholder="Beschreibung"
                      className={style.tfstyle2}
                      onChange={(e) => {
                        this.setState({ descr: e.target.value });
                      }}
                    />
                    <br />
                    <Row>
                      <Col></Col>
                      <Col>
                        <Button
                          variant="primary"
                          onClick={submit}
                          style={{ marginLeft: "70%" }}
                        >
                          Erstellen
                        </Button>
                      </Col>
                    </Row>
                  </Form.Group>
                </div>
                <div className={style.div1}>
                  <Form.Group className="mb-3">
                    <Form.Label htmlFor="disabledTextInput">
                      Betreff
                    </Form.Label>
                    <Form.Control
                      id="disabledTextInput"
                      placeholder="Betreff"
                      className={style.tfstyle}
                      onChange={(e) => {
                        this.setState({ betreff: e.target.value });
                      }}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label htmlFor="disabledTextInput">Bezug</Form.Label>
                    <Form.Control
                      id="disabledTextInput"
                      placeholder="Bezug"
                      className={style.tfstyle}
                      onChange={(e) => {
                        this.setState({ bezug: e.target.value });
                      }}
                    />
                  </Form.Group>
                  {/*Ticketart*/}
                  <Form.Group className="mb-3">
                    <Form.Label htmlFor="disabledTextInput">
                      Ticketart
                    </Form.Label>
                    <Form.Select
                      id="disabledSelect"
                      style={{ backgroundColor: "#d5e8f6" }}
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
                  {/*Status*/}
                  <Form.Group className="mb-3">
                    <Form.Label htmlFor="disabledSelect">Status</Form.Label>
                    <Form.Select
                      style={{ backgroundColor: "#d5e8f6" }}
                      id="disabledSelect"
                      onChange={(e) => {
                        this.setState({ sta: e.target.value });
                      }}
                    >
                      {/*TODO Entweder zeit in Db ändern oder wir müssen hier system zeit nehmen und dann mit den optionen verrechnen und das ergebnis schreiben*/}
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
                        style={{
                          color: "purple",
                          backgroundColor: "#f0f9ff",
                        }}
                      >
                        Klärung
                      </option>
                      <option style={{ backgroundColor: "#f0f9ff" }}>
                        Absprache
                      </option>
                      <option
                        style={{
                          color: "purple",
                          backgroundColor: "#f0f9ff",
                        }}
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
                </div>
              </div>
            </fieldset>
          </Form>
        </div>
      </div>
    );
  }
}

class Ticket extends Component {
  constructor() {
    super();
    this.state = {
      alert: false,
      showPopup: false,
      showNeu: false,
      showBearbeiten: false,
      checked: 0,
      ticketsList: [],
      currentBetreff: "",
      currentArt:"Fehler",
      currentStatus: "Neu",
      currentPrio: "Normal",
      currentDescription: "",
      currentBezug: "",
      currentID: ""
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
      showPopup: !this.state.showPopup,
    });
  }

  togglePopup2() {
    this.setState({
      alert: true,
      showBearbeiten: false,
    });
  }

  render() {
    
    const openNeu = () => {
      this.setState({ showNeu: true })
    }
    const closeNeu = () => {
      this.setState({ showNeu: false });
    }
    const submitNeu = () => {

    }
    const openBearbeiten = () => {
      this.setState({ showBearbeiten: true })
    }
    const closeBearbeiten = () => {
      this.setState({ showBearbeiten: false });
      this.setState({ checked: 0 });
    }
    const submitBearbeiten = () => {
      if (this.state.currentStatus === "Geschlossen") {
        //Hier GIF einfügen
        this.setState({ alert: true });
        closeBearbeiten();
        Axios.post("http://localhost:3001/api/deleteTicket", {
          idTickets: this.state.currentID
        }).then(() => {
          console.log("succesfull insert");
        });
        this.setState({ticketsList: this.state.ticketsList.filter(item => item.idTickets !== this.state.currentID)})
        //Dannach das Fenster schließen
      } else {
        Axios.post("http://localhost:3001/api/updateTicket", {
          betreff: this.state.currentBetreff,
          bezug: this.state.currentBezug,
          prio: this.state.currentPrio,
          status: this.state.currentStatus,
          id: this.state.currentID
        }).then(() => {
          console.log("succesfull insert");
        });
        
        this.setState({ticketsList:         this.state.ticketsList.map(item => {
          if(item.idTickets === this.state.currentID) {
            return {...item, Betreff: this.state.currentBetreff, Bezug: this.state.currentBezug, Status: this.state.currentStatus,
            Priorität: this.state.currentPrio}
          }
          else {
            return{...item}
          }
        })})
        closeBearbeiten();
      }
      Axios.post("http://localhost:3001/api/insertInteraction", {
        aktion: "Tickets_"+this.state.currentStatus.toString(),
      }).then(() => {
        console.log("succesfull insert");
      });
    };
    return (
      <div className={style.container}>
        {this.state.alert ? 
              <Notify />
        : null
        }
        <h2 style={{ marginLeft: "3%" }}>Meine Tickets: Alle meine Tickets</h2>


        <Form style={{ marginLeft: "3.8%" }}>
          <Row>

            <Form.Select size="sm" className={style.dropdowns}>
              <option>Zeitraum</option>
            </Form.Select>

            <Form.Select size="sm" className={style.dropdowns}>
              <option>Eingang</option>
              <option>Wunschtermin(Kunde)</option>
              <option>Termin</option>
              <option>Eingefügt</option>
              <option>Aktualisiert am</option>
            </Form.Select>

            <Form.Select size="sm" className={style.dropdowns} >
              <option>Gesamt</option>
              <option>Jahr</option>
              <option>Geschäftsjahr</option>
              <option>Quartal</option>
              <option>Monat</option>
            </Form.Select>

          </Row>
        </Form>
        <div className={style.buttons}>
          <Button className={style.newButton} onClick={openNeu}>
            <img
              src={ticket}
              alt=""
              className={style.avatar2}
            />
            Neu
          </Button>
        </div>
        <div className={style.container2}>
          <Table responsive="sm">
            <tbody>
              <tr className={style.secondhead}>
                <td style={{ width: "5%" }}></td>
                <td style={{ width: "5%" }}>ID</td>
                <td style={{ width: "25%" }}>Betreff</td>
                <td style={{ width: "10%" }}>Status</td>
                <td style={{ width: "5%" }}>Priorität</td>
                <td>Bezug</td>
                <td style={{ width: "15%" }}>Eingang</td>
              </tr>

              {this.state.ticketsList.map((val) => (
                <tr className={style.items}>
                  <td>
                    <Form.Check
                      type="checkbox"
                      id={val.idTickets}
                      checked={this.state.checked === val.idTickets}
                      onChange={(e) => {
                        this.setState({currentBetreff: val.Betreff})
                        this.setState({currentStatus: val.Status})
                        this.setState({currentPrio: val.Priorität})
                        this.setState({currentDescription: val.Beschreibung})
                        this.setState({currentBezug: val.Bezug})
                        this.setState({currentID : val.idTickets})
                        var i = val.idTickets;
                        this.setState({ checked: i });
                        this.setState({ showBearbeiten: true });                       
                      }}
                    />
                  </td>
                  <td> #{val.idTickets}</td>
                  <td>
                    <img
                      src={ticket}
                      alt=""
                      className={style.avatar2}
                    />
                    <a href="/bearbeiten"> {val.Betreff}</a>
                  </td>


                  {(() => {
                    if (val.Status === "Neu") {
                      return (
                        <td style={{ color: "blue" }}>{val.Status}</td>
                      )
                    } else if (val.Status === "Gesichtet") {
                      return (
                        <td style={{ color: "red" }}>{val.Status}</td>
                      )
                    } else if (val.Status === "Klärung") {
                      return (
                        <td >{val.Status}</td>
                      )
                    } else if (val.Status === "Absprache") {
                      return (
                        <td >{val.Status}</td>
                      )
                    } else if (val.Status === "Angeboten") {
                      return (
                        <td style={{ color: "red" }}>{val.Status}</td>
                      )
                    } else if (val.Status === "Aufgenommen") {
                      return (
                        <td >{val.Status}</td>
                      )
                    } else if (val.Status === "Eingeplant") {
                      return (
                        <td>{val.Status}</td>
                      )
                    } else if (val.Status === "Bearbeitung") {
                      return (
                        <td>{val.Status}</td>
                      )
                    } else if (val.Status === "Abnahme") {
                      return (
                        <td style={{ color: "green" }}>{val.Status}</td>
                      )
                    }
                    else if (val.Status === "Geschlossen") {
                      return (
                        <td style={{ color: "green" }}>{val.Status}</td>
                      )
                    } else {
                      return (
                        <td style={{ color: "red" }}>{val.Status}</td>
                      )
                    }
                  })()}


                  {(() => {
                    if (val.Priorität === "Hoch") {
                      return (
                        <td style={{ color: "#f0f9ff" }}>{val.Priorität}</td>
                      )
                    } else if (val.Priorität === "Sehr Hoch") {
                      return (
                        <td style={{ color: "#FF0000" }}>{val.Priorität}</td>
                      )
                    } else if (val.Priorität === "Maximal") {
                      return (
                        <td>{val.Priorität}</td>
                      )
                    } else if (val.Priorität === "Normal") {
                      return (
                        <td>{val.Priorität}</td>
                      )
                    }
                    else {
                      return (
                        <td style={{ color: "#f0f9ff" }}>{val.Priorität}</td>
                      )
                    }
                  })()}

                  <td>
                    <img
                      src={aufgaben}
                      alt=""
                      className={style.avatar2}
                    />
                    {val.Bezug}</td>
                  <td>
                    {Moment(new Date(val.Erstellt_am)
                      .toISOString()
                      .slice(0, 19)
                      .replace("T", " ")).format('DD.MM.YYYY')
                    }
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
        {/*Modal - Neues Ticket anlegen */}
        <Modal size="lg" show={this.state.showNeu} onHide={closeNeu} centered>
          <Modal.Header closeButton onClick={closeBearbeiten}>
            <Modal.Title><img
                      src={ticket}
                      alt=""
                      className={style.avatar}
                    />Ticket anlegen</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form className={style.formcontainer}>
              <div className={style.parent}>
                <div className={style.div1}>
                  <Form.Group className={style.mb - 3} htmlFor="disabledTextInput">
                    <Form.Label> Betreff <span style={{ color: "red" }}>*</span></Form.Label>
                    <Form.Control
                        onChange={(e) => {
                        this.setState({ currentBetreff: e.target.value });
                      }} className={style.tfstyle} type="email" />
                      
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label htmlFor="disabledTextInput">
                      Ticketart
                    </Form.Label>
                    <Form.Select
                      id="disabledSelect"
                      style={{ backgroundColor: "#d5e8f6" }}
                      onChange={(e) => {
                        this.setState({ currentArt: e.target.value });
                      }}
                    >
                      {/*TODO Entweder zeit in Db ändern oder wir müssen hier system zeit nehmen und dann mit den optionen verrechnen und das ergebnis schreiben*/}
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
                    className="mb-3"
                    htmlFor="disabledTextInput"
                  >
                    <Form.Label>
                      Bezug <span style={{ color: "red" }}>*</span>
                    </Form.Label>
                    <Form.Control
                      onChange={(e) => {
                        this.setState({ currentBezug: e.target.value });
                      }}
                      className={style.tfstyle}
                      type="email"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label htmlFor="disabledSelect">Status</Form.Label>
                    <Form.Select
                      style={{ backgroundColor: "#d5e8f6" }}
                      id="disabledSelect"
                      onChange={(e) => {
                        this.setState({ currentStatus: e.target.value });
                      }}
                    >
                      {/*TODO Entweder zeit in Db ändern oder wir müssen hier system zeit nehmen und dann mit den optionen verrechnen und das ergebnis schreiben*/}
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
                        style={{
                          color: "purple",
                          backgroundColor: "#f0f9ff",
                        }}
                      >
                        Klärung
                      </option>
                      <option style={{ backgroundColor: "#f0f9ff" }}>
                        Absprache
                      </option>
                      <option
                        style={{
                          color: "purple",
                          backgroundColor: "#f0f9ff",
                        }}
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
                  <Form.Group className="mb-3">
                    <Form.Label htmlFor="disabledSelect">
                      Priorität (intern)
                    </Form.Label>
                    <Form.Select
                      style={{ backgroundColor: "#d5e8f6" }}
                      id="disabledSelect"
                      onChange={(e) => {
                        this.setState({ currentPrio: e.target.value });
                      }}
                      >
                      <option style={{ backgroundColor: "#f0f9ff" }}>
                        Maximal
                      </option>
                      <option
                        style={{
                          color: "#FF0000",
                          backgroundColor: "#f0f9ff",
                        }}
                      >
                        Sehr Hoch
                      </option>
                      <option
                        style={{
                          color: "#AA0000",
                          backgroundColor: "#f0f9ff",
                        }}
                      >
                        Hoch
                      </option>
                      <option style={{ backgroundColor: "#f0f9ff" }}>
                        Normal
                      </option>
                      <option
                        style={{
                          color: "#c7c7c7",
                          backgroundColor: "#f0f9ff",
                        }}
                      >
                        Niedrig
                      </option>
                    </Form.Select>
                  </Form.Group>
                </div>
                <div className="div2">
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Label htmlFor="disabledTextInput">
                      Beschreibung
                    </Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      placeholder="Beschreibung"
                      className={style.tfstyle2}
                      onChange={(e) => {
                        this.setState({ currentDescription: e.target.value });
                      }}                   
                      />
                  </Form.Group>
                </div>
              </div>
            </Form>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="primary" onClick={submitNeu}>Ticket anlegen</Button>
          </Modal.Footer>
        </Modal>

        {/*Modal - Ticket bearbeiten */}
        <Modal size="lg" show={this.state.showBearbeiten} onHide={closeBearbeiten} centered>
          <Modal.Header closeButton>
            <Modal.Title><img
                      src={ticket}
                      alt=""
                      className={style.avatar}
                    />Ticket aktualisieren</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form className={style.formcontainer}>
              <div className={style.parent}>
                <div className={style.div1}>
                  <Form.Group className="mb-3" htmlFor="disabledTextInput">
                    <Form.Label> Betreff <span style={{ color: "red" }}>*</span></Form.Label>
                    <Form.Control
                        defaultValue={this.state.currentBetreff}
                        onChange={(e) => {
                        this.setState({ currentBetreff: e.target.value });
                      }} className={style.tfstyle} type="email" />
                      
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label htmlFor="disabledTextInput">
                      Ticketart
                    </Form.Label>
                    <Form.Select
                      defaultValue={this.state.currentArt}
                      id="disabledSelect"
                      style={{ backgroundColor: "#d5e8f6" }}
                      onChange={(e) => {
                        this.setState({ currentArt: e.target.value });
                      }}
                    >
                      {/*TODO Entweder zeit in Db ändern oder wir müssen hier system zeit nehmen und dann mit den optionen verrechnen und das ergebnis schreiben*/}
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
                    className="mb-3"
                    htmlFor="disabledTextInput"
                  >
                    <Form.Label>
                      Bezug <span style={{ color: "red" }}>*</span>
                    </Form.Label>
                    <Form.Control
                      defaultValue={this.state.currentBezug}
                      onChange={(e) => {
                        this.setState({ currentBezug: e.target.value });
                      }}
                      className={style.tfstyle}
                      type="email"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label htmlFor="disabledSelect">Status</Form.Label>
                    <Form.Select
                      defaultValue={this.state.currentStatus}
                      style={{ backgroundColor: "#d5e8f6" }}
                      id="disabledSelect"
                      onChange={(e) => {
                        this.setState({ currentStatus: e.target.value });
                      }}
                    >
                      {/*TODO Entweder zeit in Db ändern oder wir müssen hier system zeit nehmen und dann mit den optionen verrechnen und das ergebnis schreiben*/}
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
                        style={{
                          color: "purple",
                          backgroundColor: "#f0f9ff",
                        }}
                      >
                        Klärung
                      </option>
                      <option style={{ backgroundColor: "#f0f9ff" }}>
                        Absprache
                      </option>
                      <option
                        style={{
                          color: "purple",
                          backgroundColor: "#f0f9ff",
                        }}
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
                  <Form.Group className="mb-3">
                    <Form.Label htmlFor="disabledSelect">
                      Priorität (intern)
                    </Form.Label>
                    <Form.Select
                      defaultValue={this.state.currentPrio}
                      style={{ backgroundColor: "#d5e8f6" }}
                      id="disabledSelect"
                      onChange={(e) => {
                        this.setState({ currentPrio: e.target.value });
                      }}
                      >
                      <option style={{ backgroundColor: "#f0f9ff" }}>
                        Maximal
                      </option>
                      <option
                        style={{
                          color: "#FF0000",
                          backgroundColor: "#f0f9ff",
                        }}
                      >
                        Sehr Hoch
                      </option>
                      <option
                        style={{
                          color: "#AA0000",
                          backgroundColor: "#f0f9ff",
                        }}
                      >
                        Hoch
                      </option>
                      <option style={{ backgroundColor: "#f0f9ff" }}>
                        Normal
                      </option>
                      <option
                        style={{
                          color: "#c7c7c7",
                          backgroundColor: "#f0f9ff",
                        }}
                      >
                        Niedrig
                      </option>
                    </Form.Select>
                  </Form.Group>
                </div>
                <div className="div2">
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Label htmlFor="disabledTextInput">
                      Beschreibung
                    </Form.Label>
                    <Form.Control
                      defaultValue={this.state.currentDescription}
                      as="textarea"
                      rows={3}
                      placeholder="Beschreibung"
                      className={style.tfstyle2}
                      onChange= {this.state.currentDescription}
                    />
                  </Form.Group>
                </div>
              </div>
            </Form>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="primary" onClick={submitBearbeiten}>Ticket aktualisieren</Button>
          </Modal.Footer>
        </Modal>











        {this.state.showPopup ? (
          <Popup text="Close Me" closePopup={this.togglePopup.bind(this)} />
        ) : null}
      </div>
    );
  }
}

export default Ticket;
