import React from 'react'
import { useLocation } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap'

function Header() {
    const { pathname } = useLocation()

    const activeTabStyle = {
        color: 'white'
    }

    return (
        <Navbar bg="dark" variant="dark" expand="md">
            <Navbar.Brand href="/">Depipson Motors</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link 
                        className="navLinks" 
                        style={pathname === '/gallery' ? activeTabStyle : undefined} 
                        href="/gallery"
                    >Gallery</Nav.Link>

                    {/* <Nav.Link 
                        className="navLinks"
                        style={pathname === '/sale' ? activeTabStyle : undefined} 
                        href="/sale"
                    >Special Deals</Nav.Link> */}

                    <Nav.Link 
                        className="navLinks"
                        style={pathname === '/services' ? activeTabStyle : undefined} 
                        href="/services"
                    >Services</Nav.Link>

                    <Nav.Link 
                        className="navLinks"
                        style={pathname === '/about' ? activeTabStyle : undefined} 
                        href="/about"
                    >About Us</Nav.Link>

                    <Nav.Link 
                        className="navLinks"
                        style={pathname === '/signin' ? activeTabStyle : undefined} 
                        href="/signin"
                    >Admin</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header