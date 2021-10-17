import React from 'react';
import { Carousel } from 'react-bootstrap';
import header from '../../../Images/Banner/header.png'
import header1 from '../../../Images/Banner/header1.png'
import header2 from '../../../Images/Banner/header2.png'

const Banner = () => {
    return (
        <>
        <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={header}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={header1}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={header2}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
            
        </>
    );
};

export default Banner;