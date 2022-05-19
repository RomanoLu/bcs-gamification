import "./ChallengeFormStyles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Axios from 'axios';

class ChallengeForm extends React.Component {
  constructor(){
    super();
    this.state = {
        betreff: "",
        beschreibung : "",
        titel : "",
        schwierigkeit : "",
        idbelohnung: "",
        zeit: "2022-05-07 19:09:44",
        ende: "2022-05-07"
    };
}

render() {
  const submit = () => {
    Axios.post('http://localhost:3001/api/insertChallenge', {
      betreff: this.state.betreff,
      beschreibung: this.state.beschreibung, 
      titel: this.state.titel, 
      schwierigkeit: this.state.schwierigkeit ,
      idbelohnung: this.state.idbelohnung,
      zeit: this.state.zeit,
      ende: this.state.ende,
    
    
    
    }).then(() => {
        alert("succesfull insert");
    });
};

  return (
    <>
    <h2>Neue Challenge anlegen</h2>
        <div className="flexboxContainer">
      <Form>
        {["radio"].map((type) => (
          <div key={`inline-${type}`} className="mb-3">
            <Form.Check
              inline
              label="Tickets lösen"
              name="Tickets lösen"
              type={type}
              id={`inline-${type}-1`}
              onChange={(e) => {
                this.setState({titel: e.target.name })
                }
            }
            />
            <Form.Check
              inline
              label="Communityposts erstellen"
              name="Communityposts erstellen"
              type={type}
              id={`inline-${type}-2`}
              onChange={(e) => {
                this.setState({titel: e.target.name })
                }
            }
            />
            <Form.Check
              inline
              label="Blahblahblah"
              name="Blahblahblah"
              type={type}
              id={`inline-${type}-3`}
              onChange={(e) => {
                this.setState({titel: e.target.name })
                }
            }
            />
          </div>
        ))}
        <fieldset>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="disabledTextInput">Anzahl Tickets</Form.Label>
            <Form.Control
              id="disabledTextInput"
              placeholder="Anzahl der Tickets"
              className="form"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="disabledTextInput">Beschreibung</Form.Label>
            <Form.Control
              id="disabledTextInput"
              placeholder="Anzahl der Tickets"
              className="form"
              onChange={(e) => {
                this.setState({beschreibung: e.target.value })
                }
            }
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="disabledSelect">Zeitspanne</Form.Label>
            <Form.Select id="disabledSelect" onChange={(e) => {
                this.setState({zeit: "2022-05-07 19:09:44" })
                
                }
            }>
              {/*TODO Entweder zeit in Db ändern oder wir müssen hier system zeit nehmen und dann mit den optionen verrechnen und das ergebnis schreiben*/}
              <option>keine Angabe</option>
              <option>1 Tag</option>
              <option>2 Tage</option>
              <option>5 Tage</option>
              <option>1 Woche</option>
              <option>2 Wochen</option>
              <option>1 Monat</option>
              <option>6 Monate</option>
              <option>1 Jahr</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="disabledSelect">Bewertung</Form.Label>
            <Form.Select id="disabledSelect">
              <option>keine Angabe</option>
              <option>unzufrieden</option>
              <option>akzeptabel</option>
              <option>zufrieden</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="disabledSelect">Schwierigkeitsgrad</Form.Label>
            <Form.Select id="disabledSelect" onChange={(e) => {
                this.setState({schwierigkeit: e.target.value })
                }
            }>
              <option>Simple</option>
              <option>Intermediate</option>
              <option>Advanced</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="disabledSelect">Belohnung</Form.Label>
            <Form.Select id="disabledSelect" onChange={(e) => {
                this.setState({idbelohnung: e.target.value })
                }
            }>
              <option>Werbegeschenk</option>
              <option>5/100 Urlaubstag</option>
              <option>1000px</option>
            </Form.Select>
          </Form.Group>
          <Button className="buttoncolor" type="submit" onClick={submit}>
            Submit
          </Button>
        </fieldset>
      </Form>
    </div>
    </>

  );
}

}
export default ChallengeForm