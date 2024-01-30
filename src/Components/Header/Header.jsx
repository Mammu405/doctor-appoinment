import React from 'react'
import './Header.css'
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Header() {
  return (
    <div>
        <Navbar className="bg-body-tertiary justify-content-between ms-4">
        <Navbar.Brand className='text-primary' href="/">
        <i class="fa-regular fa-calendar-check fa-fade text-primary me-2"></i>{' '}
           <b> Appoinment Booking</b>
          </Navbar.Brand>
      <Form inline>
        <Row>
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="Search"
              className=" mr-sm-2"
            />
          </Col>
          <Col xs="auto">
            <Button type="submit">Submit</Button>
          </Col>
        </Row>
      </Form>
    </Navbar>
    </div>
  )
}

export default Header