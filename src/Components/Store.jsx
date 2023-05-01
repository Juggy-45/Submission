import React from 'react'
import {useState, useEffect} from 'react';
import Slider from './Slider';

const Store = () => {
    const [products, setProducts] =useState([])

    useEffect (() => {
        fetch("https://fakestoreapi.com/products")
        .then(res => res.json())
        .then(json => setProducts(json))
        .catch(err => console.log(err));
    }, [])
  return (
    <div>
      <Slider products= {products} />
    </div>
  )
}

export default Store 
