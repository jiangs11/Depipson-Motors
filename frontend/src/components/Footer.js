import React from 'react'
import { Col, Container, Row } from "react-bootstrap"
import { SocialIcon } from 'react-social-icons'

const iconStyles = {
    width: 30,
    height: 30,
    // pointer-events: none
}

function Footer() {
    return (
        <footer className='footer'>
            <Container>
                <hr />
                <br />
                <Row>
                    <Col>
                        <h5>Main Menu</h5>
                        <div className="foot">
                            <p><a href="/gallery">Browse our Inventory</a></p>
                            <p><a href="/">On Sale Now</a></p>
                            <p><a href="/">Our Services</a></p>
                        </div>
                    </Col>
                    <Col>
                        <h5>About Depipson</h5>
                        <div className="foot">
                            <p><a href="/about">About Us</a></p>
                            <p><a href="/">Contact Us</a></p>
                            <p><a href="/">Send Feedback</a></p>
                        </div>
                    </Col>
                    <Col>
                        <h5>Social Media</h5>
                        <div className="foot" style={{display: 'flex', flexDirection: 'column'}}>
                                <div className="d-flex align-items-center">
                                    <div style={{pointerEvents: 'none'}}>
                                        <SocialIcon url="https://facebook.com/jaketrent" href="/" style={iconStyles}/>
                                    </div>
                                    <div className="p-2 col-example text-left"><a href="/">Facebook</a></div>
                                </div>

                                <div className="d-flex align-items-center" style={{marginTop: '5px'}}>
                                    <div style={{pointerEvents: 'none'}}>
                                        <SocialIcon url="https://twitter.com/jaketrent" href="/" style={iconStyles}/>
                                    </div>
                                    <div className="p-2 col-example text-left"><a href="/">Twitter</a></div>
                                </div>
                                
                                <div className="d-flex align-items-center" style={{marginTop: '5px'}}>
                                    <div style={{pointerEvents: 'none'}}>
                                        <SocialIcon url="https://instagram.com/jaketrent" href="/" style={iconStyles}/>
                                    </div>
                                    <div className="p-2 col-example text-left"><a href="/">Instagram</a></div>
                                </div>
                        </div>
                    </Col>
                </Row>

                <hr />

                <Row>
                    <Col xs="10">
                        <h6>Copyright &copy; 2021 Depipson Motors. All Rights Reserved.</h6>
                        <p>Created by <a href="/">Elijah Amponsah</a> and <a href="https://github.com/jiangs11" target="_blank" rel="noreferrer noopener">Steven Jiang</a></p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer
