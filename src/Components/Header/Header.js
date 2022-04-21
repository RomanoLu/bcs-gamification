import React from 'react'
import Logo from '../Pictures/bcs-logo.png'
import './HeaderStyles.css';
import {Navbar, Nav, Button, Form, FormControl, Container} from 'react-bootstrap'
 


const Header = () => {
  return (
    <div>
        <Navbar bg="light" variant="light">
            <Container>
            <Nav className="me-auto">
                <Nav.Link className="me-auto2">Mein Bereich</Nav.Link>
                <Nav.Link className="me-auto2">PRODUKTE</Nav.Link>
                <Nav.Link className="me-auto2">TICKETS</Nav.Link>
                <Nav.Link className="me-auto2">PROFIL</Nav.Link>

                <div id="indicator"></div>
            </Nav>
            </Container>
        </Navbar>


    </div>

  )
}

export default Header
