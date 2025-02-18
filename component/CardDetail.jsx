import React, { useEffect, useState } from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import { Link, useLocation } from 'react-router'
import '../app.css';
import Button from 'react-bootstrap/Button';

export default function CardDetail() {
  
  const { state } = useLocation();
  
  return (
  <>
    <Button variant="primary"><Link to='/'>back</Link></Button>
    <div className='d-flex' style={{flexWrap:'wrap',margin:'10px',justifyContent:'center'}}> 
    <div>
    <Container >
      <Row>
        <Col>
          <Image src={state.image} style={{width:'300px'}} rounded />
        </Col>
      </Row>
    </Container>
    </div>
    
    <div>
      <h3><u>{state.title}</u></h3>
      <p><b>price:${state.price}</b></p>
      <p>description:  {state.description}</p>
      <p>category:{state.category}</p>
    </div>
    </div>
    </>
    )
}
  

