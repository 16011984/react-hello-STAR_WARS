import React, { useState } from "react";
import "./charactercarousel.css";


const images = [
    {
        url: "https://raw.githubusercontent.com/16011984/react-hello-STAR_WARS/refs/heads/master/src/assets/img/luke-skywalker.jpg",
        name: "Luke Skywalker",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
        url: "https://raw.githubusercontent.com/16011984/react-hello-STAR_WARS/refs/heads/master/src/assets/img/Yoda.jpg",
        name: "Yoda",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
        url: "https://raw.githubusercontent.com/16011984/react-hello-STAR_WARS/refs/heads/master/src/assets/img/casian.jpeg",
        name: "Cassian Andor",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
        url: "https://raw.githubusercontent.com/16011984/react-hello-STAR_WARS/refs/heads/master/src/assets/img/R2D2.jpg",
        name: "R2D2",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
        url: "https://raw.githubusercontent.com/16011984/react-hello-STAR_WARS/refs/heads/master/src/assets/img/vader.jpg",
        name: "Darth Vader",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
];

const CharacterCarousel = () => {
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

            <div className="btns">
                <button onClick={prevSlide} className="prev">
                    ❮
                </button>
                <button onClick={nextSlide} className="next">
                    ❯
                </button>
            </div>

            <div className="list">

                <div
                    className="item"
                    style={{ backgroundImage: `url(${images[currentIndex].url})` }}
                >
                    <div className="name">{images[currentIndex].name}</div>
                    <div className="des">{images[currentIndex].description}</div>

                    <div className="btn">
                        <button> Add to Favorites </button>
                        <button> Read More </button>
                    </div>

                </div>


            </div>

        </div>
    );

};

export default CharacterCarousel;
