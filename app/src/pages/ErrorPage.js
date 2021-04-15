import React from 'react'

function ErrorPage({ history }) {
    return (
        <div>
            <h1>Error 404: The page you looked for doesn't exist!</h1>
            <button onClick={() => history.push('/')}>Go Back Home</button>
        </div>
    )
}

export default ErrorPage
