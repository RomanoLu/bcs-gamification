import React from "react";
import Logo from "../Pictures/bcs-logo.png";
import style from "./HeaderStyles.module.css";
import { FaSearch, FaStar, FaBell } from "react-icons/fa";
import { GiLetterBomb } from "react-icons/gi";
import { RiTimerLine, RiSettings5Fill } from "react-icons/ri";
import { Navbar, Nav, Tabs, Tab } from "react-bootstrap";
import { HiQuestionMarkCircle } from "react-icons/hi";

const Header = () => {
  return (
    <div className={style.navbar}>
      <div className={style.wrapper}>
        <div className={style.search}>
          <Navbar>
            <Navbar.Brand>
              {" "}
              <img src={Logo} width="30px" height="30px" />{" "}
            </Navbar.Brand>
            <Navbar.Toggle className={style.coloring} />
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
        <div className={style.items}>
          <div className={style.item}>
            <FaSearch className={style.icon} />
          </div>
          <div className={style.item}>
            <FaStar className={style.icon} />
          </div>
          <div className={style.item}>
            <GiLetterBomb className={style.icon} />
          </div>
          <div className={style.item}>
            <FaBell className={style.icon} />
            <div className={style.counter}>1</div>
          </div>
          <div className={style.item}>
            <RiTimerLine className={style.icon} />
            Starten
          </div>
          <div className={style.item}>
            <HiQuestionMarkCircle className={style.icon} />
          </div>
          <div className={style.item}>
            <img
              src="https://media-exp1.licdn.com/dms/image/C4D03AQEoIHMPNhI2BQ/profile-displayphoto-shrink_400_400/0/1593272066605?e=1655942400&v=beta&t=en7EBo-drD3KjfUgnA8OkoKOAzbfmeviHVRyq5DK7Uk"
              alt=""
              className={style.avatar}
            />
          </div>
          <div className={style.item}>
            <RiSettings5Fill className={style.icon} />
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
