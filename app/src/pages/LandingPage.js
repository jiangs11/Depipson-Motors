import React from 'react'
import { withRouter } from 'react-router-dom'
import Header from '../components/Header'
import Jumbotron from '../components/Jumbotron'
import LandingPageFilter from '../components/LandingPageFilter'
import Cars from '../components/Cars'
import Footer from '../components/Footer'
import Loadfile from '../components/Loadfile'

function LandingPage({ history }) {
    return (
        <div>
            <Header />
            <Jumbotron />
			<br/>
			<LandingPageFilter />
            <h1 style={{textAlign:"center"}}>Start planning your travels here with the latest deals for popular destinations </h1>
            <Cars />
            <Loadfile />
			<Footer />
        </div>
    )
}

export default withRouter(LandingPage)