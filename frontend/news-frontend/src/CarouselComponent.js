import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import image1 from './assets/images/website-perusahaan-company-profile-web-javawebmedia1.jpg';
import image2 from './assets/images/instagram-kursus-statistik-javawebmedia.png';
import image3 from './assets/images/web-development-javawebmedia11.png';
import './App.css'; // Import file CSS

const images = [
    { src: image1},
    { src: image2},
    { src: image3}
];

const CarouselComponent = () => {
  return (
    <Carousel>
      {images.map((image, index) => (
        <Carousel.Item key={index}>
          <img
            className="d-block w-100 carousel-img"
            src={image.src}
            alt={`${image.label}`}
          />
          <Carousel.Caption>
            <h3>{image.label}</h3>
            <p>{image.text}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default CarouselComponent;
