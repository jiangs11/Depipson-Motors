import React from 'react'
import Loadfile from '../../components/Loadfile'
import InfoTable from '../../components/InfoTable'
import InfoTable2 from '../../components/InfoTable2'
import { Form, Button } from 'react-bootstrap'

function AdminDashboard() {
    return (
        <div>
            {/* <AdminSideNav /> */}
            <h1 style={{textAlign:"center", }}>VIN DECODER & LookUp</h1>
            <div style={{textAlign:"center"}}>Decode Your Vehicle Identification Number Here</div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                <Form.Group style={{ width: '50%' }}>
                    <Form.Control size="lg" type="text" placeholder="Enter VIN..." />
                </Form.Group>
            </div>
            <InfoTable />
            <InfoTable2 />
            <Loadfile />
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                <div className="mb-2">
                    <Button variant="primary" size="lg">Submit</Button>
                </div>
            </div>
        </div>
    )
}

export default AdminDashboard
