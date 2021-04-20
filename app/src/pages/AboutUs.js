import React from 'react'
import Header from '../components/Header'
import { Form, Button  } from 'react-bootstrap'

function AboutUs() {
    return (
        <div>
            <Header />
            <h1>About Us / Contact Us Page</h1>
            <Form>
                <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Maill Us</Form.Label>
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
        </div>
    )
}

export default AboutUs
