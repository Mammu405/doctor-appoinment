import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Collapse from 'react-bootstrap/Collapse';
function Docreview({rev}) {
    console.log(rev);
    const [open, setOpen] = useState(false);
  return (
    <div>
        <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        Review
      </Button>
      <div style={{ minHeight: '150px' }}>
        <Collapse in={open} dimension="width">
          <div id="example-collapse-text">
            <Card body style={{ width: '1300px' }}>
            {
            rev?.map((item)=>(
                
                <div>
                    <hr />
                    <h6>{item.patient_name}</h6>
                    <h6>{item.rating}</h6>
                    <h6>{item.comments}</h6>
                </div>
            ))
          }
            </Card>
          </div>
        </Collapse>
      </div>
        {/* <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-fade-text"
        aria-expanded={open}
      >
        Review
      </Button>
      <Fade in={open}>
        <div id="example-fade-text">
          {
            rev?.map((item)=>(
                
                <div>
                    <hr />
                    <h6>{item.patient_name}</h6>
                    <h6>{item.rating}</h6>
                    <h6>{item.comments}</h6>
                </div>
            ))
          }
        </div>
      </Fade> */}
    </div>
  )
}

export default Docreview