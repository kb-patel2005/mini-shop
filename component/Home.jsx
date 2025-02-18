import React, { useContext, useState } from 'react'
import Header from './Header'
import Things from './Things'
import '../app.css';

export default function Home() {
       
      return (
      <div>
          <Header/>
          <Things/>
      </div>
      )
  
}
