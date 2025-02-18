import React, { useContext, useEffect, useRef } from 'react'
import '../app.css'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { DataCon } from '../contexts/DataCon';
import { Link } from 'react-router';
import '../app.css';

export default function Header() {

    const [[query,setQuery],[seco,setSeco]]=useContext(DataCon);
    

  return (
    <>
      <Navbar sticky="top" expand="lg" className="bg-body-tertiary m-2">
      <Container fluid>
        <Navbar.Brand>Kb Patel</Navbar.Brand>
          <Link to='/'>
          <input type='text' onChange={(e)=>{
            setSeco(false);
            setQuery(e.target.value.toLowerCase());
            
          }}
              className="me-2"
              aria-label="Search"
            >
            </input>
            </Link>
      </Container>
    </Navbar>
  
    </>
  )
}
