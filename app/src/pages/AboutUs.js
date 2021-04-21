import React from 'react'
import { useMediaQuery } from 'react-responsive'
import { Form, Button, Row, Col, Container } from 'react-bootstrap'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { AiFillMail } from 'react-icons/ai'
import { ImPhone } from 'react-icons/im'
import Header from '../components/Header'
import Map from '../components/Map'
import Footer from '../components/Footer'

require('dotenv').config()

function AboutUs() {
    const isMobile = useMediaQuery({ query: `(max-width: 1000px)` })
    const googleMapUrl = "https://maps.googleapis.com/maps/api/js?key=" + process.env.REACT_APP_MAP_API_KEY

    return (
        <div>
            <Header />

            <div className="d-flex align-items-center justify-content-center" style={{marginTop: 20, marginBottom: 20}}>
                <Map
                    googleMapURL={googleMapUrl}
                    loadingElement={<div style={{ height: '100%' }} />}
                    containerElement={<div style={{ height: '400px', width: '100%' }} />}
                    mapElement={<div style={{ height: '100%' }} />}
                />
            </div>

            {isMobile ? 
                <Container>
                    <Row>
                        <Col style={getInTouchStyle}>
                            <GetInTouch />
                        </Col>
                    </Row>
                    <Row>
                        <Col style={centerStyle}>
                            <BusinessHours />                      
                        </Col>
                    </Row>
                </Container>
            : 
                <Container>
                    <Row>
                        <Col />
                        <Col xs={5} style={getInTouchStyle}>
                            <GetInTouch />
                        </Col>
                        <Col xs={5} style={centerStyle}>
                            <BusinessHours />                         
                        </Col>
                        <Col />
                    </Row>
                </Container>
            }                       

            <Form>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Mail Us</Form.Label>
                    <Form.Control type="name" placeholder="Your Name" />
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Control type="Your Email" placeholder="name@example.com" />
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlSelect2">
                </Form.Group>
                
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Your Message</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <Footer />
        </div>
    )
}

const GetInTouch = () => (
    <div style={topSpacing}>
        <div style={centerStyle}>
            <h3>Contact Us</h3>
        </div>
        <div>
            <FaMapMarkerAlt size={iconSize} />
            <span>&nbsp;&nbsp;</span>
            342 White Horse Pike,
            Clementon, NJ 08021
        </div>
        <div style={{marginTop: 10}}>
            <AiFillMail size={iconSize} />
            <span>&nbsp;&nbsp;</span>
            depipsonmotors@gmail.com
        </div>
        <div style={{marginTop: 10}}>
            <ImPhone size={iconSize} />
            <span>&nbsp;&nbsp;</span>
            (856)-883-5901
        </div>
    </div>
)

const BusinessHours = () => (
    <div style={topSpacing}>
        <Row style={centerStyle}>
            <h3>Business Hours:</h3>
        </Row>
        <Row style={bottomSpacing}>
            <Col>Monday</Col>
            <Col style={businessHours}>9:00 AM - 6:00 PM</Col>
        </Row>
        <Row style={bottomSpacing}>
            <Col>Tuesday</Col>
            <Col style={businessHours}>9:00 AM - 6:00 PM</Col>                                    
        </Row>
        <Row style={bottomSpacing}>
            <Col>Wednesday</Col>
            <Col style={businessHours}>9:00 AM - 6:00 PM</Col>                                    
        </Row>
        <Row style={bottomSpacing}>
            <Col>Thursday</Col>
            <Col style={businessHours}>9:00 AM - 6:00 PM</Col>
        </Row>
        <Row style={bottomSpacing}>
            <Col>Friday</Col>
            <Col style={businessHours}>9:00 AM - 7:00 PM</Col>
        </Row>
        <Row style={bottomSpacing}>
            <Col>Saturday</Col>
            <Col style={businessHours}>8:00 AM - 7:00 PM</Col>
        </Row>
        <Row style={bottomSpacing}>
            <Col>Sunday</Col>
            <Col style={businessHours}>Closed</Col>
        </Row>      
    </div>     
)

const iconSize = 30

const centerStyle = {
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex'
}

const getInTouchStyle = {
    justifyContent: 'center',
    display: 'flex'
}

const businessHours = {
    width: '220px'
}

const topSpacing = {
    marginTop: '15px'
}

const bottomSpacing = {
    marginBottom: '5px'
}

export default AboutUs