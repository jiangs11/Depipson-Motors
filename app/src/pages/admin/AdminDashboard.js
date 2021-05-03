import React from 'react'
import AdminSideNav from './../../components/AdminSideNav'
import InfoTable from '../../components/InfoTable'
import InfoTable2 from '../../components/InfoTable2'
import { Form } from 'react-bootstrap'

function AdminDashboard() {
    return (
        <div>
            <AdminSideNav />
            <h1 style={{textAlign:"center"}}>VIN DECODER & LookUp</h1>
            <div style={{textAlign:"center"}}>Decode Your Vehicle Identification Number Here</div>
        <Form.Group>
            <Form.Control size="lg" type="text" placeholder="Search..." />
        </Form.Group>
        <InfoTable />
        <InfoTable2 />
    </div>
    )
}

export default AdminDashboard
