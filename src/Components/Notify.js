import {React, useState, useEffect} from 'react'
import {Toast} from 'react-bootstrap'
import Confetti2 from 'react-confetti'


function Notify() {
    const [show, setShow] = useState(true)
    useEffect(() => {
        const timeId = setTimeout(() => {
          // After 3 seconds set the show value to false
          setShow(false)
        }, 7000)
    
        return () => {
          clearTimeout(timeId)
        }
      }, []);

      if (!show) {
        return null;
      }
    return (
        <div>
            <Confetti2
                            run={true}
                        />
            <Toast style = {{width: "500px", height: "300px"}}>
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
        </div>
  )
}

export default Notify