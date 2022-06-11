import React, {  useEffect, useState, state, setState } from "react";
import Axios from "axios";

export default function ChallengeOpen() {
    const [state, setState] = useState([])

    useEffect(() => {
        Axios.get("http://localhost:3001/api/getOpenChallenges")
          .then(
            res => setState(res.data)
          )
          .catch(function (error) {
            console.log(error);
          });
    });
    return (
      <div>
        <h3>wow</h3>
        {state.map( d => <div>{d}</div>)}
      </div>
    );
  }
  