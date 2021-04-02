import React from 'react'
import NavBar from '../components/Nav'
import { withRouter } from 'react-router-dom'

const LandingPage = ({ history }) => {
    return (
        <div>
            <NavBar/>
            <h1>Landing Page</h1>
            <button onClick={() => history.push('car')}>Go to Car Page</button>

        </div>
    )
}

export default withRouter(LandingPage)