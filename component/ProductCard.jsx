import React from 'react';
import Card from 'react-bootstrap/Card';
import '../app.css';
import { Link } from 'react-router';
import '../app.css';
export default function ProductCard({id,image,title,price,description,data}) {
  
  return (
  <div className='proCard p-2'>
  <Link to={'/CardDetail'} className ='a' state={data}>  
    <Card style={{width:'18rem',height:'35rem',display: 'flex',alignItems: 'flex-start',margin:'0px'}} >
    <Card.Img variant="top" src={image} style={{height:'300px',overflow:'hidden'}}/>
    <hr/>
    <Card.Body>
      <Card.Title>{title.slice(0,35)} ...</Card.Title>
      <Card.Text>price:${price}</Card.Text>
      <Card.Text>
      {description.slice(0, 50)} more..
      </Card.Text>
    </Card.Body>
  </Card>
  </Link>
  </div>
  )
}
