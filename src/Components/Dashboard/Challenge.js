import React from "react";
import { Table, Modal, Button } from "react-bootstrap";
import style from "./AufgabenStyles.module.css";
import Axios from 'axios';
import { FcCheckmark, FcCancel } from "react-icons/fc";
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
    alert("MUSIYE")
  }

  const handleClose = () => this.setState({ show: false });


  return (
    <div className={style.container}>
      <div className={style.challenges}>
        <Table striped bordered hover responsive="sm" >
          <thead>
            <tr>
              <th>Challenges</th>
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

      <Modal show={this.state.show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{this.state.selectedItem.titel}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{this.state.selectedItem.beschreibung}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>

    
  );
 }

}

export default Challenge;
