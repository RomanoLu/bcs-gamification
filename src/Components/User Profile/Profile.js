import React from "react";
import style from "./ProfileStyles.module.css";
import kalender from "../Pictures/Kalender.png";
import einstein from "../Pictures/einstein.png";
import checkliste from "../Pictures/checkliste.png";
import berg from "../Pictures/berg.png";
import trophy from "../Pictures/trophy.png";
import badge from "../Pictures/badgeforbadge.png";
import ticketbadge from "../Pictures/ticketbadge.png";
import herausforderung from "../Pictures/herausforderung.png";
import zeiterfassung from "../Pictures/zeiterfassung.png";
import wiedervorlagen from "../Pictures/wiedervorlagenbadge.png";
import { Card, ListGroup, ListGroupItem, Modal } from "react-bootstrap";
import { BiCheckCircle } from "react-icons/bi";
import { ImInfo } from "react-icons/im";
import { Button, ProgressBar } from "react-bootstrap";

class Profile extends React.Component {
  constructor() {
    super();
    this.state = {
      showPopup: false,
      show: false,
    };
  }
  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup,
    });
  }
  render() {
    const handleClose = () => {
      this.setState({ show: false });
    };

    const handleShow = () => {
      this.setState({ show: true });
    };
    return (
      <>
        <div className={style.title}>
          <h3>Stammdaten</h3>
        </div>
        <div className={style.container}>
          <div className={style.containeritems}>
            <Card className={style.cardleft}>
              <img
                src="https://profile-images.xing.com/images/4a6cc053bd0c65e3ecd609eb3f39188c-1/fatih-kuruscu.1024x1024.jpg"
                alt=""
                className={style.avatar}
              />
              <Card.Body>
                <Card.Title>Fatih Kuruscu</Card.Title>
                <Card.Text></Card.Text>
              </Card.Body>
              <ListGroup>
                <ListGroupItem className={style.listgroupflush}>
                  <h6>Adresse</h6>
                  <p>
                    Hochschule Reutlingen <br />
                    Alteburgstra??e 150 72145 Reutlingen
                  </p>
                  <h6>Telefon</h6>
                  <p>
                    07478 110
                    <br />
                  </p>
                  <h6>Mobiltelefon</h6>
                  <p>
                    +49 17670112531
                    <br />
                  </p>
                  <h6>E-Mail</h6>
                  <p>
                    fatih.kuruscu@student.reutlingen-university.de
                    <br />
                  </p>
                </ListGroupItem>
              </ListGroup>
            </Card>
          </div>

          <div className={style.containeritems}>
            <div className={style.Medaille}>
              <h5 style={{ marginTop: "15px", marginLeft: "15px" }}>
                Medaillen
              </h5>
              <div
                style={{ marginLeft: "10px", marginRight: "10px" }}
                className={style.update}
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/6554/6554493.png"
                  alt=""
                  className={style.avatar}
                />
                <div className={style.noti}>
                  <div style={{ marginBottom: "0.5rem", marginLeft: "15px" }}>
                    <span>Flei??igster Arbeiter</span> <br />
                    <span style={{ color: "grey" }}>
                      Mitarbeiter mit den meisten offenen Tickets
                    </span>{" "}
                    <br />
                    <span style={{ color: "green" }}>
                      <BiCheckCircle /> Verdient am: 02.05.2022
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className={style.r1}>
              <h5 style={{ marginTop: "15px", marginLeft: "15px" }}>Badges</h5>
              <div className={style.rl}>
                <ImInfo
                  size={20}
                  onClick={handleShow}
                  style={{ marginTop: "10px", marginRight: "7px" }}
                />
              </div>
            </div>

            <div className={style.BadgeList}>
              <div className={style.Updates}>
                <div className={style.update}>
                  <img src={badge} alt="" className={style.avatar} />
                  <div className={style.noti}>
                    <div style={{ marginBottom: "0.5rem" }}>
                      <span>Badge-Sammler</span> <br />
                      <span style={{ color: "grey" }}>
                        3 Badges erarbeitet
                      </span>{" "}
                      <br />
                      <span style={{ color: "green" }}>
                        <BiCheckCircle /> Verdient am: 30.04.2022
                      </span>
                    </div>
                  </div>
                </div>

                <div className={style.update}>
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/1503/1503170.png"
                    alt=""
                    className={style.avatar}
                  />
                  <div className={style.noti}>
                    <div style={{ marginBottom: "0.5rem" }}>
                      <span>Qualitativer Mitarbeiter</span> <br />
                      <span style={{ color: "grey" }}>
                        ??ber 20 Tickets abgeschlossen mit einer
                        durchschnittlichen Bewertung von mindestens 4,5
                      </span>{" "}
                      <br />
                      <span style={{ color: "green" }}>
                        <BiCheckCircle /> Verdient am: 30.04.2022
                      </span>
                    </div>
                  </div>
                </div>

                <div className={style.update}>
                  <img src={herausforderung} alt="" className={style.avatar} />
                  <div className={style.noti}>
                    <div style={{ marginBottom: "0.5rem" }}>
                      <span>Herausforderer</span> <br />
                      <span style={{ color: "grey" }}>
                        ??ber 5 abgeschlossene Challenges
                      </span>{" "}
                      <br />
                      <span style={{ color: "green" }}>
                        <BiCheckCircle /> Verdient am: 12.01.2022
                      </span>
                    </div>
                  </div>
                </div>
                <div className={style.update}>
                  <img src={zeiterfassung} alt="" className={style.avatar} />
                  <div className={style.noti}>
                    <div style={{ marginBottom: "0.5rem" }}>
                      <span>Einsteiger: Zeiterfassung</span> <br />
                      <span style={{ color: "grey" }}>
                        In einer Woche mehr als 15 Stunden mit der Stoppuhr
                        erfasst
                      </span>{" "}
                      <br />
                      <span style={{ color: "green" }}>
                        <BiCheckCircle /> Verdient am: 02.12.2021
                      </span>
                    </div>
                  </div>
                </div>
                <div className={style.update}>
                  <img src={ticketbadge} alt="" className={style.avatar} />
                  <div className={style.noti}>
                    <div style={{ marginBottom: "0.5rem" }}>
                      <span>Einsteiger: Tickets </span> <br />
                      <span style={{ color: "grey" }}>
                        2 Tickets am selben Tag geschlossen
                      </span>{" "}
                      <br />
                      <span style={{ color: "green" }}>
                        <BiCheckCircle /> Verdient am: 30.11.2021
                      </span>
                    </div>
                  </div>
                </div>
                <div className={style.update}>
                  <img src={wiedervorlagen} alt="" className={style.avatar} />
                  <div className={style.noti}>
                    <div style={{ marginBottom: "0.5rem" }}>
                      <span>Einsteiger: Wiedervorlagen </span> <br />
                      <span style={{ color: "grey" }}>
                        5 Wiedervorlagen erstellt
                      </span>{" "}
                      <br />
                      <span style={{ color: "green" }}>
                        <BiCheckCircle /> Verdient am: 28.11.2021
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={style.containerunten}>
          <div className={style.oben}>
            <p>Externe Personensuche</p>
          </div>
          <div className={style.unten}>
            <a href="">Person in Google suchen </a>
            <a href="">Person in Xing suchen </a>
            <a href="">Adresse in Google Maps </a>
          </div>
        </div>

        <Modal show={this.state.show} onHide={handleClose}>
          <Modal.Header closeButton>
            <img src={trophy} alt="" className={style.avatar2} />
            <Modal.Title>Offene Badges</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className={style.popupBadgeList}>
              <div className={style.Updates}>
                <div className={style.update}>
                  <img src={einstein} alt="" className={style.avatar} />
                  <div className={style.noti}>
                    <div style={{ marginBottom: "0.5rem" }}>
                      <span>Albert Einstein</span> <br />
                      <span style={{ color: "grey" }}>
                        10 Tickets geschlossen, die ??lter als 6 Monate sind.
                      </span>{" "}
                      <br />
                      <span style={{ color: "green" }}>
                        <ProgressBar
                          style={{ width: "300px" }}
                          striped
                          variant="success"
                          now={20}
                          label={"20%"}
                        />
                      </span>
                    </div>
                  </div>
                </div>

                <div className={style.update}>
                  <img src={berg} alt="" className={style.avatar} />
                  <div className={style.noti}>
                    <div style={{ marginBottom: "0.5rem" }}>
                      <span>King of the Hill</span> <br />
                      <span style={{ color: "grey" }}>
                        In einem Jahr 100 Tickets geschlossen
                      </span>
                      <br />
                      <span style={{ color: "green" }}>
                        <ProgressBar
                          style={{ width: "300px" }}
                          striped
                          variant="success"
                          now={32}
                          label={"32%"}
                        />
                      </span>
                    </div>
                  </div>
                </div>

                <div className={style.update}>
                  <img src={kalender} alt="" className={style.avatar} />
                  <div className={style.noti}>
                    <div style={{ marginBottom: "0.5rem" }}>
                      <span>Einsteiger: Kalender</span> <br />
                      <span style={{ color: "grey" }}>
                        20 Termine im Kalender eingetragen.
                      </span>{" "}
                      <br />
                      <span style={{ color: "green" }}>
                        <ProgressBar
                          style={{ width: "300px" }}
                          striped
                          variant="success"
                          now={50}
                          label={"50%"}
                        />
                      </span>
                    </div>
                  </div>
                </div>

                <div className={style.update}>
                  <img src={checkliste} alt="" className={style.avatar} />
                  <div className={style.noti}>
                    <div style={{ marginBottom: "0.5rem" }}>
                      <span>Abchecker</span> <br />
                      <span style={{ color: "grey" }}>
                        3 Checklisteneintr??ge in einer Woche abgeschlossen
                      </span>{" "}
                      <br />
                      <span style={{ color: "green" }}>
                        <ProgressBar
                          style={{ width: "300px" }}
                          striped
                          variant="success"
                          now={67}
                          label={"67%"}
                        />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={handleClose}>
              Schlie??en
            </Button>
          </Modal.Footer>
        </Modal>

        <hr></hr>
      </>
    );
  }
}

export default Profile;
