import React from 'react'
import { Form, Col, Row, Button } from 'react-bootstrap'

function LandingPageFilter() {
    return (
        <div>
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

				<Button>Search</Button>
			</Form.Row>
        </div>
    )
}

export default LandingPageFilter
