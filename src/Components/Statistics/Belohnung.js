import React, { Component, useState } from "react";
import LineChart from "./LineChart";
import PieChart from "./PieChart";
import BarChart from "./BarChart";
import style from "./Statistics.module.css";
import { ProgressBar } from "react-bootstrap";
import Axios from "axios";
import { DashboardView } from "./StackedBarChart";

class Belohnung extends Component {
  constructor() {
    super();
    this.state = {
      alert: false,
      showPopup: false,
      ticketsList: [],
    };
  }

  render() {
    return (
      <div className={style.container}>
        <h2>Meine Statistik: Belohnungen</h2>
        {/*
        <div className="Belohnungen">
          <h4>Urlaubstage</h4>
          <ProgressBar
            animated
            striped
            variant="success"
            now={65}
            label={"24/30"}
            key={1}
          />
        </div>
        <PieChart />
    */}
        <DashboardView />
      </div>
    );
  }
}

export default Belohnung;
