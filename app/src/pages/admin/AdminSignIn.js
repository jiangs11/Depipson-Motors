import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
import Header from '../../components/Header'

function AdminSignIn() {
    const history = useHistory()
    const [email, setEmail] = useState("test@gmail.com")
    const [password, setPassword] = useState("test")

    const validateForm = () => {
        return email.length > 0 && password.length > 0
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        localStorage.setItem('user', 'true')
        history.push('/dashboard')
    }

    useEffect(() => {
        const loggedInUser = localStorage.getItem('user')
        if (loggedInUser) {
            history.push('/dashboard')
        }
    })

    return (
        <div className="adminLogin">
            <Header />
            <Form onSubmit={handleSubmit}>
                <Form.Group size="lg" controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        autoFocus
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Form.Group>

                <Form.Group size="lg" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Group>

                <Button block size="lg" type="submit" disabled={!validateForm()}>
                    Login
                </Button>
            </Form>
        </div>
    )
}

export default AdminSignIn
