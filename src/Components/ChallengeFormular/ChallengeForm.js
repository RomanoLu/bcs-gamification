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
      art: "Tickets",
      beschreibung: "",
      titel: "",
      idbelohnung: "Urlaubstag",
      belohnung: "",
      belohnungsListe: [],
      zeit: 0,
      priorität: "",
      bewertung: "",
      anzahl: 0,
      ende: "",
      aktion: "Arbeitszeiten",
      buchung_über: "",
      validated: false
    };
  }



  componentDidMount() {
    Axios.get("http://localhost:3001/api/getBelohnung")
    .then((response) => {
      const belohnungsListe = response.data;
      this.setState({ belohnungsListe });
      console.log(this.state.belohnungsListe);
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  render() {

      const submit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
      else {
        Axios.post('http://localhost:3001/api/insertChallenge', {
          art: this.state.art,
          beschreibung: this.state.beschreibung,
          titel: this.state.titel,
          idbelohnung: this.state.idbelohnung,
          zeit: this.state.zeit,
          priorität: this.state.priorität,
          bewertung: this.state.bewertung,
          anzahl: this.state.anzahl,
          aktion: this.state.aktion,
          buchung_über: this.state.buchung_über
        }).then(() => {
          alert("succesfull insert");
        });
      }
      this.setState({validated: true});

    };
    return (
      <>
        <h2>Neue Challenge anlegen</h2>
        <div className={ChallengeFormCSS.flexboxContainer}>
          <Form noValidate validated={this.state.validated} onSubmit={submit}>
            <fieldset>
              <div className={ChallengeFormCSS.challengeArt}>
                  <Form.Group className="mb-3" controlId="validationCustom01">
                    <Form.Label htmlFor="disabledSelect">Challengeart</Form.Label>
                    <Form.Select className={ChallengeFormCSS.form} id="disabledSelect" onChange={(e) => {
                                            this.setState({ art: e.target.value })
                                        }}  required                >
                      <option>Tickets</option>
                      <option>Workflow</option>
                      <option>Checkliste</option>
                      <option>Wiedervorlagen</option>
                      <option>Organisatorisches</option>


                    </Form.Select>
                  </Form.Group>
                  </div>
              <div className={ChallengeFormCSS.parent}>
              
                <div className={ChallengeFormCSS.div2}>  

                {this.state.art === "Tickets" ? (
                  <>
                <Form.Group className="mb-3" controlId="validationCustom02">
                    <Form.Label htmlFor="disabledTextInput">Anzahl</Form.Label>
                    <Form.Control
                      id="disabledTextInput"
                      placeholder="Anzahl"
                      className={ChallengeFormCSS.form}
                      required
                      onChange={(e) => {
                        this.setState({ anzahl: parseInt(e.target.value) })
                    }}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label htmlFor="disabledSelect">Bewertung</Form.Label>
                    <Form.Select className={ChallengeFormCSS.form} id="disabledSelect" onChange={(e) => {
                                            this.setState({ bewertung: e.target.value })
                                        }}   required>
                      <option>unzufrieden</option>
                      <option>akzeptabel</option>
                      <option>zufrieden</option>s
                    </Form.Select>
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label htmlFor="disabledSelect">Priorität</Form.Label>
                    <Form.Select className={ChallengeFormCSS.form} id="disabledSelect" required onChange={(e) => {
                      this.setState({ priorität: e.target.value })
                    }
                    }>
                      <option>Niedrig</option>
                      <option>Mittel</option>
                      <option>Hoch</option>
                    </Form.Select>                        <br />
                        <Button className="buttoncolor" type="submit">
                        Challenge Hinzufügen
                        </Button>
                  </Form.Group>
                  </>
                ) :
                this.state.art === "Workflow" ? (
                  <>
                      <Form.Group className="mb-3">
                      <Form.Label htmlFor="disabledTextInput">Anzahl absolvierter Workflowschritte</Form.Label>
                      <Form.Control
                        id="disabledTextInput"
                        placeholder="Anzahl"
                        required
                        className={ChallengeFormCSS.form}
                        onChange={(e) => {
                          this.setState({ anzahl: parseInt(e.target.value) })
                      }}>
                      </Form.Control>          
                            <br />
                      <Button className="buttoncolor" type="submit">
                      Challenge Hinzufügen
                      </Button>
                      </Form.Group>
                  </>
                ):
                this.state.art === "Wiedervorlagen" ? (
                  <>
                      <Form.Group className="mb-3">
                      <Form.Label htmlFor="disabledTextInput">Anzahl absolvierter Wiedervorlagen</Form.Label>
                      <Form.Control
                        id="disabledTextInput"
                        placeholder="Anzahl"
                        required
                        onChange={(e) => {
                          this.setState({ anzahl: parseInt(e.target.value) })
                      }}     
                        className={ChallengeFormCSS.form}
                      />
                          <br />
                        <Button className="buttoncolor" type="submit">
                        Challenge Hinzufügen
                        </Button>
                      </Form.Group>
                  </>
                ):
                this.state.art === "Checkliste" ? (
                  <>
                      <Form.Group className="mb-3">
                      <Form.Label htmlFor="disabledTextInput">Anzahl absolvierter Checklist-Einträge</Form.Label>
                      <Form.Control
                        id="disabledTextInput"
                        required
                        placeholder="Anzahl"
                        onChange={(e) => {
                          this.setState({ anzahl: parseInt(e.target.value) })
                      }}                  
                        className={ChallengeFormCSS.form}
                      />
                        <br />
                        <Button className="buttoncolor" type="submit">
                        Challenge Hinzufügen
                        </Button>
                      </Form.Group>
                  </>
                ):
                this.state.art === "Organisatorisches" && (
                  <>
                    <Form.Group className="mb-3">
                      <Form.Label htmlFor="disabledSelect">Aktion</Form.Label>
                      <Form.Select className={ChallengeFormCSS.form} required id="disabledSelect" onChange={(e) => {
                        this.setState({ aktion: e.target.value })
                      }
                      }>
                        <option>Arbeitszeiten</option>
                        <option>Termine</option>
                        <option>Urlaubstage</option>
                      </Form.Select>
                    </Form.Group>
                    {this.state.aktion === "Arbeitszeiten" ? (
                        <Form.Group className="mb-3">
                        <Form.Label htmlFor="disabledSelect">Buchung über:</Form.Label>
                        <Form.Select className={ChallengeFormCSS.form} required id="disabledSelect" onChange={(e) => {
                                            this.setState({ buchung_über: e.target.value })
                                      }}          >
                          <option>Stopp-Uhr</option>
                          <option>Aufgabenbuchung</option>
                          <option>Zeitbuchung</option>
                        </Form.Select>
                          <br />
                          <Button className="buttoncolor" type="submit">
                          Challenge Hinzufügen
                          </Button>
                      </Form.Group>
                    ): 
                    this.state.aktion === "Termine" ? (
                      <Form.Group className="mb-3">
                      <Form.Label htmlFor="disabledTextInput">Anzahl zu buchender Termine</Form.Label>
                      <Form.Control
                        id="disabledTextInput"
                        placeholder="Anzahl"
                        required
                        onChange={(e) => {
                          this.setState({ anzahl: parseInt(e.target.value) })
                      }}  
                        className={ChallengeFormCSS.form}
                      />
                      <br />
                      <Button className="buttoncolor" type="submit">
                        Challenge Hinzufügen
                        </Button>
                      </Form.Group>
                      

                      
                    ):
                    this.state.aktion === "Urlaubstage" && (
                      <Button className="buttoncolor" type="submit">
                      Challenge Hinzufügen
                      </Button>
                    )
                    
                    }
                  </>
                )}                
                  
                </div>
                <div className={ChallengeFormCSS.div1}>
                  <Form.Group className="mb-3">
                    <Form.Label htmlFor="disabledTextInput">Titel</Form.Label>
                    <Form.Control
                      id="disabledTextInput"
                      required
                      placeholder="Titel"
                      className={ChallengeFormCSS.form}
                      onChange={(e) => {
                        this.setState({ titel: e.target.value })
                      }}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label htmlFor="disabledTextInput">Beschreibung</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      required
                      id="disabledTextInput"
                      className={ChallengeFormCSS.form}
                      placeholder="Beschreibung"
                      onChange={(e) => {
                        this.setState({ beschreibung: e.target.value })
                      }}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label htmlFor="disabledSelect">Zeitspanne</Form.Label>
                    <Form.Select className={ChallengeFormCSS.form} required id="disabledSelect" onChange={(e) => {
                      this.setState({zeit: e.target.value})
                    }
                    }>
                      {/*TODO Entweder zeit in Db ändern oder wir müssen hier system zeit nehmen und dann mit den optionen verrechnen und das ergebnis schreiben*/}
                      <option value = "1">1 Tag</option>
                      <option value = "2">2 Tage</option>
                      <option value = "5">5 Tage</option>
                      <option value = "7">1 Woche</option>
                      <option value = "14">2 Wochen</option>
                      <option value = "30">1 Monat</option>
                      <option value = "180">6 Monate</option>
                      <option value = "365">1 Jahr</option>
                    </Form.Select>
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label htmlFor="disabledSelect">Belohnung</Form.Label>
                    <Form.Select className={ChallengeFormCSS.form} id="disabledSelect" required onChange={(e) => {
                      this.setState({ idbelohnung: e.target.value });
                    }
                    }>
                    {this.state.belohnungsListe.map((val) => (
                      <option value = {val.art}> {val.Belohnung}</option>
                    ))}
                      
                    
                    </Form.Select>
                  </Form.Group>
                </div>
              </div>
            </fieldset>
          </Form>
        </div>
      </>

    );
  }

}
export default ChallengeForm