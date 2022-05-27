import ChallengeFormCSS from "./ChallengeFormStyles.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Axios from 'axios';

class ChallengeForm extends React.Component {
  constructor() {
    super();
    this.state = {
      betreff: "",
      beschreibung: "",
      titel: "",
      schwierigkeit: "",
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
        schwierigkeit: this.state.schwierigkeit,
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
        <div className={ChallengeFormCSS.flexboxContainer}>
          <Form>
            <fieldset>
              <div className={ChallengeFormCSS.challengeArt}>
                  <Form.Group className="mb-3">
                    <Form.Label htmlFor="disabledSelect">Challengeart</Form.Label>
                    <Form.Select className={ChallengeFormCSS.form} id="disabledSelect" onChange={(e) => {
                      this.setState({ schwierigkeit: e.target.value })
                    }
                    }>
                      <option>Tickets</option>
                      <option>Workflow</option>
                      <option>Aufgaben</option>
                      <option>Organisatorisches</option>
                      <option>Wiedervorlagen</option>
                      {/*
                      unter organisatirisches --> Arbeitszeiten, Urlaub, Termin(Introtermin z.b)
                      */}

                    </Form.Select>
                  </Form.Group>
                  </div>
              <div className={ChallengeFormCSS.parent}>
              

                <div className={ChallengeFormCSS.div2}>
                  
                  <Form.Group className="mb-3">
                    <Form.Label htmlFor="disabledTextInput">Anzahl</Form.Label>
                    {/*Bedingung für erfüllung irgendwie festlegen, weil vllt ist es nicht immer die anzahl
                    Prio soll min so und so sein, Bewertung soll min. so und so sein, Anzahl soll größer kleiner also x sein, usw...*/}
                    <Form.Control
                      id="disabledTextInput"
                      placeholder="Anzahl"
                      className={ChallengeFormCSS.form}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label htmlFor="disabledSelect">Bewertung</Form.Label>
                    <Form.Select className={ChallengeFormCSS.form} id="disabledSelect">
                      <option>keine Angabe</option>
                      <option>unzufrieden</option>
                      <option>akzeptabel</option>
                      <option>zufrieden</option>
                    </Form.Select>
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label htmlFor="disabledSelect">Priorität</Form.Label>
                    <Form.Select className={ChallengeFormCSS.form} id="disabledSelect" onChange={(e) => {
                      this.setState({ schwierigkeit: e.target.value })
                    }
                    }>
                      <option>Niedrig</option>
                      <option>Mittel</option>
                      <option>Hoch</option>
                    </Form.Select>
                  </Form.Group>
                </div>
                <div className={ChallengeFormCSS.div1}>
                  <Form.Group className="mb-3">
                    <Form.Label htmlFor="disabledTextInput">Titel</Form.Label>
                    {/*Bedingung für erfüllung irgendwie festlegen, weil vllt ist es nicht immer die anzahl
                    Prio soll min so und so sein, Bewertung soll min. so und so sein, Anzahl soll größer kleiner also x sein, usw...*/}
                    <Form.Control
                      id="disabledTextInput"
                      placeholder="Titel"
                      className={ChallengeFormCSS.form}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label htmlFor="disabledTextInput">Beschreibung</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      id="disabledTextInput"
                      className={ChallengeFormCSS.form}
                      placeholder="Beschreibung"
                      onChange={(e) => {
                        this.setState({ beschreibung: e.target.value })
                      }
                      }
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label htmlFor="disabledSelect">Zeitspanne</Form.Label>
                    <Form.Select className={ChallengeFormCSS.form} id="disabledSelect" onChange={(e) => {
                      this.setState({ zeit: "2022-05-07 19:09:44" })

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
                    <Form.Label htmlFor="disabledSelect">Belohnung</Form.Label>
                    <Form.Select className={ChallengeFormCSS.form} id="disabledSelect" onChange={(e) => {
                      this.setState({ idbelohnung: e.target.value })
                    }
                    }>
                      <option>Werbegeschenk</option>
                      <option>5/100 Urlaubstag</option>
                      <option>1000px</option>
                    </Form.Select>
                  </Form.Group>
                </div>
              </div>
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