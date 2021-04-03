import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'

function Header() {
    return (
        <Navbar bg="dark" variant="dark" expand="md">
            <Navbar.Brand href="/">Depipson Motors</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link className="navLinks" href="/about">About Depipson</Nav.Link>
                    <Nav.Link className="navLinks" href="sale">Cars on Sale</Nav.Link>
                    <Nav.Link className="navLinks" href="/services">Our Services</Nav.Link>
                    <Nav.Link className="navLinks" href="/contact">Contact Us</Nav.Link>
                    <Nav.Link className="navLinks" href="/admin">Admin</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header