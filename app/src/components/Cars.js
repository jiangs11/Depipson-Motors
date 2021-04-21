import React, { useState } from 'react'
import { Card, Container, Row, Col } from 'react-bootstrap'

function Cars() {
	const [imageSource, ] = useState('https://global.toyota/pages/news/images/2019/11/05/1100/001.jpg')
	
    return (
		<Container className="container">
            <Row xs='1' sm='2' lg='3' xl='4' className='centered'>
				<Col>
					<Card className="card">
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
				</Col>

				<Col>
					<Card className="card">
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
				</Col>

				<Col>
					<Card className="card">
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
				</Col>

				<Col>
					<Card className="card">
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
				</Col>

				<Col>
					<Card className="card">
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
				</Col>

				<Col>
					<Card className="card">
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
				</Col>

				<Col>
					<Card className="card">
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
				</Col>

				<Col>
					<Card className="card">
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
				</Col>
			</Row>
		</Container>
    )
}

export default Cars