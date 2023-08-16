import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";

// Course
const Health = require("../Files/Course/KnSir.jpg");

export const CourseSlider = () => {
  const settings = {
    arrow: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          autoplay: true,
          autoplaySpeed: 5000,
        },
      },

      {
        breakpoint: 1150,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          autoplay: true,
          autoplaySpeed: 5000,
        },
      },

      {
        breakpoint: 760,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          autoplay: true,
          autoplaySpeed: 5000,
        },
      },
    ],
  };

  return (
    <div className="servicess-flex">
      <div className="trainers-views">
        <p>Best Things of our Trainer</p>
      </div>

      {/* Slider */}
      <Slider {...settings}>
        {/* 1 */}
        <div className="course-card" id="courseCard">
          <div className="intro-card">
            <b>Power of Network Marketing</b>
            <div className="course-para text-align-center d-flex m-auto">
              <p>
                "
                {"Network marketing is a business model in which products are sold through a network of independent distributors, known as 'network marketers.' These distributors earn a commission on every sale and receive commissions on sales made by the distributors they recruit.".slice(
                  0,
                  160
                )}
                " ...
              </p>
              <img src={Health} alt="Health..." />
            </div>
            <h3> ~ By {"Kamal Narayn (MD)".slice(0, 25)}!</h3>
          </div>
        </div>

        {/* 2 */}
        <div className="course-card">
          <div className="intro-card">
            <b>Power of Network Marketing</b>
            <div className="course-para text-align-center d-flex m-auto">
              <p>
                "
                {"Network marketing is a business model in which products are sold through a network of independent distributors, known as 'network marketers.' These distributors earn a commission on every sale and receive commissions on sales made by the distributors they recruit.".slice(
                  0,
                  160
                )}
                " ...
              </p>
              <img src={Health} alt="Health..." />
            </div>
            <h3> ~ By {"Kamal Narayn (MD)".slice(0, 25)}!</h3>
          </div>
        </div>
        {/* 3 */}
        <div className="course-card">
          <div className="intro-card">
            <b>Power of Network Marketing</b>
            <div className="course-para text-align-center d-flex m-auto">
              <p>
                "
                {"Network marketing is a business model in which products are sold through a network of independent distributors, known as 'network marketers.' These distributors earn a commission on every sale and receive commissions on sales made by the distributors they recruit.".slice(
                  0,
                  160
                )}
                " ...
              </p>
              <img src={Health} alt="Health..." />
            </div>
            <h3> ~ By {"Kamal Narayn (MD)".slice(0, 25)}!</h3>
          </div>
        </div>

        {/* 4 */}
        <div className="course-card">
          <div className="intro-card">
            <b>Power of Network Marketing</b>
            <div className="course-para text-align-center d-flex m-auto">
              <p>
                "
                {"Network marketing is a business model in which products are sold through a network of independent distributors, known as 'network marketers.' These distributors earn a commission on every sale and receive commissions on sales made by the distributors they recruit.".slice(
                  0,
                  160
                )}
                " ...
              </p>
              <img src={Health} alt="Health..." />
            </div>
            <h3> ~ By {"Kamal Narayn (MD)".slice(0, 25)}!</h3>
          </div>
        </div>

        {/* 5 */}
        <div className="course-card">
          <div className="intro-card">
            <b>Power of Network Marketing</b>
            <div className="course-para text-align-center d-flex m-auto">
              <p>
                "
                {"Network marketing is a business model in which products are sold through a network of independent distributors, known as 'network marketers.' These distributors earn a commission on every sale and receive commissions on sales made by the distributors they recruit.".slice(
                  0,
                  160
                )}
                " ...
              </p>
              <img src={Health} alt="Health..." />
            </div>
            <h3> ~ By {"Kamal Narayn (MD)".slice(0, 25)}!</h3>
          </div>
        </div>
      </Slider>
    </div>
  );
};
