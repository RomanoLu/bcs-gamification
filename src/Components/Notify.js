import {React, useState, useEffect} from 'react'
import {Toast,ToastContainer} from 'react-bootstrap'
import style from "./Tickets/TicketsStyles.module.css";
import Confetti2 from 'react-confetti'


function Notify() {
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
        <div className = {style.overlay}>
            <Confetti2
                            run={true}
                        />
        <div>
        <ToastContainer  position = "middle-center">

            <Toast style = {{width: "500px", height: "300px"}}  onClose={() => setShow(false)}>
            <Toast.Header>
                <img style = {{width: "30px", height: "30px"}} src="https://images.emojiterra.com/google/noto-emoji/v2.034/512px/1f680.png" className="rounded me-2" alt="" />
                <strong className="me-auto">You Rock!</strong>
                <small>Ticket King</small>
            </Toast.Header>
            <Toast.Body style = {{textAlign: "center"}}>
                Du hast heute schon fünf Tickets absolviert.
            <img src="https://immotion-jzfyoi19mmhwtlehhr7.netdna-ssl.com/wp-content/uploads/2018/04/4-hard-work.gif" />
            </Toast.Body>
            </Toast>
        </ToastContainer>
        </div>
        </div>
  )
}

export default Notify