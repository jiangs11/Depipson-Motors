import React, { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Header from '../components/Header'
import Footer from '../components/Footer'
import image1 from './../statics/images/work.jpg'
import work1 from './../statics/images/work1.jpg'
import work2 from './../statics/images/work2.jpg'
import work3 from './../statics/images/work3.jpg'
import work4 from './../statics/images/work4.jpg'

function Services() {
    const [index, setIndex] = useState(0)
	const [images, ] = useState([image1, work1, work2, work3, work4])
  
    const handleSelect = (selectedIndex, e) => {
      	setIndex(selectedIndex)
    }
    return (
        <div>
            <Header />
            <h1>Services Page</h1>
			<Carousel activeIndex={index} onSelect={handleSelect}>
				{images.map((image, index) => {
					return (
						<Carousel.Item>
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
			<Footer />
        </div>
    )
}

export default Services