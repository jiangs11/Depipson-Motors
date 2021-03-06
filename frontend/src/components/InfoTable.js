import React, {useState} from 'react'
import { Table, Button } from 'react-bootstrap'

    

    function InfoTable(){
        const [index, setIndex] = useState(0)

        return (
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>VIN</th>
                    <th>Make</th>
                    <th>Model</th>
                    <th>Year</th>
                    <th>Drive Type</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>Style/BOdy</td>
                    <td>Engine</td>
                    <td>Manufactured</td>
                    <td>Age</td>
                    </tr>
                </tbody>
                <Button variant="danger" style={{position: "absolute", right: '0', width: '10%'}}>Edit</Button>
            </Table>

        )
    }

export default InfoTable