import React from 'react';
import ProfileCSS from'./ProfileStyles.module.css';
import {Card, ListGroup, ListGroupItem} from 'react-bootstrap';
import {BiCheckCircle} from 'react-icons/bi';
import {ImInfo} from 'react-icons/im';
import { Button, ProgressBar} from 'react-bootstrap';


class Popup extends React.Component {
    render() {
        return (
            <div className={ProfileCSS.popup}>
                <div className={ProfileCSS.popup_inner}>
                    <h4>Offene Badges</h4>
                    <div className={ProfileCSS.popup_BadgeList}>
                      <div className={ProfileCSS.Updates}>
                          <div className={ProfileCSS.update}>
                                  <img
                              src="https://media-exp1.licdn.com/dms/image/C4D03AQEoIHMPNhI2BQ/profile-displayphoto-shrink_400_400/0/1593272066605?e=1655942400&v=beta&t=en7EBo-drD3KjfUgnA8OkoKOAzbfmeviHVRyq5DK7Uk"
                              alt=""
                              className={ProfileCSS.avatar}
                              />                   
                              <div className={ProfileCSS.noti}>
                                  <div  style={{marginBottom: '0.5rem'}}>
                                      <span>Rockstar</span> <br/>
                                      <span style={{color: 'grey'}}>Resolved 50 Tickets, at the speed of light.</span> <br/>
                                      <span style={{color: 'green'}}><ProgressBar striped variant="success" now={60}  label={"60%"}/></span>
                                  </div>
                              </div>
                          </div>
      
                          <div className={ProfileCSS.update}>
                                  <img
                              src="https://media-exp1.licdn.com/dms/image/C4D03AQEoIHMPNhI2BQ/profile-displayphoto-shrink_400_400/0/1593272066605?e=1655942400&v=beta&t=en7EBo-drD3KjfUgnA8OkoKOAzbfmeviHVRyq5DK7Uk"
                              alt=""
                              className={ProfileCSS.avatar}
                              />                   
                              <div className={ProfileCSS.noti}>
                                  <div  style={{marginBottom: '0.5rem'}}>
                                      <span>Rockstar</span> <br/>
                                      <span style={{color: 'grey'}}>Resolved 50 Tickets, at the speed of light.</span> <br/>
                                      <span style={{color: 'green'}}><ProgressBar striped variant="success" now={60}  label={"60%"}/></span>
                                  </div>
                              </div>
                          </div>
      
                          <div className={ProfileCSS.update}>
                                  <img
                              src="https://media-exp1.licdn.com/dms/image/C4D03AQEoIHMPNhI2BQ/profile-displayphoto-shrink_400_400/0/1593272066605?e=1655942400&v=beta&t=en7EBo-drD3KjfUgnA8OkoKOAzbfmeviHVRyq5DK7Uk"
                              alt=""
                              className={ProfileCSS.avatar}
                              />                   
                              <div className={ProfileCSS.noti}>
                                  <div  style={{marginBottom: '0.5rem'}}>
                                      <span>Rockstar</span> <br/>
                                      <span style={{color: 'grey'}}>Resolved 50 Tickets, at the speed of light.</span> <br/>
                                      <span style={{color: 'green'}}><ProgressBar striped variant="success" now={60}  label={"60%"}/></span>
                                  </div>
                              </div>
                          </div>
      
                          <div className={ProfileCSS.update}>
                                  <img
                              src="https://media-exp1.licdn.com/dms/image/C4D03AQEoIHMPNhI2BQ/profile-displayphoto-shrink_400_400/0/1593272066605?e=1655942400&v=beta&t=en7EBo-drD3KjfUgnA8OkoKOAzbfmeviHVRyq5DK7Uk"
                              alt=""
                              className={ProfileCSS.avatar}
                              />                   
                              <div className={ProfileCSS.noti}>
                                  <div  style={{marginBottom: '0.5rem'}}>
                                      <span>Rockstar</span> <br/>
                                      <span style={{color: 'grey'}}>Resolved 50 Tickets, at the speed of light.</span> <br/>
                                      <span style={{color: 'green'}}><ProgressBar striped variant="success" now={60}  label={"60%"}/></span>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>  
                  
                  <div className = {ProfileCSS.popupbtn}>
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
            showPopup: true
        };
    }
    togglePopup() {
        this.setState({
            showPopup: !this.state.showPopup
        });
    }
    render(){
        return (
            <div className={ProfileCSS.container}>
                <div className={ProfileCSS.containeritems}>
                  <Card className ={ProfileCSS.cardleft}>
                  <img
                    src="https://media-exp1.licdn.com/dms/image/C4D03AQEoIHMPNhI2BQ/profile-displayphoto-shrink_400_400/0/1593272066605?e=1655942400&v=beta&t=en7EBo-drD3KjfUgnA8OkoKOAzbfmeviHVRyq5DK7Uk"
                    alt=""
                    className={ProfileCSS.avatar}
                  />
                      <Card.Body>
                          <Card.Title>Fatih Kuruscu</Card.Title>
                          <Card.Text>
                          </Card.Text>
                      </Card.Body>
                      <ListGroup className={ProfileCSS.listgroupflush}>
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
      
                <div className={ProfileCSS.containeritems}>
                    <div className={ProfileCSS.r1}>
                      <div className={ProfileCSS.rl}>
                          <h5 style = {{marginTop: '15px', marginLeft: '15px'}}>Badges</h5>
                      </div>
                      <div className={ProfileCSS.rl}>
                          <ImInfo size= {20} onClick= {this.togglePopup.bind(this) } style= {{marginTop: '10px' }}/>
                      </div>
                    </div>      
      
                  <div className={ProfileCSS.BadgeList}>
                      <div className={ProfileCSS.Updates}>
                          <div className={ProfileCSS.update}>
                                  <img
                              src="https://media-exp1.licdn.com/dms/image/C4D03AQEoIHMPNhI2BQ/profile-displayphoto-shrink_400_400/0/1593272066605?e=1655942400&v=beta&t=en7EBo-drD3KjfUgnA8OkoKOAzbfmeviHVRyq5DK7Uk"
                              alt=""
                              className={ProfileCSS.avatar}
                              />                   
                              <div className={ProfileCSS.noti}>
                                  <div  style={{marginBottom: '0.5rem'}}>
                                      <span>Rockstar</span> <br/>
                                      <span style={{color: 'grey'}}>Resolved 50 Tickets, at the speed of light.</span> <br/>
                                      <span style={{color: 'green'}}><BiCheckCircle/> Achieved on: 02.05.2022</span>
                                  </div>
                              </div>
                          </div>
      
                          <div className={ProfileCSS.update}>
                                  <img
                              src="https://media-exp1.licdn.com/dms/image/C4D03AQEoIHMPNhI2BQ/profile-displayphoto-shrink_400_400/0/1593272066605?e=1655942400&v=beta&t=en7EBo-drD3KjfUgnA8OkoKOAzbfmeviHVRyq5DK7Uk"
                              alt=""
                              className={ProfileCSS.avatar}
                              />                   
                              <div className={ProfileCSS.noti}>
                                  <div  style={{marginBottom: '0.5rem'}}>
                                      <span>Rockstar</span> <br/>
                                      <span style={{color: 'grey'}}>Resolved 50 Tickets, at the speed of light.</span> <br/>
                                      <span style={{color: 'green'}}><BiCheckCircle/> Achieved on: 02.05.2022</span>
                                  </div>
                              </div>
                          </div>
      
                          <div className={ProfileCSS.update}>
                                  <img
                              src="https://media-exp1.licdn.com/dms/image/C4D03AQEoIHMPNhI2BQ/profile-displayphoto-shrink_400_400/0/1593272066605?e=1655942400&v=beta&t=en7EBo-drD3KjfUgnA8OkoKOAzbfmeviHVRyq5DK7Uk"
                              alt=""
                              className={ProfileCSS.avatar}
                              />                   
                              <div className={ProfileCSS.noti}>
                                  <div  style={{marginBottom: '0.5rem'}}>
                                      <span>Rockstar</span> <br/>
                                      <span style={{color: 'grey'}}>Resolved 50 Tickets, at the speed of light.</span> <br/>
                                      <span style={{color: 'green'}}><BiCheckCircle/> Achieved on: 02.05.2022</span>
                                  </div>
                              </div>
                          </div>
      
                          <div className={ProfileCSS.update}>
                                  <img
                              src="https://media-exp1.licdn.com/dms/image/C4D03AQEoIHMPNhI2BQ/profile-displayphoto-shrink_400_400/0/1593272066605?e=1655942400&v=beta&t=en7EBo-drD3KjfUgnA8OkoKOAzbfmeviHVRyq5DK7Uk"
                              alt=""
                              className={ProfileCSS.avatar}
                              />                   
                              <div className={ProfileCSS.noti}>
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

                <div className={ProfileCSS.Medaille}>
                    <h5 style = {{marginTop: '15px', marginLeft: '15px'}}>Wander-Medaillie</h5>
                    <div className={ProfileCSS.update}>
                            <img
                        src="https://media-exp1.licdn.com/dms/image/C4D03AQEoIHMPNhI2BQ/profile-displayphoto-shrink_400_400/0/1593272066605?e=1655942400&v=beta&t=en7EBo-drD3KjfUgnA8OkoKOAzbfmeviHVRyq5DK7Uk"
                        alt=""
                        className={ProfileCSS.avatar}
                        />                   
                        <div className={ProfileCSS.noti}>
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

