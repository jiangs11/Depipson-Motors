import React, { useState } from 'react'
import { Carousel, Button } from 'react-bootstrap'
import Header from '../components/Header'
import Footer from '../components/Footer'
import image1 from './../statics/images/work.jpg'
import work1 from './../statics/images/work1.jpg'
import work2 from './../statics/images/work2.jpg'
import work3 from './../statics/images/work3.jpg'
import work4 from './../statics/images/work4.jpg'
import Calendar from 'react-calendar'
import Paper from '@material-ui/core/Paper'
import { ViewState } from '@devexpress/dx-react-scheduler'
import {Scheduler, WeekView,Appointments,} from '@devexpress/dx-react-scheduler-material-ui'
import { appointments } from "./data"

const Appointment = ({ children, style, ...restProps }) => (
	<Appointments.Appointment
		{...restProps}
		style={{
			...style,
			backgroundColor: '#FFC107',
			borderRadius: '8px',
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center'
		}}
	>
		<div>
		{children}
		<Button>
			Setup Appointment
		</Button>
		</div>
	</Appointments.Appointment>
)

function Services() {
    const [index, setIndex] = useState(0)
	const [images, ] = useState([image1, work1, work2, work3, work4])
	const [dateValue, setDateValue] = useState(new Date())
    const [selectedDate, setSelectedDate] = useState("")
  
    const handleSelect = (selectedIndex, e) => {
      	setIndex(selectedIndex)
    }

    return (
        <div>
            <Header />
			<Carousel activeIndex={index} onSelect={handleSelect}>
				{images.map((image, index) => {
					return (
						<Carousel.Item key={index}>
							<div style={{height: '500px'}}>
								<img
									className="d-block w-100 h-100"
									src={image}
									alt="services"
								/>
							</div>
						</Carousel.Item>
					)
				})}
			</Carousel>

            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', marginTop: 20, marginBottom: 30 }}>
                <h1>Schedule an Appointment with Us</h1>
                <Calendar
                    onChange={setDateValue}
                    value={dateValue}
                    minDate={new Date()}
                    onClickDay={(value) => setSelectedDate(value)}
                    calendarType="US"
    			/>
            </div>

			<Paper>
				<Scheduler
                    data={appointments}
                    height={660}
				>
				<ViewState
					currentDate={selectedDate === '' ? dateValue : selectedDate}
				/>
				<WeekView
					startDayHour={9}
					endDayHour={19}
				/>
				<Appointments
					appointmentComponent={Appointment}
				/>
				</Scheduler>
			</Paper>

			<Footer />
        </div>
    )
}

export default Services