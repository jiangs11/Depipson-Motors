import React from 'react'
import { withRouter } from 'react-router-dom'
import { Form, Col, Row, Button } from 'react-bootstrap'
import Header from '../components/Header'
import Jumbotron from '../components/Jumbotron'
import LandingPageFilter from '../components/LandingPageFilter'
import Cars from '../components/Cars'
import Footer from '../components/Footer'

function LandingPage({ history }) {
    return (
        <div>
            <Header />
            <Jumbotron />
			{/* <br/> */}
			<hr/>
			<LandingPageFilter />
            <h1 style={{textAlign:"center"}}>Start planning your travels here with the latest deals for popular destinations </h1>
            <Cars />
			<Footer />
        </div>
    )
}

export default withRouter(LandingPage)