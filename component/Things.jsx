import React, { useContext, useEffect } from 'react';
import { DataCon } from '../contexts/DataCon';
import { Link } from 'react-router';
import '../app.css';
import Button from 'react-bootstrap/Button';

export default function Things() {
  
  const [[query,setQuery],[seco,setSeco]]=useContext(DataCon);
  
  return (
   
    <nav className='nav'>
      <Button variant="secondary">
            <Link to='/' onClick={()=>{
            setQuery("women's clothing")&setSeco(true);
            }}>
              women's clothes
            </Link>
      </Button>
      <Button variant="secondary">
            <Link to='/' onClick={()=>{
            setQuery("men's clothing")&setSeco(true);
            }}>
              men clothes
            </Link>
      </Button>
      <Button variant="secondary">
            <Link to='/' onClick={()=>{
            setQuery("electronics")&setSeco(true);
            }}>
              electronics
            </Link>
      </Button>
      <Button variant="secondary">
          <Link to='/' onClick={()=>{
            setQuery("jewelery")&setSeco(true)
            }}>
              jewellery
            </Link>
      </Button>
      </nav>
  
  )
}
