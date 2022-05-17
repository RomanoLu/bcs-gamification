import React from 'react';
import './ProfileStyles.css';
import {Card, ListGroup, ListGroupItem} from 'react-bootstrap';
import {BiCheckCircle} from 'react-icons/bi';
import {ImInfo} from 'react-icons/im';
import { Button, ProgressBar} from 'react-bootstrap';


class Popup extends React.Component {
    render() {
        return (
            <div className='popup'>
                <div className='popup_inner'>
                    <h4>Offene Badges</h4>
                    <div className='popup_BadgeList'>
                      <div className="Updates">
                          <div className="update">
                                  <img
                              src="https://media-exp1.licdn.com/dms/image/C4D03AQEoIHMPNhI2BQ/profile-displayphoto-shrink_400_400/0/1593272066605?e=1655942400&v=beta&t=en7EBo-drD3KjfUgnA8OkoKOAzbfmeviHVRyq5DK7Uk"
                              alt=""
                              className="avatar"
                              />                   
                              <div className="noti">
                                  <div  style={{marginBottom: '0.5rem'}}>
                                      <span>Rockstar</span> <br/>
                                      <span style={{color: 'grey'}}>Resolved 50 Tickets, at the speed of light.</span> <br/>
                                      <span style={{color: 'green'}}><ProgressBar striped variant="success" now={60}  label={"60%"}/></span>
                                  </div>
                              </div>
                          </div>
      
                          <div className="update">
                                  <img
                              src="https://media-exp1.licdn.com/dms/image/C4D03AQEoIHMPNhI2BQ/profile-displayphoto-shrink_400_400/0/1593272066605?e=1655942400&v=beta&t=en7EBo-drD3KjfUgnA8OkoKOAzbfmeviHVRyq5DK7Uk"
                              alt=""
                              className="avatar"
                              />                   
                              <div className="noti">
                                  <div  style={{marginBottom: '0.5rem'}}>
                                      <span>Rockstar</span> <br/>
                                      <span style={{color: 'grey'}}>Resolved 50 Tickets, at the speed of light.</span> <br/>
                                      <span style={{color: 'green'}}><ProgressBar striped variant="success" now={60}  label={"60%"}/></span>
                                  </div>
                              </div>
                          </div>
      
                          <div className="update">
                                  <img
                              src="https://media-exp1.licdn.com/dms/image/C4D03AQEoIHMPNhI2BQ/profile-displayphoto-shrink_400_400/0/1593272066605?e=1655942400&v=beta&t=en7EBo-drD3KjfUgnA8OkoKOAzbfmeviHVRyq5DK7Uk"
                              alt=""
                              className="avatar"
                              />                   
                              <div className="noti">
                                  <div  style={{marginBottom: '0.5rem'}}>
                                      <span>Rockstar</span> <br/>
                                      <span style={{color: 'grey'}}>Resolved 50 Tickets, at the speed of light.</span> <br/>
                                      <span style={{color: 'green'}}><ProgressBar striped variant="success" now={60}  label={"60%"}/></span>
                                  </div>
                              </div>
                          </div>
      
                          <div className="update">
                                  <img
                              src="https://media-exp1.licdn.com/dms/image/C4D03AQEoIHMPNhI2BQ/profile-displayphoto-shrink_400_400/0/1593272066605?e=1655942400&v=beta&t=en7EBo-drD3KjfUgnA8OkoKOAzbfmeviHVRyq5DK7Uk"
                              alt=""
                              className="avatar"
                              />                   
                              <div className="noti">
                                  <div  style={{marginBottom: '0.5rem'}}>
                                      <span>Rockstar</span> <br/>
                                      <span style={{color: 'grey'}}>Resolved 50 Tickets, at the speed of light.</span> <br/>
                                      <span style={{color: 'green'}}><ProgressBar striped variant="success" now={60}  label={"60%"}/></span>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>  
                  
                  <div className = 'popup-btn'>
                  <Button variant="primary"  onClick={this.props.closePopup}>
                            Schließe Fenster
                  </Button>
                  </div>

                </div>
            </div>
        );
    }
}

class Profile extends React.Component {
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
    render(){
        return (
            <div className='container'>
                <div className='container-items'>
                  <Card className ='card-left'>
                  <img
                    src="https://media-exp1.licdn.com/dms/image/C4D03AQEoIHMPNhI2BQ/profile-displayphoto-shrink_400_400/0/1593272066605?e=1655942400&v=beta&t=en7EBo-drD3KjfUgnA8OkoKOAzbfmeviHVRyq5DK7Uk"
                    alt=""
                    className="avatar"
                  />
                      <Card.Body>
                          <Card.Title>Fatih Kuruscu</Card.Title>
                          <Card.Text>
                          </Card.Text>
                      </Card.Body>
                      <ListGroup className="list-group-flush">
                          <ListGroupItem>
                              <h6>Adresse</h6>
                              <p>Hochschule Reutlingen <br />
                              Alteburgstraße 150
                              72145 Reutlingen
                              </p>
                          </ListGroupItem>
                          <ListGroupItem>
                              <h6>Telefon</h6>
                              <p>07478 110<br /></p>
      
                              <h6>Mobiltelefon</h6>
                              <p>+49 17670112531<br /></p>
      
                              <h6>E-Mail</h6>
                              <p>fatih.kuruscu@student.reutlingen-university.de<br /></p>
                          </ListGroupItem>
                      </ListGroup>
                  </Card>
                </div>
      
                <div className='container-items'>
                    <div className='r1'>
                      <div className='rl'>
                          <h5 style = {{marginTop: '15px', marginLeft: '15px'}}>Badges</h5>
                      </div>
                      <div className='rl'>
                          <ImInfo size= {20} onClick={this.togglePopup.bind(this)} style= {{marginTop: '10px' }}/>
                      </div>
                    </div>
      
      
                  <div className='BadgeList'>
                      <div className="Updates">
                          <div className="update">
                                  <img
                              src="https://media-exp1.licdn.com/dms/image/C4D03AQEoIHMPNhI2BQ/profile-displayphoto-shrink_400_400/0/1593272066605?e=1655942400&v=beta&t=en7EBo-drD3KjfUgnA8OkoKOAzbfmeviHVRyq5DK7Uk"
                              alt=""
                              className="avatar"
                              />                   
                              <div className="noti">
                                  <div  style={{marginBottom: '0.5rem'}}>
                                      <span>Rockstar</span> <br/>
                                      <span style={{color: 'grey'}}>Resolved 50 Tickets, at the speed of light.</span> <br/>
                                      <span style={{color: 'green'}}><BiCheckCircle/> Achieved on: 02.05.2022</span>
                                  </div>
                              </div>
                          </div>
      
                          <div className="update">
                                  <img
                              src="https://media-exp1.licdn.com/dms/image/C4D03AQEoIHMPNhI2BQ/profile-displayphoto-shrink_400_400/0/1593272066605?e=1655942400&v=beta&t=en7EBo-drD3KjfUgnA8OkoKOAzbfmeviHVRyq5DK7Uk"
                              alt=""
                              className="avatar"
                              />                   
                              <div className="noti">
                                  <div  style={{marginBottom: '0.5rem'}}>
                                      <span>Rockstar</span> <br/>
                                      <span style={{color: 'grey'}}>Resolved 50 Tickets, at the speed of light.</span> <br/>
                                      <span style={{color: 'green'}}><BiCheckCircle/> Achieved on: 02.05.2022</span>
                                  </div>
                              </div>
                          </div>
      
                          <div className="update">
                                  <img
                              src="https://media-exp1.licdn.com/dms/image/C4D03AQEoIHMPNhI2BQ/profile-displayphoto-shrink_400_400/0/1593272066605?e=1655942400&v=beta&t=en7EBo-drD3KjfUgnA8OkoKOAzbfmeviHVRyq5DK7Uk"
                              alt=""
                              className="avatar"
                              />                   
                              <div className="noti">
                                  <div  style={{marginBottom: '0.5rem'}}>
                                      <span>Rockstar</span> <br/>
                                      <span style={{color: 'grey'}}>Resolved 50 Tickets, at the speed of light.</span> <br/>
                                      <span style={{color: 'green'}}><BiCheckCircle/> Achieved on: 02.05.2022</span>
                                  </div>
                              </div>
                          </div>
      
                          <div className="update">
                                  <img
                              src="https://media-exp1.licdn.com/dms/image/C4D03AQEoIHMPNhI2BQ/profile-displayphoto-shrink_400_400/0/1593272066605?e=1655942400&v=beta&t=en7EBo-drD3KjfUgnA8OkoKOAzbfmeviHVRyq5DK7Uk"
                              alt=""
                              className="avatar"
                              />                   
                              <div className="noti">
                                  <div  style={{marginBottom: '0.5rem'}}>
                                      <span>Rockstar</span> <br/>
                                      <span style={{color: 'grey'}}>Resolved 50 Tickets, at the speed of light.</span> <br/>
                                      <span style={{color: 'green'}}><BiCheckCircle/> Achieved on: 02.05.2022</span>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <hr></hr>

                <div className='Medaille'>
                    <h5 style = {{marginTop: '15px', marginLeft: '15px'}}>Wander-Medaillie</h5>
                    <div className="update">
                            <img
                        src="https://media-exp1.licdn.com/dms/image/C4D03AQEoIHMPNhI2BQ/profile-displayphoto-shrink_400_400/0/1593272066605?e=1655942400&v=beta&t=en7EBo-drD3KjfUgnA8OkoKOAzbfmeviHVRyq5DK7Uk"
                        alt=""
                        className="avatar"
                        />                   
                        <div className="noti">
                            <div  style={{marginBottom: '0.5rem'}}>
                                <span>Rockstar</span> <br/>
                                <span style={{color: 'grey'}}>Resolved 50 Tickets, at the speed of light.</span> <br/>
                                <span style={{color: 'green'}}><BiCheckCircle/> Achieved on: 02.05.2022</span>
                            </div>
                        </div>
                    </div>
                </div>      
              </div>
      
                  {this.state.showPopup ? 
                  <Popup
                  text='Close Me'
                  closePopup = {this.togglePopup.bind(this)}
                  />
                  :null
                   }
            </div>
        )}
    }

export default Profile

