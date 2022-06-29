import React from "react";
import Logo from "../Pictures/bcs-logo.png";
import HeaderCSS from "./HeaderStyles.module.css";
import TicketCSS from "./HeaderStyles.module.css";
import { FaSearch, FaStar, FaBell } from "react-icons/fa";
import { GiLetterBomb } from "react-icons/gi";
import { RiTimerLine, RiSettings5Fill } from "react-icons/ri";
import { Navbar, Nav, Dropdown, Form, Button } from "react-bootstrap";
import { HiQuestionMarkCircle } from "react-icons/hi";





class Header extends React.Component {
  constructor() {
    super();
    this.state = {
        showPopup: false,
    };
  }
  render() {
    const nav_extra = () => {
      this.setState({showPopup: !this.state.showPopup})
    }

    return (
      <div>
        <div className={HeaderCSS.navbar}>
        <div className={HeaderCSS.wrapper}>
          <div className={HeaderCSS.search}>
            <Navbar>
              <Navbar.Brand>
                {" "}
                <img src={Logo} width="30px" height="30px" />{" "}
              </Navbar.Brand>
              <Navbar.Toggle className={HeaderCSS.coloring} />
              <Navbar.Collapse>
                <Nav>
                  <Nav.Link href="/dashboard">Mein Bereich</Nav.Link>
                  <Nav.Link href="/tickets">Tickets</Nav.Link>
                  <Nav.Link href="/profile">Profil</Nav.Link>
                  <Nav.Link href="/statistics">Challenge</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </div>
          <div className={HeaderCSS.items}>
            <div className={HeaderCSS.item}>
              <FaSearch className={HeaderCSS.icon} />
            </div>
            <div className={HeaderCSS.item}>
              <FaStar className={HeaderCSS.icon} />
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
                src="https://profile-images.xing.com/images/4a6cc053bd0c65e3ecd609eb3f39188c-1/fatih-kuruscu.1024x1024.jpg"
                alt=""
                className={HeaderCSS.avatar}
              />
            </div>
            <div className={HeaderCSS.item}>
              <RiSettings5Fill className={HeaderCSS.icon} onClick = {nav_extra}/>
              <br />
            </div>
          </div>
        </div>
      </div>
      <div className={HeaderCSS.settingNav}>
      <Dropdown.Menu show = {this.state.showPopup}>
        <Dropdown.Item href="/newChallenge" onClick = {nav_extra} eventKey="1">Challenge</Dropdown.Item>
        <Dropdown.Item href="/statistics" onClick = {nav_extra} eventKey="2">Statistik</Dropdown.Item>
        <Dropdown.Item href="/belohnungen" onClick = {nav_extra} eventKey="3">Meine Belohnungen</Dropdown.Item>
      </Dropdown.Menu>
      </div>

    </div>
      
    );
  }
};

export default Header;  