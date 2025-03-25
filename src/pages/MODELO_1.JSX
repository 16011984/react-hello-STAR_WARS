import './charactercarousel.css'
import React from 'react';
import { useState } from "react";


const CharacterCarousel = () => {

    const images = [
        'https://raw.githubusercontent.com/16011984/react-hello-STAR_WARS/refs/heads/master/src/assets/img/luke-skywalker.jpg',
        'https://raw.githubusercontent.com/16011984/react-hello-STAR_WARS/refs/heads/master/src/assets/img/Yoda.jpg',
        'https://raw.githubusercontent.com/16011984/react-hello-STAR_WARS/refs/heads/master/src/assets/img/R2D2.jpg',
        'https://raw.githubusercontent.com/16011984/react-hello-STAR_WARS/refs/heads/master/src/assets/img/casian.jpeg',
        'https://raw.githubusercontent.com/16011984/react-hello-STAR_WARS/refs/heads/master/src/assets/img/vader.jpg'
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };


    return (
        <div className="carousel">

            <div className="list">

                <button onClick={prevSlide} className="prev">❮</button>
                <img src={images[currentIndex]} alt="slide" className="image" />
                <button onClick={nextSlide} className="next">❯</button>

            </div>

        </div>
    );
}

export default CharacterCarousel;