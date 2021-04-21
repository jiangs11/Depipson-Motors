import React, { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Header from '../components/Header'
import Footer from '../components/Footer'
import image1 from './../statics/images/work.jpg'
import work1 from './../statics/images/work1.jpg'
import work2 from './../statics/images/work2.jpg'
import work3 from './../statics/images/work3.jpg'
import work4 from './../statics/images/work4.jpg'
import Paper from '@material-ui/core/Paper';
import { ViewState } from '@devexpress/dx-react-scheduler';
import {Scheduler, WeekView,Appointments,} from '@devexpress/dx-react-scheduler-material-ui';
import { appointments } from "./data"

function Services() {
    const [index, setIndex] = useState(0)
	const [images, ] = useState([image1, work1, work2, work3, work4])
  
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

			const currentDate = '2018-06-27';

					const Appointment = ({
  					children, style, ...restProps
					}) => (
  <Appointments.Appointment
    {...restProps}
    style={{
      ...style,
      backgroundColor: '#FFC107',
      borderRadius: '8px',
    }}
  >
    {children}
  </Appointments.Appointment>
);

export default () => (
  <Paper>
    <Scheduler
      data={appointments}
      height={660}
    >
      <ViewState
        currentDate={currentDate}
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
);
			<Footer />
        </div>
    )
}

export default Services