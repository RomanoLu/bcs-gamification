import React from "react";
import { Table } from "react-bootstrap";
import style from "./AufgabenStyles.module.css";
import Axios from 'axios';
import { FcCheckmark, FcCancel } from "react-icons/fc";


class Challenge extends React.Component {

  constructor() {
    super();
    this.state = {
        challengeList: []
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

 render() {
   const accept_Challenge = () =>{
     alert("MUSIYE")
   }

   const deny_Challenge = () =>{
    alert("MUSIYE")
  }
  return (
    <div className={style.container}>
      <div className={style.challenges}>
        <Table striped bordered hover responsive="sm">
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
              <tr>
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
    </div>
  );
 }

}

export default Challenge;
