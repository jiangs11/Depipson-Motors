import React from 'react'
import { Form, Button  } from 'react-bootstrap'
import Header from '../components/Header'
import Map from '../components/Map'
import Footer from '../components/Footer'
import Favicon from 'react-favicon'

require('dotenv').config()

function AboutUs() {
    const googleMapUrl = "https://maps.googleapis.com/maps/api/js?key=" + process.env.REACT_APP_MAP_API_KEY

    return (
        <div>
            <Header />
            <h1>About Us / Contact Us Page</h1>
            <Map
                googleMapURL={googleMapUrl}
                loadingElement={<div style={{ height: '100%' }} />}
                containerElement={<div style={{ height: '400px', width: '50%' }} />}
                mapElement={<div style={{ height: '100%' }} />}
            />
                <div className = 'vl' /> <br />

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

export default AboutUs
