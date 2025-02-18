import React, { useState } from 'react'
//import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header'
import Things from './component/Things'
import Cardspage from './component/Cardspage'
import { Outlet } from 'react-router';
import Home from './component/Home';
import { DataCon } from './contexts/DataCon';
/* The following line can be included in your src/index.js or App.js file */
import './app.css';
import './node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';

export default function App() {
  
  const [seco,setSeco]=useState(false);
  const[query,setQuery]=useState("");

  return (
    <div>
    <DataCon.Provider value={[[query,setQuery],[seco,setSeco]]}>
    <Home/>
    <Outlet/>
    </DataCon.Provider>
    </div>
  )
}
