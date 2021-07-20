import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import image1 from '../statics/images/image1.jpg'
import image2 from '../statics/images/image1.jpg'
import image3 from '../statics/images/image1.jpg'
import image4 from '../statics/images/image1.jpg'
import image5 from '../statics/images/image1.jpg'

function CarsOnSale() {
    const [cars, ] = useState([image1, image2, image3, image4, image5])

    return (
        <div>
            <Header />
            <h1>Cars on Sale Page</h1>
            {cars.map((car, i) => {
                return (
                    <img
						className="d-block w-100 h-100"
						src={car}
						alt="Second slide"
					/>                
                )
            })}
            <Footer />
        </div>
    )
}

export default CarsOnSale
