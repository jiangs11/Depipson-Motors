import React from 'react'
import { Form } from 'react-bootstrap'

function Loadfile() {
    return (
        <Form.Group controlId="formFileMultiple" className="mb-3">
            <Form.Label>Multiple files input example</Form.Label>
            <Form.Control type="file" multiple />
        </Form.Group>
    )
}

export default Loadfile