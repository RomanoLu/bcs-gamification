import React from "react";
import { Table, Modal, Button } from "react-bootstrap";
import style from "./AufgabenStyles.module.css";
import Axios from "axios";
import { FcCheckmark, FcCancel } from "react-icons/fc";
import challenge from "../Pictures/ChallengeIcon.png";
import belohnung from "../Pictures/belohnung.png";


class Challenge extends React.Component {
  constructor() {
    super();
    this.state = {
      challengeList: [],
      show: false,
      selectedItem: [],
      showDelete: false
    };
  }

  componentDidMount() {
    Axios.get("http://localhost:3001/api/getChallenges")
      .then((response) => {
        const challengeList = response.data;
        this.setState({ challengeList });
        console.log(this.state.challengeList);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  onSelectedRow(user, clickEvent) {
    this.setState({ selectedItem: user });
  }

  render() {
    const accept_Challenge = () => {
      this.setState({ show: true });
    };
    const delete_Challenge = () => {
      this.setState({showDelete: true});
    };

    const deny_Challenge = () => {
      Axios.post("http://localhost:3001/api/selectedChallenge", {
        id: this.state.selectedItem.idchallenges,
        zeitspanne: 0,
        angenommen: false,
      }).then(() => {
        console.log("succesfull insert");
      });
      const newList = this.state.challengeList.filter(
        (item) => item.idchallenges !== this.state.selectedItem.idchallenges
      );
      this.setState({ challengeList: newList });
      this.setState({ showDelete: false});
    };

    const handleCloseDeny = () => this.setState({ show: false });
    const handleCloseDelete = () => this.setState({showDelete: false});

    
    const handleCloseAccept = () => {
      this.setState({ show: false });

      Axios.post("http://localhost:3001/api/selectedChallenge", {
        id: this.state.selectedItem.idchallenges,
        zeitspanne: this.state.selectedItem.zeit,
        angenommen: true,
      }).then(() => {
        console.log("succesfull insert");
      });
      const newList = this.state.challengeList.filter(
        (item) => item.idchallenges !== this.state.selectedItem.idchallenges
      );
      this.setState({ challengeList: newList });
    };

    return (
      <div className={style.container}>
        <div className={style.aufgaben}>
          <Table responsive="sm">
            <caption className={style.caption}>Challenges</caption>
            <tbody>
              <tr className={style.secondhead}>
                <td style={{ width: "5%" }}>ID</td>
                <td>Titel</td>
                <td>Belohnung</td>
                <td>Zeit</td>
                <td>Akzeptieren</td>
                <td>Ablehnen</td>
              </tr>
              {this.state.challengeList.map((val) => (
                <tr onClick={this.onSelectedRow.bind(this, val)}>
                  <td style={{color: "black"}}>#{val.idchallenges}</td>
                  <td>                  
                    <img
                    src={challenge}
                    alt=""
                    className= {style.avatar2}
                    /> {val.titel}</td>
                  <td>
                    <img
                    src={belohnung}
                    alt=""
                    className= {style.avatar2}
                    />{val.idbelohnung}</td>
                  <td style = {{color: "black"}}>{val.zeit} Tage</td>
                  <td>
                    <button onClick={accept_Challenge}>
                      <FcCheckmark size={20} />
                    </button>
                  </td>
                  <td>
                    <button onClick={delete_Challenge}>
                      <FcCancel size={20} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>

        <Modal show={this.state.show} onHide={handleCloseDeny}>
          <Modal.Header closeButton>
            <img
              src= {challenge}
              alt=""
              className={style.avatar}
            />
            <Modal.Title>Challenge</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              <h5>Titel</h5>
              <p>{this.state.selectedItem.titel}</p>
              <h5>Beschreibung</h5>
              <p>{this.state.selectedItem.beschreibung}</p>
              <h5>Belohnung </h5>
              <p>{this.state.selectedItem.idbelohnung}</p>
              <h5>Zeit</h5>
              <p>{this.state.selectedItem.zeit} Tage</p>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseDeny}>
              Vielleicht ein andermal..
            </Button>
            <Button variant="primary" onClick={handleCloseAccept}>
              Challenge akzeptieren
            </Button>
          </Modal.Footer>
        </Modal>


        <Modal show={this.state.showDelete} onHide={handleCloseDelete}>
        <Modal.Header closeButton>
        <img
              src= {challenge}
              alt=""
              className={style.avatar}
            />
          <Modal.Title>Challenge löschen</Modal.Title>
        </Modal.Header>
        <Modal.Body>Möchten Sie die Challenge wirklich löschen?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseDelete}>
            Nein
          </Button>
          <Button variant="primary" onClick={deny_Challenge}>
            Ja
          </Button>
        </Modal.Footer>
      </Modal>
      </div>
    );
  }
}

export default Challenge;
