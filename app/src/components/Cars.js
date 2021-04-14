import React, { useState } from 'react'
import { Card, CardDeck, Container, Row, Col } from 'react-bootstrap'
import image1 from './../statics/images/image1.jpg'

function Cars() {
	const [imageSource, setImageSource] = useState('https://global.toyota/pages/news/images/2019/11/05/1100/001.jpg')
	const [cars, setCars] = useState([
		{
			"make": "Toyota"
		},
		{
			"make": "Hyundai"
		},
		{
			"make": "Ford"
		},
		{
			"make": "Nissan"
		},
		{
			"make": "Honda"
		}
	])

    return (
		<Container>
			<CardDeck>
				<Card>
					<Card.Img variant="top" src={imageSource} />
					<Card.Body>
						<Card.Title>Card title</Card.Title>
						<Card.Text>
							This is a wider card with supporting text below as a natural lead-in to
							additional content. This content is a little bit longer.
						</Card.Text>
					</Card.Body>
					<Card.Footer>
						<small className="text-muted">Last updated 3 mins ago</small>
					</Card.Footer>
				</Card>

				<Card>
					<Card.Img variant="top" src={imageSource} />
					<Card.Body>
						<Card.Title>Card title</Card.Title>
						<Card.Text>
							This card has supporting text below as a natural lead-in to additional
							content.{' '}
						</Card.Text>
					</Card.Body>
					<Card.Footer>
						<small className="text-muted">Last updated 3 mins ago</small>
					</Card.Footer>
				</Card>

				<Card>
					<Card.Img variant="top" src={imageSource} />
					<Card.Body>
						<Card.Title>Card title</Card.Title>
						<Card.Text>
							This is a wider card with supporting text below as a natural lead-in to
							additional content. This card has even longer content than the first to
							show that equal height action.
						</Card.Text>
					</Card.Body>
					<Card.Footer>
						<small className="text-muted">Last updated 3 mins ago</small>
					</Card.Footer>
				</Card>

				<Card>
					<Card.Img variant="top" src={imageSource} />
					<Card.Body>
						<Card.Title>Card title</Card.Title>
						<Card.Text>
							This is a wider card with supporting text below as a natural lead-in to
							additional content. This card has even longer content than the first to
							show that equal height action.
						</Card.Text>
					</Card.Body>
					<Card.Footer>
						<small className="text-muted">Last updated 3 mins ago</small>
					</Card.Footer>
				</Card>
			</CardDeck>

			<br />

			<CardDeck>
				<Card>
					<Card.Img variant="top" src={imageSource} />
					<Card.Body>
						<Card.Title>Card title</Card.Title>
						<Card.Text>
							This is a wider card with supporting text below as a natural lead-in to
							additional content. This content is a little bit longer.
						</Card.Text>
					</Card.Body>
					<Card.Footer>
						<small className="text-muted">Last updated 3 mins ago</small>
					</Card.Footer>
				</Card>

				<Card>
					<Card.Img variant="top" src={imageSource} />
					<Card.Body>
						<Card.Title>Card title</Card.Title>
						<Card.Text>
							This card has supporting text below as a natural lead-in to additional
							content.{' '}
						</Card.Text>
					</Card.Body>
					<Card.Footer>
						<small className="text-muted">Last updated 3 mins ago</small>
					</Card.Footer>
				</Card>

				<Card>
					<Card.Img variant="top" src={imageSource} />
					<Card.Body>
						<Card.Title>Card title</Card.Title>
						<Card.Text>
							This is a wider card with supporting text below as a natural lead-in to
							additional content. This card has even longer content than the first to
							show that equal height action.
						</Card.Text>
					</Card.Body>
					<Card.Footer>
						<small className="text-muted">Last updated 3 mins ago</small>
					</Card.Footer>
				</Card>

				<Card>
					<Card.Img variant="top" src={imageSource} />
					<Card.Body>
						<Card.Title>Card title</Card.Title>
						<Card.Text>
							This is a wider card with supporting text below as a natural lead-in to
							additional content. This card has even longer content than the first to
							show that equal height action.
						</Card.Text>
					</Card.Body>
					<Card.Footer>
						<small className="text-muted">Last updated 3 mins ago</small>
					</Card.Footer>
				</Card>
			</CardDeck>
		</Container>
    )
}

export default Cars