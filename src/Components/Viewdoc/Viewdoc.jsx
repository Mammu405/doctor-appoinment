import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Docreview from '../Docreview/Docreview';
import './Viewdoc.css'


function Viewdoc() {
  const {id}=useParams()
  console.log(id);
  const [docdetails,setdocdetails]=useState({}) 
  const fetchData=async()=>{
    const response=await axios.get(`https://doctor-server-a26s.onrender.com/doctors/${id}`)
    console.log(response.data);
    setdocdetails(response.data)
  }
  console.log(docdetails);
  useEffect(()=>{
    fetchData();
  },[])
  return (
    <div>
     
        <Card className="text-center m-5 pb-3">
      <Card.Body className='mt-4'>
      <Card.Title className='fs-1'>{docdetails.hospital}</Card.Title>
        <Card.Text className='fs-5'>
          {docdetails.address}
        </Card.Text>
        
        <Card.Title className='fs-4'>{docdetails.name}{' '}( {docdetails.specialty} )</Card.Title>
        <Card.Title></Card.Title>
        <Card.Text className='fs-5'>{docdetails.email}</Card.Text>
        <Card.Text className='fs-5' >{docdetails.phone}</Card.Text>
        {/* <Card.Text>Available Days : [ {docdetails.available_days[0]} ,{docdetails.available_days[1]} ,{docdetails.available_days[2]} ]</Card.Text> */}
        <Card.Text className='fs-5'>Available Days : {docdetails.available_days}</Card.Text>
        <Card.Text className='fs-5'>Available Hours : {docdetails.available_hours}</Card.Text>
        <Card.Text className='fs-5'>{docdetails.rating}⭐ </Card.Text>
        <Card.Text><Docreview rev={docdetails.reviews}/></Card.Text>
      </Card.Body>
    </Card>

    </div>
  )
}

export default Viewdoc