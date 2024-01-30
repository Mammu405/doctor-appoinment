import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import './Bookcard.css'
import { Link } from 'react-router-dom';
function Bookcard({doc}) {
  return (
    <div>
        <Link to={`/view/${doc.id}`} style={{textDecoration: 'none'}}>
         <Card className='card' style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{doc.hospital}</Card.Title>
        <Card.Text>
        {doc.name}{' | ('}{doc.specialty}{')'}
         
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item> {doc.address}</ListGroup.Item>
        <ListGroup.Item className='text-center'>{doc.rating}⭐</ListGroup.Item>
      </ListGroup>
      <Card.Body className='btn'>
      <Button variant="primary">View Details</Button>
      </Card.Body>
    </Card>
    </Link>
    </div>
  )
}

export default Bookcard