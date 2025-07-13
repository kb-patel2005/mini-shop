import React, { useContext, useEffect, useState } from 'react'
import ProductCard from './ProductCard';
import { DataCon } from '../contexts/DataCon';
import '../app.css';

export default function Cardspage() {

  const [data,setData]=useState([]);
  
  const [[query,setQuery],[seco,setSeco]] = useContext(DataCon);

  useEffect(()=>{
  fetch('https://fakestoreapi.com/products',{
        params: {
          part: 'snippet',
          q: 'react js',
          maxResults: 20,
          key: 'YOUR_API_KEY',
        },
  })
  .then(res=>res.json())
  .then(res1=>setData(res1))
  },[]);
  
  
  return (

    <div className='cardpage'>
      {
        data.filter((e)=>seco?(e.category==query):(e.title.toLowerCase().includes(query)))
            .map((data1)=>
            <ProductCard 
            id={data1.id}
            image={data1.image}
            title={data1.title}
            description={data1.description} 
            price={data1.price}
            key={data1.id}
            data={data1}
            />
         )
        }
    </div>
        
  )
}
