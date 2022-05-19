import React from 'react'
import Logo from '../Pictures/bcs-logo.png'
import './HeaderStyles.css';
import {FaSearch, FaStar, FaBell} from 'react-icons/fa';
import {GiLetterBomb} from 'react-icons/gi';
import {RiTimerLine, RiSettings5Fill} from 'react-icons/ri';
import {Navbar, Nav, Tabs, Tab} from 'react-bootstrap';
import {HiQuestionMarkCircle} from 'react-icons/hi';

const Header = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <Navbar>
            <Navbar.Brand> <img src={Logo} width="30px" height="30px" />{' '} </Navbar.Brand>
            <Navbar.Toggle className="coloring" />
            <Navbar.Collapse>
              <Nav>
                <Nav.Link href="/dashboard">Mein Bereich</Nav.Link>
                <Nav.Link href="/tickets">Tickets</Nav.Link>
                <Nav.Link href="/profile">Profil</Nav.Link>
                <Nav.Link href="/newChallenge">Neue Challenge Anlegen</Nav.Link>
                
              </Nav>
          </Navbar.Collapse>
          </Navbar>
        </div>
        <div className="items">
          <div className="item">
            <FaSearch className="icon" />
          </div>
          <div className="item">
            <FaStar className="icon"/>
          </div>
          <div className="item">
            <GiLetterBomb className="icon" />
          </div>
          <div className="item">
            <FaBell className="icon" />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <RiTimerLine className="icon" />
            Starten
          </div>
          <div className="item">
            <HiQuestionMarkCircle className="icon" />
          </div>
          <div className="item">
            <img
              src="https://media-exp1.licdn.com/dms/image/C4D03AQEoIHMPNhI2BQ/profile-displayphoto-shrink_400_400/0/1593272066605?e=1655942400&v=beta&t=en7EBo-drD3KjfUgnA8OkoKOAzbfmeviHVRyq5DK7Uk"
              alt=""
              className="avatar"
            />
          </div>
          <div className="item">
            <RiSettings5Fill className="icon" />
          </div>
        </div>
      </div>


      <div className='tabs'>
              <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
            <Tab eventKey="home" title="Home">
            </Tab>
            <Tab eventKey="profile" title="Profile">
            </Tab>
            <Tab eventKey="contact" title="Contact" disabled>
            </Tab>
          </Tabs>
      </div>
      
    </div>
  )
}

export default Header

/*
<div className="App">
      <Navbar className='test'>
        <Navbar.Brand>
          <img src={Logo} width="30px" height="30px" />{' '}
        </Navbar.Brand>

        <Navbar.Toggle className="coloring" />
        <Navbar.Collapse>
          <Nav>
            <Nav.Link href="#blog">Blog</Nav.Link>
            <Nav.Link href="#about-us">About Us</Nav.Link>
            <Nav.Link href="#contact-us">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>

      </Navbar>
    </div>
    */