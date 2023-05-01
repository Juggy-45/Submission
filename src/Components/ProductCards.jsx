import React from "react"
import "./Slider.css"
import Slider from "react-slick";


const ProductCards = ({ product}) => {
    return (
        <div className="product-card">
        <div>
            <img src={product.image} alt={product.title} />
        </div>
        
        </div>
    )
}

const SimpleSlider = ({ products}) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1
      };
      return (
        <div>
          <h2> Single Item</h2>
          <Slider {...settings}>
            <div>
              <h3>1</h3>
            </div>
            <div>
              <h3>2</h3>
            </div>
            <div>
              <h3>3</h3>
            </div>
            <div>
              <h3>4</h3>
            </div>
            <div>
              <h3>5</h3>
            </div>
            <div>
              <h3>6</h3>
            </div>
          </Slider>
        </div>
      );
}

export default Slider