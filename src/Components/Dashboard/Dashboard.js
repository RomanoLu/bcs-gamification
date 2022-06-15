import React from "react";
import Challenge from "./Challenge.js";
import style from "./DashboardStyles.module.css";
import Axios from 'axios';
import Tabellen from './Tabellen.js';


class Dashboard extends React.Component {
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
  render(){
    return (
      <div>
        <div className={style.parent}>
          <div className={style.div1}>
           <Tabellen display= "Termin" />
          </div>
            <div className={style.div2}>
              <Challenge />
            </div>
            <div className={style.div3}>
            <Tabellen display= "Ticket" />
            </div>
            <div className={style.div4}>
            <Tabellen display= "Workflow" />
            </div>
          <div className={style.div5}>
            <Tabellen display= "Aufgaben" />
          </div>
          <div className={style.div6}>
            <Tabellen display= "Wiedervorlagen" />
            </div>
            <div className={style.div7}>
          </div>
        </div>
      </div>
    );
  }
};

export default Dashboard;
