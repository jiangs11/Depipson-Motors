import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

// Pages
import LandingPage from './pages/LandingPage'
import SpecificCarInfo from './pages/SpecificCarInfo'
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs'
import CarsOnSale from './pages/CarsOnSale'
import Services from './pages/Services'
import ErrorPage from './pages/ErrorPage'

import AdminSignIn from './pages/admin/AdminSignIn'
import AdminDashboard from './pages/admin/AdminDashboard'
import AddCar from './pages/admin/AddCar'

function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact={true} path="/" render={(props) => <LandingPage />} />
				<Route exact={true} path="/car" render={(props) => <SpecificCarInfo />} />
				<Route exact={true} path="/about" render={(props) => <AboutUs />} />
				<Route exact={true} path="/contact" render={(props) => <ContactUs />} />
				<Route exact={true} path="/sale" render={(props) => <CarsOnSale />} />
				<Route exact={true} path="/services" render={(props) => <Services />} />

				<Route exact={true} path="/signin" render={(props) => <AdminSignIn />} />
				<Route exact={true} path="/dashboard" render={(props) => <AdminDashboard />} />
				<Route exact={true} path="/addcar" render={(props) => <AddCar />} />

				<Route path="*" component={ErrorPage} />
			</Switch>
		</BrowserRouter>
	)
}

export default App