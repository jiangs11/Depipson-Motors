import React from 'react'
import { withRouter } from 'react-router-dom'

const LandingPage = ({ history }) => {
    return (
        <div>
            <h1>Landing Page</h1>
            <button onClick={() => history.push('car')}>Go to Car Page</button>
        </div>
    )
}

export default withRouter(LandingPage)