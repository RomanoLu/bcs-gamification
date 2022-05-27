import React from "react";
import Challenge from "./Challenge.js";
import style from "./DashboardStyles.module.css";
import Ticket from "./Ticket.js";
import Termin from "./Termin.js";
import Wiedervorlagen from "./Wiedervorlagen.js";
import Aufgaben from "./Aufgaben.js";
import Workflow from "./Workflow.js";

const Dashboard = () => {
  return (
    <div>
      <div className={style.dashboard}>
        <div className={style.row1}>
          <Termin />
          <Challenge />
          <Ticket />
        </div>
        <div className={style.row2}>
          <Aufgaben />
        </div>
        <div className={style.row3}>
          <Wiedervorlagen />
          <Workflow />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
