import React, { Component } from "react";
import style from "./TicketsStyles.module.css";
import { FaAward, FaRegWindowClose } from "react-icons/fa";
import { Table, Button, Form, Row, Col, Modal } from "react-bootstrap";
import Axios from "axios";
import Confetti from "./Confetti";
import Confetti2 from "react-confetti";
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

class Bearbeiten extends React.Component {
  constructor() {
    super();
    this.state = {
      showBearbeiten: false,
      alert: false,
    };
  }

  render() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const submit = () => {
      if (this.state.sta === "Geschlossen") {
        //Hier GIF einfügen
        this.setState({ alert: true });
        this.props.closePopup();
        //Dannach das Fenster schließen
      } else {
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

      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>

        <Modal.Body>
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
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary">Close</Button>
          <Button variant="primary">Save changes</Button>
        </Modal.Footer>
      </Modal.Dialog>
      
    );
  }
}

class Ticket extends Component {
  constructor() {
    super();
    this.state = {
      alert: false,
      showPopup: false,
      showBearbeiten: false,
      checked: 0,
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
    return (
      <div className={style.container}>
        <div style={{ marginLeft: "400px", zIndex: "5", position: "fixed" }}>
          {this.state.alert ? <Notify /> : null}
        </div>
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
          <Button className={style.newButton} onClick={this.togglePopup.bind(this)}>
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
                        var i = val.idTickets;
                        this.setState({ checked: i });
                        this.setState({ showBearbeiten: true });
                        //ToDo hier muss eine Componente namens "Bearbeiten" geöffnet werden und val.idTickets mitgegeben werden
                      }}
                    />
                  </td>
                  <td> #{val.idTickets}</td>
                  <td>
                    <i>
                      <FaAward />
                    </i>
                    <a href="/bearbeiten"> {val.Betreff}</a>
                  </td>


                  {(() => {
                    if (val.Status == "Neu") {
                      return (
                        <td style={{ color: "blue" }}>{val.Status}</td>
                      )
                    } else if (val.Status == "Gesichtet") {
                      return (
                        <td style={{ color: "red" }}>{val.Status}</td>
                      )
                    } else if (val.Status == "Klärung") {
                      return (
                        <td >{val.Status}</td>
                      )
                    } else if (val.Status == "Absprache") {
                      return (
                        <td >{val.Status}</td>
                      )
                    } else if (val.Status == "Angeboten") {
                      return (
                        <td style={{ color: "red" }}>{val.Status}</td>
                      )
                    } else if (val.Status == "Aufgenommen") {
                      return (
                        <td >{val.Status}</td>
                      )
                    } else if (val.Status == "Eingeplant") {
                      return (
                        <td>{val.Status}</td>
                      )
                    } else if (val.Status == "Bearbeitung") {
                      return (
                        <td>{val.Status}</td>
                      )
                    } else if (val.Status == "Abnahme") {
                      return (
                        <td style={{ color: "green" }}>{val.Status}</td>
                      )
                    }
                    else if (val.Status == "Geschlossen") {
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
                    if (val.Priorität == "Hoch") {
                      return (
                        <td style={{ color: "#f0f9ff" }}>{val.Priorität}</td>
                      )
                    } else if (val.Priorität == "Sehr Hoch") {
                      return (
                        <td style={{ color: "#FF0000" }}>{val.Priorität}</td>
                      )
                    } else if (val.Priorität == "Maximal") {
                      return (
                        <td>{val.Priorität}</td>
                      )
                    } else if (val.Priorität == "Normal") {
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
        {this.state.showPopup ? (
          <Popup text="Close Me" closePopup={this.togglePopup.bind(this)} />
        ) : null}
        {this.state.showBearbeiten ? (
          <Bearbeiten closePopup={this.togglePopup2.bind(this)} />
        ) : null}
      </div>
    );
  }
}

export default Ticket;
