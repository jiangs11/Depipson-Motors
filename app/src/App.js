import React from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'

// Pages
import LandingPage from './pages/LandingPage'
import IndividualCar from './pages/IndividualCar'

// Style (dont need if using bootstrap)
import './App.css'

const App = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact={true} path="/" render={(props) => <LandingPage />} />
				<Route exact={true} path="/car" render={(props) => <IndividualCar />} />
				<Redirect to="/error" />
			</Switch>
		</BrowserRouter>
	)
}

export default App