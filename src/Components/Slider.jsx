import React from 'react'
import ProductCards from "./ProductCards"

const Slider = ({products})  => {
  return (
    <div>
      {products.map((product) => {
        return(
           <ProductCards id={product.id} title={product.title} desc={props.desc} rating={product.rating.rate} reviews={product.rating.count} price={product.price}/>
        )
      })}
    </div>
  )
}

export default Slider
