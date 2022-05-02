import React from 'react'
import './ProfileStyles.css'
import {Card, ListGroup, ListGroupItem} from 'react-bootstrap';


function Profile() {
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

          <div className = 'container-items'>
                <ListGroup className="list">
                    <ListGroupItem>
                        <h6>Badges</h6>
                    </ListGroupItem>
                    <ListGroupItem>
                        <h6>Medailien</h6>
                    </ListGroupItem>

                    <ListGroupItem>
                        <h6>Badges</h6>
                    </ListGroupItem>
                    <ListGroupItem>
                        <h6>Medailien</h6>
                    </ListGroupItem>

                    <ListGroupItem>
                        <h6>Badges</h6>
                    </ListGroupItem>
                    <ListGroupItem>
                        <h6>Medailien</h6>
                    </ListGroupItem>

                    <ListGroupItem>
                        <h6>Badges</h6>
                    </ListGroupItem>
                    <ListGroupItem>
                        <h6>Medailien</h6>
                    </ListGroupItem>

                    <ListGroupItem>
                        <h6>Badges</h6>
                    </ListGroupItem>
                    <ListGroupItem>
                        <h6>Medailien</h6>
                    </ListGroupItem>

                    <ListGroupItem>
                        <h6>Badges</h6>
                    </ListGroupItem>
                    <ListGroupItem>
                        <h6>Medailien</h6>
                    </ListGroupItem>
                </ListGroup>
          </div>
      </div>
  )
}

export default Profile