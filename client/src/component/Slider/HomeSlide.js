import React, { useEffect } from "react";
import { useState } from "react";
const image1 = require("../Files/Home/h1.png")
const image3 = require("../Files/Home/h3.jpg")
const image4 = require("../Files/Home/h4.jpg")
const image5 = require("../Files/Home/h5.jpg")
const HomeSlide = () => {
    const slides = [
        { url: image1 },
        { url: image3 },
        { url: image4 },
        { url: image5 },

    ];
    const [currentIndex, setCurrentIndex] = useState(0);

    const containerStyles = {
        width: "100%",
        height: "250px",
        margin: "0 auto",
    };

    const sliderStyles = {
        height: "380px",
        position: "relative",
    };

    const slidesStyles = {
        width: "100%",
        height: "380px",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundImage: `url(${slides[currentIndex].url})`,
    };

    const leftArrow = {
        top: "50%",
        position: "absolute",
        transform: "translate(0, -50%)",
        left: "20px",
        color: "gray",
        fontSize: "45px",
        cursor: "pointer",
        zIndex: 1,
    };

    const righttArrow = {
        top: "50%",
        position: "absolute",
        transform: "translate(0, -50%)",
        right: "20px",
        color: "gray",
        fontSize: "45px",
        cursor: "pointer",
        zIndex: 1,
        
    };

    const goToPrev = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const goToNext = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const dotsContainerStyles = {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "-20px",
    };

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    };

    useEffect(() => {
        const i = setInterval(() => {
            setCurrentIndex((preindex) =>
                preindex < slides.length - 1 ? preindex + 1 : 0
            );
        }, 6000);

        return () => clearInterval(i);
    });

    return (
        <>
            <div style={containerStyles}>
                <div style={sliderStyles}>
                    {/* Arrow Section */}
                    <div className="arrowSlider" style={leftArrow} onClick={goToPrev}>
                        &#10094;
                    </div>

                    <div className="arrowSlider" style={righttArrow} onClick={goToNext}>
                        &#10095;
                    </div>

                    {/* Image Section */}
                    <div style={slidesStyles}></div>

                    {/* Dots Section */}
                    <div style={dotsContainerStyles}>
                        {slides.map((slide, slideIndex) => (
                            <div
                                onClick={() => goToSlide(slideIndex)}
                                key={slideIndex}
                                style={
                                    slideIndex === currentIndex
                                        ? {
                                            background: "yellow",
                                            margin: "5px 10px",
                                            height: "10px",
                                            width: "10px",
                                            borderRadius: "50%",
                                            display: "inline-block",
                                            cursor: "pointer",
                                        }
                                        : {
                                            background: "black",
                                            margin: "5px 10px",
                                            height: "10px",
                                            width: "10px",
                                            borderRadius: "50%",
                                            display: "inline-block",
                                            cursor: "pointer",
                                        }
                                }
                            >
                                {/* &#9675; white circle &#9679; */}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomeSlide