import {React, useState, useEffect} from 'react'
import {Toast, ToastContainer} from 'react-bootstrap';
import style from "./Tickets/TicketsStyles.module.css";
import challenge from "./Pictures/ChallengeIcon.png";

function Alert() {
    const [show, setShow] = useState(true)
    useEffect(() => {
        const timeId = setTimeout(() => {
          // After 3 seconds set the show value to false
          setShow(false)
        }, 5000)
    
        return () => {
          clearTimeout(timeId)
        }
      }, []);

      if (!show) {
        return null;
      }
  return (
    <div className = {style.overlay2}>
        <ToastContainer  position = "top-end">

        <Toast style = {{width: "325px", height: "75px"}}  onClose={() => setShow(false)}>
        <Toast.Header>
        <img
                    src={challenge}
                    alt=""
                    className= {style.avatar2}
        /> 
            <strong className="me-auto">Challenge absolviert!</strong>
            <small>

            </small>
        </Toast.Header>
        <Toast.Body>
            Du hast heute schon fünf Tickets absolviert.
        </Toast.Body>
        </Toast>
        </ToastContainer>
    </div>
  )
}

export default Alert