import React from "react";
import style from "./ProfileStyles.module.css";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import { BiCheckCircle } from "react-icons/bi";
import { ImInfo } from "react-icons/im";
import { Button, ProgressBar } from "react-bootstrap";

class Popup extends React.Component {
  render() {
    return (
      <div className={style.popup}>
        <div className={style.popup_inner}>
          <h4>Offene Badges</h4>
          <div className={style.popup_BadgeList}>
            <div className={style.Updates}>
              <div className={style.update}>
                <img
                  src="https://media-exp1.licdn.com/dms/image/C4D03AQEoIHMPNhI2BQ/profile-displayphoto-shrink_400_400/0/1593272066605?e=1655942400&v=beta&t=en7EBo-drD3KjfUgnA8OkoKOAzbfmeviHVRyq5DK7Uk"
                  alt=""
                  className={style.avatar}
                />
                <div className={style.noti}>
                  <div style={{ marginBottom: "0.5rem" }}>
                    <span>Rockstar</span> <br />
                    <span style={{ color: "grey" }}>
                      Resolved 50 Tickets, at the speed of light.
                    </span>{" "}
                    <br />
                    <span style={{ color: "green" }}>
                      <ProgressBar
                        striped
                        variant="success"
                        now={60}
                        label={"60%"}
                      />
                    </span>
                  </div>
                </div>
              </div>

              <div className={style.update}>
                <img
                  src="https://media-exp1.licdn.com/dms/image/C4D03AQEoIHMPNhI2BQ/profile-displayphoto-shrink_400_400/0/1593272066605?e=1655942400&v=beta&t=en7EBo-drD3KjfUgnA8OkoKOAzbfmeviHVRyq5DK7Uk"
                  alt=""
                  className={style.avatar}
                />
                <div className={style.noti}>
                  <div style={{ marginBottom: "0.5rem" }}>
                    <span>Rockstar</span> <br />
                    <span style={{ color: "grey" }}>
                      Resolved 50 Tickets, at the speed of light.
                    </span>{" "}
                    <br />
                    <span style={{ color: "green" }}>
                      <ProgressBar
                        striped
                        variant="success"
                        now={60}
                        label={"60%"}
                      />
                    </span>
                  </div>
                </div>
              </div>

              <div className={style.update}>
                <img
                  src="https://media-exp1.licdn.com/dms/image/C4D03AQEoIHMPNhI2BQ/profile-displayphoto-shrink_400_400/0/1593272066605?e=1655942400&v=beta&t=en7EBo-drD3KjfUgnA8OkoKOAzbfmeviHVRyq5DK7Uk"
                  alt=""
                  className={style.avatar}
                />
                <div className={style.noti}>
                  <div style={{ marginBottom: "0.5rem" }}>
                    <span>Rockstar</span> <br />
                    <span style={{ color: "grey" }}>
                      Resolved 50 Tickets, at the speed of light.
                    </span>{" "}
                    <br />
                    <span style={{ color: "green" }}>
                      <ProgressBar
                        striped
                        variant="success"
                        now={60}
                        label={"60%"}
                      />
                    </span>
                  </div>
                </div>
              </div>

              <div className={style.update}>
                <img
                  src="https://media-exp1.licdn.com/dms/image/C4D03AQEoIHMPNhI2BQ/profile-displayphoto-shrink_400_400/0/1593272066605?e=1655942400&v=beta&t=en7EBo-drD3KjfUgnA8OkoKOAzbfmeviHVRyq5DK7Uk"
                  alt=""
                  className={style.avatar}
                />
                <div className={style.noti}>
                  <div style={{ marginBottom: "0.5rem" }}>
                    <span>Rockstar</span> <br />
                    <span style={{ color: "grey" }}>
                      Resolved 50 Tickets, at the speed of light.
                    </span>{" "}
                    <br />
                    <span style={{ color: "green" }}>
                      <ProgressBar
                        striped
                        variant="success"
                        now={60}
                        label={"60%"}
                      />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={style.popupbtn}>
            <Button variant="primary" onClick={this.props.closePopup}>
              Schließe Fenster
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

class Profile extends React.Component {
  constructor() {
    super();
    this.state = {
      showPopup: false,
    };
  }
  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup,
    });
  }
  render() {
    return (<>   
    <div className={style.title}>
    <h3>Stammdaten</h3>
    </div>
       <div className={style.container}>  
        <div className={style.containeritems}>
          <Card className={style.cardleft}>
            <img
              src="https://media-exp1.licdn.com/dms/image/C4D03AQEoIHMPNhI2BQ/profile-displayphoto-shrink_400_400/0/1593272066605?e=1655942400&v=beta&t=en7EBo-drD3KjfUgnA8OkoKOAzbfmeviHVRyq5DK7Uk"
              alt=""
              className={style.avatar}
            />
            <Card.Body>
              <Card.Title>Fatih Kuruscu</Card.Title>
              <Card.Text></Card.Text>
            </Card.Body>
            <ListGroup className={style.listgroupflush}>
              <ListGroupItem>
                <h6>Adresse</h6>
                <p>
                  Hochschule Reutlingen <br />
                  Alteburgstraße 150 72145 Reutlingen
                </p>
              </ListGroupItem>
              <ListGroupItem>
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
          <div className={style.r1}>
            <div className={style.rl}>
              <h5 style={{ marginTop: "15px", marginLeft: "15px" }}>Badges</h5>
            </div>
            <div className={style.rl}>
              <ImInfo
                size={20}
                onClick={this.togglePopup.bind(this)}
                style={{ marginTop: "10px" }}
              />
            </div>
          </div>

          <div className={style.BadgeList}>
            <div className={style.Updates}>
              <div className={style.update}>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/616/616285.png"
                  alt=""
                  className={style.avatar}
                />
                <div className={style.noti}>
                  <div style={{ marginBottom: "0.5rem" }}>
                    <span>Rockstar</span> <br />
                    <span style={{ color: "grey" }}>
                      Resolved 50 Tickets, at the speed of light.
                    </span>{" "}
                    <br />
                    <span style={{ color: "green" }}>
                      <BiCheckCircle /> Achieved on: 02.05.2022
                    </span>
                  </div>
                </div>
              </div>

              <div className={style.update}>
                <img
                  src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F001%2F192%2F226%2Foriginal%2Fmusic-circle-icon-guitar-png.png&f=1&nofb=1"
                  alt=""
                  className={style.avatar}
                />
                <div className={style.noti}>
                  <div style={{ marginBottom: "0.5rem" }}>
                    <span>Rockstar</span> <br />
                    <span style={{ color: "grey" }}>
                      Resolved 50 Tickets, at the speed of light.
                    </span>{" "}
                    <br />
                    <span style={{ color: "green" }}>
                      <BiCheckCircle /> Achieved on: 02.05.2022
                    </span>
                  </div>
                </div>
              </div>

              <div className={style.update}>
                <img
                  src="https://media-exp1.licdn.com/dms/image/C4D03AQEoIHMPNhI2BQ/profile-displayphoto-shrink_400_400/0/1593272066605?e=1655942400&v=beta&t=en7EBo-drD3KjfUgnA8OkoKOAzbfmeviHVRyq5DK7Uk"
                  alt=""
                  className={style.avatar}
                />
                <div className={style.noti}>
                  <div style={{ marginBottom: "0.5rem" }}>
                    <span>Rockstar</span> <br />
                    <span style={{ color: "grey" }}>
                      Resolved 50 Tickets, at the speed of light.
                    </span>{" "}
                    <br />
                    <span style={{ color: "green" }}>
                      <BiCheckCircle /> Achieved on: 02.05.2022
                    </span>
                  </div>
                </div>
              </div>

              <div className={style.update}>
                <img
                  src="https://media-exp1.licdn.com/dms/image/C4D03AQEoIHMPNhI2BQ/profile-displayphoto-shrink_400_400/0/1593272066605?e=1655942400&v=beta&t=en7EBo-drD3KjfUgnA8OkoKOAzbfmeviHVRyq5DK7Uk"
                  alt=""
                  className={style.avatar}
                />
                <div className={style.noti}>
                  <div style={{ marginBottom: "0.5rem" }}>
                    <span>Rockstar</span> <br />
                    <span style={{ color: "grey" }}>
                      Resolved 50 Tickets, at the speed of light.
                    </span>{" "}
                    <br />
                    <span style={{ color: "green" }}>
                      <BiCheckCircle /> Achieved on: 02.05.2022
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr></hr>

          <div className={style.Medaille}>
            <h5 style={{ marginTop: "15px", marginLeft: "15px" }}>
              Wander-Medaille
            </h5>
            <div className={style.update}>
              <img
                src="https://media-exp1.licdn.com/dms/image/C4D03AQEoIHMPNhI2BQ/profile-displayphoto-shrink_400_400/0/1593272066605?e=1655942400&v=beta&t=en7EBo-drD3KjfUgnA8OkoKOAzbfmeviHVRyq5DK7Uk"
                alt=""
                className={style.avatar}
              />
              <div className={style.noti}>
                <div style={{ marginBottom: "0.5rem", marginLeft: "15px" }}>
                  <span>Rockstar</span> <br />
                  <span style={{ color: "grey" }}>
                    Resolved 50 Tickets, at the speed of light.
                  </span>{" "}
                  <br />
                  <span style={{ color: "green" }}>
                    <BiCheckCircle /> Achieved on: 02.05.2022
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {this.state.showPopup ? (
          <Popup text="Close Me" closePopup={this.togglePopup.bind(this)} />
        ) : null}
      </div>

      <div className={style.containerunten}>
        <div  className={style.oben}>
          <p>Externe Personensuche</p>
          </div>
          <div className={style.unten}>
          <a href="" >Person in Google suchen  </a>
          <a href="">Person in Xing suchen  </a>
          <a href="">Adresse in Google Maps  </a>
          </div>
      </div>


      <hr></hr>


      </>

    );
  }
}

export default Profile;
