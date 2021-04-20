import React, { useState } from 'react'
import Header from '../components/Header'
import Carousel from 'react-bootstrap/Carousel'
import image1 from './../statics/images/work.jpg'
import work1 from './../statics/images/work1.jpg'
import work2 from './../statics/images/work2.jpg'
import work3 from './../statics/images/work3.jpg'
import work4 from './../statics/images/work4.jpg'

function Services() {
    const [index, setIndex] = useState(0)
  
    const handleSelect = (selectedIndex, e) => {
      	setIndex(selectedIndex)
    }
    return (
        <div>
            <Header />
            <h1>Services Page</h1>
		<Carousel activeIndex={index} onSelect={handleSelect}>
			<Carousel.Item>
				<div style={{height: '500px'}}>
					<img
						className="d-block w-100 h-100"
						src={image1}
						alt="Second slide"
					/>
				</div>
				<Carousel.Caption>
					<h3>First slide label</h3>
					<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
				</Carousel.Caption>
			</Carousel.Item>

			<Carousel.Item>
				<div style={{height: '500px'}}>
					<img
						className="d-block w-100 h-100"
						src={image1}
                        style={{ aspectRatio: 3/2 }}
						alt="Second slide";
					/>
                    const cars = [work3, work2, work1, work4 ];
                    const  count = cars.push(car);
                    console.log(cars);
                    cars.push()
				</div>
				<Carousel.Caption>
					<h3>Second slide label</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
				</Carousel.Caption>
			</Carousel.Item>

			<Carousel.Item>
				<div style={{height: '500px'}}>
					<img
						className="d-block w-100 h-100"
						src={image1}
						alt="Second slide"
					/>
				</div>
				<Carousel.Caption>
					<h3>Third slide label</h3>
					<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
    )
            
        </div>
    )
}

export default Services
