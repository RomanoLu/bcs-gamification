import React, { Component, useState } from "react";
import style from "./Statistics.module.css";
import { ProgressBar } from "react-bootstrap";
import Axios from "axios";
import { DashboardView } from "./StackedBarChart";
import {Belohnungschart} from "./Belohnungschart";
import Chart from 'apexcharts';

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
        <DashboardView />
        <Belohnungschart />
      </div>
    );
  }
}

export default Belohnung;
