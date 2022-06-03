import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Slider.css'

const Slider = () => {
    return (
        <div>
            <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100 slider-img "
      src="https://editorial.uefa.com/resources/026c-12f705c46a6c-9f2eb0579483-1000/messi_graphic.jpg"
      alt="First slide"
    />
    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 slider-img"
      src="https://a.espncdn.com/photo/2020/0422/r691825_1296x729_16-9.jpg"
      alt="Second slide"
    />

    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 slider-img"
      src="https://images.indianexpress.com/2021/10/vinicius-jr.jpg"
      alt="Third slide"
    />

   
  </Carousel.Item>
</Carousel>
        </div>
    );
};

export default Slider;