import React from 'react'
import './Footer.css'
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function Footer() {
  return (
    <div>
       <Navbar className="bg-body-tertiary justify-content-center footer mt-4">
        <Navbar.Brand style={{fontSize:'15px'}} href="/">
                 Copyright(c) 2023 Appoinment booking.All right reserved.
          </Navbar.Brand>
    </Navbar>
    </div>
  )
}

export default Footer