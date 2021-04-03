import React from 'react'
import Header from '../components/Header'
import { withRouter } from 'react-router-dom'
import Jumbotron from '../components/Jumbotron'

function LandingPage({ history }) {
    return (
        <div>
            <Header />
            <Jumbotron />
            <h1>Landing Page</h1>
            <button onClick={() => history.push('car')}>Go to Car Page</button>
        </div>
    )
}

export default withRouter(LandingPage)