import React from 'react'
import Header from '../components/Header'
import { withRouter } from 'react-router-dom'
import Jumbotron from '../components/Jumbotron'
import { Form, Col } from 'react-bootstrap'
import Cars from '../components/Cars'

function LandingPage({ history }) {
    return (
        <div>
            <Header />
            <Jumbotron /><br/><hr/>

            {/* Form */}
            <Form.Row>
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Control as="select" defaultValue="Choose...">
        <option>Min Price</option>
        <option>...</option>
      </Form.Control>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Control as="select" defaultValue="Choose...">
        <option>Max Price</option>
        <option>...</option>
      </Form.Control>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridCity">
      <Form.Control as="select" defaultValue="Choose...">
        <option>Year</option>
        <option>...</option>
      </Form.Control>
    </Form.Group>
  </Form.Row>

  <Form.Row>
      <Form.Group>
  <Form.Control as="select" defaultValue="Choose...">
        <option>To Year</option>
        <option>...</option>
      </Form.Control>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Control as="select" defaultValue="Choose...">
        <option>Make Model</option>
        <option>...</option>
      </Form.Control>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridZip">
    <Form.Control as="select" defaultValue="Choose...">
        <option>Mileage</option>
        <option>...</option>
      </Form.Control>
    </Form.Group>
  </Form.Row>

  <Form.Group id="formGridCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>

            <h1 style={{textAlign:"center"}}>Start planning your travels here with the latest deals for popular destinations </h1>
            <Cars />

        </div>
        
    )
}


export default withRouter(LandingPage)