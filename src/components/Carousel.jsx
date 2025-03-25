import React, { useState } from 'react';
import './Character/charactercarousel.css'


const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const images = [
    'https://raw.githubusercontent.com/16011984/react-hello-STAR_WARS/refs/heads/master/src/assets/img/luke-skywalker.jpg',
    'https://raw.githubusercontent.com/16011984/react-hello-STAR_WARS/refs/heads/master/src/assets/img/Yoda.jpg',
    'https://raw.githubusercontent.com/16011984/react-hello-STAR_WARS/refs/heads/master/src/assets/img/casian.jpeg',

  ];

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (

    <div className="carousel">
      <div className="carousel-inner">
        {images.map((image, index) => (
          <div
            className={`carousel-item ${index === activeIndex ? 'active' : ''}`}
            key={index}
          >
            <img src={image} className="d-block w-100" alt={`slide-${index}`} />
          </div>
        ))}
      </div>


      <div className='btn-group'>
        <button
          className="carousel-control-prev"
          type="button"
          onClick={prevSlide}
          aria-label="Previous"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          onClick={nextSlide}
          aria-label="Next"
        >
           <span className="carousel-control-next-icon" aria-hidden="true"></span>
           <span className="visually-hidden">Next</span>

        </button>
      </div>

    </div>
  );
};

export default Carousel;
