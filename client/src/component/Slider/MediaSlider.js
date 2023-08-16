import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";

// media
const AajTak = require("../Files/MediaList/aajtak.jpg");
const AbpNews = require("../Files/MediaList/AbpNews.jpg");
const Indiatv = require("../Files/MediaList/indiatv.png");
const Media = require("../Files/MediaList/media.png");
const StarNews = require("../Files/MediaList/starNews.jpg");

export const MediaSlider = () => {
  const settings = {
    arrow: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplaySpeed: 5000,
        },
      },
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplaySpeed: 5000,
        },
      },

      {
        breakpoint: 720,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplaySpeed: 3000,
        },
      },

      {
        breakpoint: 670,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplaySpeed: 4000,
        },
      },
    ],
  };

  return (
    <div className="servicees-flex">
      {/* Slider */}
      <Slider {...settings}>
        {/* 1 */}
        <div className="media-card" id="mediaCard">
          <div className="media-intro">
            <img src={AajTak} alt="Health..." />
            <div className="media-para">
              <p>
                {"Aaj Tak is an Indian Hindi-language news channel owned by TV Today Network, part of the New Delhi_based media conglomerate Living Media group".slice(
                  0,
                  45
                )}
                ...
              </p>
              <Link
                to="https://www.aajtak.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="c-pointer"
              >
                Read More...
              </Link>
            </div>
          </div>
        </div>

        {/* 2 */}
        <div className="media-card" id="mediaCard">
          <div className="media-intro">
            <img src={AbpNews} alt="Health..." />
            <div className="media-para">
              <p>
                {"ABP News is an Indian Hindi-language free-to-air television news channel owned by ABP Group. The news channel was launched in 1998 originally as STAR News before being acquired by ABP Group.".slice(
                  0,
                  45
                )}
                ...
              </p>
              <Link
                to="https://www.abplive.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="c-pointer"
              >
                Read More...
              </Link>
            </div>
          </div>
        </div>

        {/* 3 */}
        <div className="media-card" id="mediaCard">
          <div className="media-intro">
            <img src={Indiatv} alt="Health..." />
            <div className="media-para">
              <p>
                {"India TV is a Hindi news channel based in Noida, Uttar Pradesh, India. The channel was launched on 20 May 2004 by Rajat Sharma and wife Ritu Dhawan.".slice(
                  0,
                  45
                )}
                ...
              </p>
              <Link
                to="https://www.indiatvnews.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="c-pointer"
              >
                Read More...
              </Link>
            </div>
          </div>
        </div>

        {/* 4 */}
        <div className="media-card" id="mediaCard">
          <div className="media-intro">
            <img src={Media} alt="Health..." />
            <div className="media-para">
              <p>
                {"AMediaNews Group, Inc., doing business as Digital First Media, provides news publishing services. The Company offers local news, information web sites, and mobile applications offering rich multimedia experiences.".slice(
                  0,
                  45
                )}
                ...
              </p>
              <Link
                to="https://www.medianewsgroup.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="c-pointer"
              >
                Read More...
              </Link>
            </div>
          </div>
        </div>

        {/* 5 */}
        <div className="media-card" id="mediaCard">
          <div className="media-intro">
            <img src={StarNews} alt="Health..." />
            <div className="media-para">
              <p>
                {"Star News may refer to: Star News Group, an Australian media company based in Pakenham, Victoria. ABP News (previously STAR News), an Indian news channel.".slice(
                  0,
                  45
                )}
                ...
              </p>
              <Link
                to="https://starnewsmobile.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="c-pointer"
              >
                Read More...
              </Link>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};
