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
      <div className={style.parent}>
        <div className={style.div1}>
          <Termin />
        </div>
          <div className={style.div2}>
            <Challenge />
          </div>
          <div className={style.div3}>
          <Ticket />
          </div>
          <div className={style.div4}>
          <Ticket />
          </div>
        <div className={style.div5}>
          <Aufgaben />
        </div>
        <div className={style.div6}>
          <Wiedervorlagen />
          </div>
          <div className={style.div7}>
          <Workflow />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
