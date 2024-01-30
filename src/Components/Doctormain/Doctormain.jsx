import React, { useEffect, useState } from 'react'
import './Doctormain.css'
import axios from'axios'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Bookcard from '../Bookcard/Bookcard'

function Doctormain() {
  const [docmain,setdocmain]=useState([])
  const fetchData=async()=>{
    const response=await axios.get('https://doctor-server-a26s.onrender.com/doctors')
    console.log(response.data);
    setdocmain(response.data)
  }
  console.log(docmain);
  useEffect(()=>{
    fetchData()
  },[])
  return (
    <div>
      <Row>
      {
        docmain.map(item=>(
          <Col sm={12} md={6} lg={4} xl={3}>
             <Bookcard doc={item}/>
          </Col>
         
        ))
      }
      </Row>
      
    </div>
  )
}

export default Doctormain