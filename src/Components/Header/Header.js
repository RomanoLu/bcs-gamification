import React from 'react'
import Logo from '../Pictures/bcs-logo.png'
import './HeaderStyles.css';
import {FaSearch, FaStar, FaBell} from 'react-icons/fa';
import {GiLetterBomb} from 'react-icons/gi';
import {RiTimerLine, RiSettings5Fill} from 'react-icons/ri';
import {Navbar, Nav, Tabs, Tab, Sonnet} from 'react-bootstrap';
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
                <Nav.Link href="#blog">Mein Bereich</Nav.Link>
                <Nav.Link href="#about-us">Tickets</Nav.Link>
                <Nav.Link href="#contact-us">Profil</Nav.Link>
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
    </div>
    

  )
}

export default Header
