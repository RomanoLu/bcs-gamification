import React, { Component } from 'react'
import './TicketsStyles.css'
import { FaAward } from 'react-icons/fa';
import { Table, Dropdown, Button, Form } from 'react-bootstrap';

class Popup extends React.Component {
    render() {
        return (
            <div className='popup'>
                <div className='popup_inner'>
                    <h4>Neues Ticket erstellen</h4>
                    <hr></hr>
                    <Form className='formcontainer'>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Betreff <span style={{ color: 'red' }}>*</span></Form.Label>
                            <Form.Control className='tfstyle' type="email" />
                        </Form.Group>
                        <div className='parent'>
                            <div className='div1'>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Ticketart <span style={{ color: 'red' }}>*</span></Form.Label>
                                    <Form.Control className='tfstyle' type="email" />
                                    <Form.Label>Bezug <span style={{ color: 'red' }}>*</span></Form.Label>
                                    <Form.Control className='tfstyle' type="email" />
                                    <Form.Label>Status <span style={{ color: 'red' }}>*</span></Form.Label>
                                    <Form.Control className='tfstyle' type="email" />
                                    <Form.Label>Priorität (intern) <span style={{ color: 'red' }}>*</span></Form.Label>
                                    <Form.Control className='tfstyle' type="email" />
                                
                                </Form.Group>
                            </div>
                            <div className='div2'>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Beschreibung <span style={{ color: 'red' }}>*</span></Form.Label>
                                    <Form.Control className='tfstyle2' type="email" />
                                </Form.Group>
                               
                            </div>



                        </div>


                        <Button variant="primary" onClick={this.props.closePopup}>
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