import React from 'react'
import Logo from '../Pictures/bcs-logo.png'
import HeaderCSS from './HeaderStyles.module.css';
import {FaSearch, FaStar, FaBell} from 'react-icons/fa';
import {GiLetterBomb} from 'react-icons/gi';
import {RiTimerLine, RiSettings5Fill} from 'react-icons/ri';
import {Navbar, Nav, Tabs, Tab} from 'react-bootstrap';
import {HiQuestionMarkCircle} from 'react-icons/hi';

const Header = () => {
  return (
    <div className={HeaderCSS.navbar}>
      <div className={HeaderCSS.wrapper}>
        <div className={HeaderCSS.search}>
          <Navbar>
            <Navbar.Brand> <img src={Logo} width="30px" height="30px" />{' '} </Navbar.Brand>
            <Navbar.Toggle className={HeaderCSS.coloring} />
            <Navbar.Collapse>
              <Nav>
                <Nav.Link href="/dashboard">Mein Bereich</Nav.Link>
                <Nav.Link href="/tickets">Tickets</Nav.Link>
                <Nav.Link href="/profile">Profil</Nav.Link>
                <Nav.Link href="/newChallenge">Challenge</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
        <div className={HeaderCSS.items}>
          <div className={HeaderCSS.item}>
            <FaSearch className={HeaderCSS.icon} />
          </div>
          <div className={HeaderCSS.item}>
            <FaStar className={HeaderCSS.icon}/>
          </div>
          <div className={HeaderCSS.item}>
            <GiLetterBomb className={HeaderCSS.icon} />
          </div>
          <div className={HeaderCSS.item}>
            <FaBell className={HeaderCSS.icon} />
            <div className={HeaderCSS.counter}>1</div>
          </div>
          <div className={HeaderCSS.item}>
            <RiTimerLine className={HeaderCSS.icon} />
            Starten
          </div>
          <div className={HeaderCSS.item}>
            <HiQuestionMarkCircle className={HeaderCSS.icon} />
          </div>
          <div className={HeaderCSS.item}>
            <img
              src="https://media-exp1.licdn.com/dms/image/C4D03AQEoIHMPNhI2BQ/profile-displayphoto-shrink_400_400/0/1593272066605?e=1655942400&v=beta&t=en7EBo-drD3KjfUgnA8OkoKOAzbfmeviHVRyq5DK7Uk"
              alt=""
              className={HeaderCSS.avatar}
            />
          </div>
          <div className={HeaderCSS.item}>
            <RiSettings5Fill className={HeaderCSS.icon} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

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
