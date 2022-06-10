import React from "react";
import { Table, Modal, Button } from "react-bootstrap";
import style from "./AufgabenStyles.module.css";
import Axios from 'axios';
import { FcCheckmark, FcCancel } from "react-icons/fc";
import { GrAchievement} from "react-icons/gr";
import { useRowSelect } from 'react-table';



class Challenge extends React.Component {

  constructor() {
    super();
    this.state = {
        challengeList: [],
        show: false,
        selectedItem: []
    };
  }

  componentDidMount() {
    Axios.get('http://localhost:3001/api/getChallenges')
    .then(response => {
        const challengeList = response.data;
        this.setState({ challengeList});
        console.log(this.state.challengeList)
    }
    ).catch(function(error) {
        console.log(error);
      });
  }
  
  onSelectedRow(user, clickEvent){
    this.setState({selectedItem: user})
  }

 render() {
   const accept_Challenge = () =>{
    this.setState({ show: true })
   }

   const deny_Challenge = () =>{
    Axios.post('http://localhost:3001/api/selectedChallenge', { 
      id: this.state.selectedItem.idchallenges, 
      zeitspanne: 0, 
      angenommen: false}).then(() => {
      console.log("succesfull insert");
  });
  const newList = this.state.challengeList.filter((item) => item.idchallenges !== this.state.selectedItem.idchallenges);
  this.setState({challengeList: newList})
  }

  const handleCloseDeny = () => this.setState({ show: false });
  const handleCloseAccept = () =>  {
    this.setState({ show: false });

    Axios.post('http://localhost:3001/api/selectedChallenge', { 
      id: this.state.selectedItem.idchallenges, 
      zeitspanne: this.state.selectedItem.zeit, 
      angenommen: true}).then(() => {
      console.log("succesfull insert");
  });
  const newList = this.state.challengeList.filter((item) => item.idchallenges !== this.state.selectedItem.idchallenges);
  this.setState({challengeList: newList})
  }



  return (
    <div className={style.container}>
      <div className={style.aufgaben}>
        <Table responsive="sm">
          <thead className={style.test}>
            <tr>
              <th>Challenges</th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr className={style.secondhead}>
              <td>ID</td>
              <td>Titel</td>
              <td>Belohnung</td>
              <td>Zeit</td>
              <td>Akzeptieren</td>
              <td>Ablehnen</td>
            </tr>
            {this.state.challengeList.map(val =>
              <tr onClick={this.onSelectedRow.bind(this, val)}>
                <td>{val.idchallenges}</td>
                <td>{val.titel}</td>
                <td>{val.idbelohnung}</td>
                <td>{val.zeit}</td>
                <td>
                  <button onClick = {accept_Challenge}>
                    <FcCheckmark
                    size={20}
                  />
                  </button>
                </td>
                <td>
                <button onClick = {deny_Challenge}>
                <FcCancel
                  size={20}
                />
                </button>               
                </td>
              </tr>
            )}
          </tbody>
        </Table>
      </div>

      <Modal show={this.state.show} onHide={handleCloseDeny}>
        <Modal.Header closeButton>
          <img
                  src=" https://www.pngitem.com/pimgs/m/632-6329807_business-challenge-challenges-icon-hd-png-download.png"
                  alt=""
                  className={style.avatar}
                />
          <Modal.Title>{this.state.selectedItem.titel}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
          <h5>Beschreibung</h5>
          <p>{this.state.selectedItem.beschreibung}</p>
          <h5>Belohnung: {this.state.selectedItem.idbelohnung}</h5>
          <h5>Zeitspanne: {this.state.selectedItem.zeit} Tage</h5>
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
    </div>

    
  );
 }

}

export default Challenge;
