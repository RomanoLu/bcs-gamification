import React, { Component } from 'react'
import './TicketsStyles.css'
import { FaAward } from 'react-icons/fa';
import { Table, Dropdown, Button, Form, DropdownButton } from 'react-bootstrap';
import Axios from 'axios';

class Popup extends React.Component {
    constructor(){
        super();
        this.state = {
            showPopup: false,
            betreff: "",
            art: "Fehler",
            bezug: "",
            prio: "Normal",
            sta: "Neu"
        };
    }

    render() {
        const submit = () => {
            if(this.state.betreff == "" || this.state.bezug == "") {
                alert("Bitte füllen Sie alle Pflichtfelder aus!")
            } else {
                this.props.closePopup();
                Axios.post('http://localhost:3001/api/insertTicket', {betreff: this.state.betreff, bezug: this.state.bezug, prio: this.state.prio, sta: this.state.sta }).then(() => {
                    console.log("succesfull insert");
                });
            }
        };
        return (
            <div className='popup'>
                <div className='popup_inner'>
                    <h4>Neues Ticket erstellen</h4>
                    <hr></hr>
                    <Form className='formcontainer'>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Betreff <span style={{ color: 'red' }}>*</span></Form.Label>
                            <Form.Control onChange={(e) => {
                                this.setState({ betreff: e.target.value })
                            }} className='tfstyle' type="email" />
                        </Form.Group>
                        <div className='parent'>
                            <div className='div1'>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Ticketart <span style={{ color: 'red' }}>*</span></Form.Label>
                                    <DropdownButton
                                        title={this.state.art}
                                        id="dropdown-menu-align-responsive-1"
                                        onSelect={(e) => {
                                            this.setState({ art: e })}}
                                            >
                                                <Dropdown.Item eventKey="Fehler" style = {{ backgroundColor: '#f0f9ff' }}>Fehler</Dropdown.Item>
                                                <Dropdown.Item eventKey="Anpassung" style = {{ backgroundColor: '#f0f9ff' }}>Anpassung</Dropdown.Item>
                                                <Dropdown.Item eventKey="Dienstleistung" style = {{ backgroundColor: '#f0f9ff' }}>Dienstleistung</Dropdown.Item>
                                                <Dropdown.Item eventKey="Offener Punkt" style = {{  backgroundColor: '#f0f9ff' }}>Offener Punkt</Dropdown.Item>
                                                <Dropdown.Item eventKey="Vorschlag" style = {{ backgroundColor: '#f0f9ff' }}>Vorschlag</Dropdown.Item>
                                                <Dropdown.Item eventKey="Anfrage" style = {{  backgroundColor: '#f0f9ff' }}>Anfrage</Dropdown.Item>
                                    </DropdownButton>
                                    <Form.Label>Bezug <span style={{ color: 'red' }}>*</span></Form.Label>
                                    <Form.Control onChange={(e) => {
                                        this.setState({ bezug: e.target.value })
                                        }} className='tfstyle' type="email" />
                                    <Form.Label>Status <span style={{ color: 'red' }}>*</span></Form.Label>
                                    <DropdownButton
                                        title={this.state.sta}
                                        id="dropdown-menu-align-responsive-1"
                                        onSelect={(e) => {
                                            this.setState({ sta: e })}}
                                            >
                                                <Dropdown.Item eventKey="Neu" style = {{ color:'blue', backgroundColor: '#f0f9ff' }}>Neu</Dropdown.Item>
                                                <Dropdown.Item eventKey="Gesichtet" style = {{ color: 'red', backgroundColor: '#f0f9ff' }}>Gesichtet</Dropdown.Item>
                                                <Dropdown.Item eventKey="Klärung" style = {{ color: 'purple',backgroundColor: '#f0f9ff' }}>Klärung</Dropdown.Item>
                                                <Dropdown.Item eventKey="Absprache" style = {{ backgroundColor: '#f0f9ff' }}>Absprache</Dropdown.Item>
                                                <Dropdown.Item eventKey="Angeboten" style = {{ color: 'purple', backgroundColor: '#f0f9ff' }}>Angeboten</Dropdown.Item>
                                                <Dropdown.Item eventKey="Aufgenommen" style = {{ backgroundColor: '#f0f9ff' }}>Aufgenommen</Dropdown.Item>
                                                <Dropdown.Item eventKey="Eingeplant" style = {{  backgroundColor: '#f0f9ff' }}>Eingeplant</Dropdown.Item>
                                                <Dropdown.Item eventKey="Bearbeitung" style = {{ color: 'red', backgroundColor: '#f0f9ff' }}>Bearbeitung</Dropdown.Item>
                                                <Dropdown.Item eventKey="Abnahme" style = {{ color: 'green',backgroundColor: '#f0f9ff' }}>Abnahme</Dropdown.Item>
                                                <Dropdown.Item eventKey="Geschlossen" style = {{ color: 'green', backgroundColor: '#f0f9ff' }}>Geschlossen</Dropdown.Item>
                                                <Dropdown.Item eventKey="Unbeantwortet" style = {{ backgroundColor: '#f0f9ff' }}>Unbeantwortet</Dropdown.Item>
                                                <Dropdown.Item eventKey="(Importiert)" style = {{  backgroundColor: '#f0f9ff' }}>(Importiert)</Dropdown.Item>
                                    </DropdownButton>
                                    <Form.Label>Priorität (intern) <span style={{ color: 'red' }}>*</span></Form.Label>                                
                                    <DropdownButton
                                        title={this.state.prio}
                                        id="dropdown-menu-align-responsive-1"
                                        onSelect={(e) => {
                                            this.setState({ prio: e })}}
                                            >
                                                <Dropdown.Item eventKey="Maximal" style = {{ backgroundColor: '#f0f9ff' }}>Maximal</Dropdown.Item>
                                                <Dropdown.Item eventKey="Sehr Hoch" style = {{ color:'#FF0000', backgroundColor: '#f0f9ff' }}>Sehr Hoch</Dropdown.Item>
                                                <Dropdown.Item eventKey="Hoch" style = {{ color: '#AA0000', backgroundColor: '#f0f9ff' }}>Hoch</Dropdown.Item>
                                                <Dropdown.Item eventKey="Normal" style = {{ backgroundColor: '#f0f9ff' }}>Normal</Dropdown.Item>
                                                <Dropdown.Item eventKey="Niedrig" style = {{ color: '#c7c7c7', backgroundColor: '#f0f9ff' }}>Niedrig</Dropdown.Item>
                                    </DropdownButton>

                                    
                                </Form.Group>
                            </div>
                            <div className='div2'>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Beschreibung <span style={{ color: 'red' }}>*</span></Form.Label>
                                    <Form.Control className='tfstyle2' type="email" />
                                </Form.Group>
                               
                            </div>



                        </div>


                        <Button variant="primary" onClick={submit}>
                            Submit
                        </Button>
                    </Form>
                </div>
            </div>
        );
    }
}

class Ticket extends Component {
    constructor() {
        super();
        this.state = {
            showPopup: false
        };
    }
    togglePopup() {
        this.setState({
            showPopup: !this.state.showPopup
        });
    }
    render() {
        return (
            <div>
                <h2>Meine Tickets: Alle meine Tickets</h2>

                <div className='buttons'>
                    <Button variant="light" onClick={this.togglePopup.bind(this)}>Neu</Button> <Button variant="primary">Bearbeiten</Button>{' '}
                </div>
                <Dropdown>
                    <Dropdown.Toggle id="1" size="sm" variant="secondary">
                        Zeitraum
                    </Dropdown.Toggle>
                    <Dropdown.Menu variant="dark1">
                    </Dropdown.Menu>
                    <Dropdown.Toggle id="2" size="sm" variant="secondary">
                        Eingang
                    </Dropdown.Toggle>

                    <Dropdown.Menu variant="dark1">
                        <Dropdown.Item href="#/action-1" active>
                            Wunschtermin
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Termin</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Eingefügt</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item href="#/action-4">Aktualisiert am</Dropdown.Item>
                    </Dropdown.Menu>
                    <Dropdown.Toggle id="3" size="sm" variant="secondary">
                        Gesamt
                    </Dropdown.Toggle>

                    <Dropdown.Menu variant="dark2">
                        <Dropdown.Item href="#/action-1" active>
                            Jahr
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Geschäftsjahr</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Quartal</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item href="#/action-4">Monat</Dropdown.Item>
                    </Dropdown.Menu>


                </Dropdown>





                <div className='container2'>
                    <Table responsive="sm">
                        <tbody>
                            <tr className='secondhead'>
                                <td>ID</td>
                                <td>Betreff</td>
                                <td>Status</td>
                                <td>Prio</td>
                                <td>Wartungen</td>
                                <td>Bezug</td>
                                <td>Eingang</td>
                                <td>Aktualisiert am</td>
                            </tr>
                            <tr className='items'>
                                <td>#793</td>
                                <td>
                                    <i><FaAward /></i>
                                    Flexbox anpassen
                                </td>
                                <td>8-Bearbeitung</td>
                                <td>gelb</td>
                                <td>-</td>
                                <td>BCS Gamefication</td>
                                <td>21.04.22</td>
                                <td>29.04.22 15:17</td>
                            </tr>
                            <tr className='secondhead'>

                            </tr>
                        </tbody>
                    </Table>
                </div>
                {this.state.showPopup ?
                    <Popup
                        text='Close Me'
                        closePopup={this.togglePopup.bind(this)}
                    />
                    : null
                }
            </div>

        )
    }

}

export default Ticket