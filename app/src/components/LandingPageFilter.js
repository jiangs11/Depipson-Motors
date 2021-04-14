import React from 'react'
import { Col, Row, Dropdown, DropdownButton, Container, Tabs, Tab, InputGroup, Form, Button } from 'react-bootstrap'
import Slider, { createSliderWithTooltip } from 'rc-slider'
import 'rc-slider/assets/index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/fontawesome-free-solid'

const Range = createSliderWithTooltip(Slider.Range)

function LandingPageFilter() {
    return (
		<Tabs defaultActiveKey="filter" id="uncontrolled-tab-example">
			<Tab eventKey="filter" title="Search by Filter">
				<Container class="container">
					<Row xs='1' sm='3' lg='6' xl='6' className='filterOptions'>
						<Col>
							<DropdownButton class="filterOptionButton" title="Price Range" variant="outline-secondary">
								<div className="d-flex align-items-center justify-content-center" style={{width: '400px', height: '200px'}}>
									<div style={{width: '250px'}}>
										<Range
											marks={{
												1000: `$1000`,
												50000: `$50000`
											}}
											min={1000}
											max={50000}
											step={500}
											defaultValue={[1000, 50000]}
											// tipFormatter={value => `$ ${value}`}
											// tipProps={{
											// 	placement: "top",
											// 	visible: true
											// }}
											allowCross={false}
										/>
									</div>
								</div>
							</DropdownButton>
						</Col>

						<Col>
							<DropdownButton class="filterOptionButton" title="Year Range" variant="outline-secondary">
								<div>
									<h1>skrrrr</h1>

								</div>
							</DropdownButton>
						</Col>

						<Col>
							<DropdownButton class="filterOptionButton" title="Condition" variant="outline-secondary">
								<Dropdown.Item>New</Dropdown.Item>
								<Dropdown.Divider />
								<Dropdown.Item>Used</Dropdown.Item>
							</DropdownButton>
						</Col>
						
						<Col>
							<DropdownButton class="filterOptionButton" title="Make" variant="outline-secondary">
								<div>
									<h1>skrrrr</h1>

								</div>
							</DropdownButton>
						</Col>

						<Col>
							<DropdownButton class="filterOptionButton" title="Model" variant="outline-secondary">
								<div>
									<h1>skrrrr</h1>

								</div>
							</DropdownButton>
						</Col>

						<Col>
							<DropdownButton class="filterOptionButton" title="Mileage Range" variant="outline-secondary">
								<Dropdown.Item>New</Dropdown.Item>
								<Dropdown.Divider />
								<Dropdown.Item>Used</Dropdown.Item>
							</DropdownButton>
						</Col>
					</Row>
				</Container>
			</Tab>

			<Tab eventKey="text" title="Search by Text">
				<InputGroup className="searchbar">
					<InputGroup.Prepend>
						<InputGroup.Text style={{width: '50px', justifyContent: 'center', alignItems: 'center'}}>
							<FontAwesomeIcon icon={faSearch} />
						</InputGroup.Text>
					</InputGroup.Prepend>
					<Form.Control
						type="text"
						placeholder="Search makes, models, or keywords..."
						style={{height: '50px'}}
					/>
					<InputGroup.Append>
						<Button style={{width: '50px'}}>Go</Button>
					</InputGroup.Append>
				</InputGroup>
			</Tab>
		</Tabs>
    )
}

export default LandingPageFilter
