import React, { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import image1 from './../statics/images/image1.jpg'
import image2 from './../statics/images/image2.jpg'
import work1 from './../statics/images/work1.jpg'
import work2 from './../statics/images/work2.jpg'
import work3 from './../statics/images/work3.jpg'
import work4 from './../statics/images/work4.jpg'


function Jumbotron() {
    const [index, setIndex] = useState(0)
	const [images, ] = useState([image1, image2, work1, work2, work3, work4])
  
    const handleSelect = (selectedIndex, e) => {
      	setIndex(selectedIndex)
    }

    return (
        <div>
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

			</div>
    )
}
  
export default Jumbotron