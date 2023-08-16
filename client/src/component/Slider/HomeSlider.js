import React from "react";
import HeroSlider, { Slide, Nav } from "hero-slider";
//1. Service Section For Home
const ServicesSlide1 = require("../Files/Home/banner/Knla.jpg");
const ServicesSlide2 = require("../Files/Home/banner/Motiva.jpg");
const ServicesSlide3 = require("../Files/Home/banner/Netma.jpg");
const ServicesSlide4 = require("../Files/Home/banner/TeamBuild.jpg");

export const HomeSlider = () => {
  return (
    <HeroSlider
      height={"100%"}
      // height={"455px"}
      // height={"580px"}
      // height='90vmin'
      autoplay
      controller={{
        initialSlide: 1,
        autoplaySpeed: 5000,
        slidingDuration: 700,
        slidingDelay: 0,

        onSliding: (nextSlide) => nextSlide,
        onBeforeSliding: (previousSlide) => previousSlide,
        onAfterSliding: (nextSlide) => nextSlide,
      }}
    >
      <Slide
        background={{
          backgroundImageSrc: ServicesSlide1,
        }}
      />

      <Slide
        background={{
          backgroundImageSrc: ServicesSlide2,
        }}
      />

      <Slide
        background={{
          backgroundImageSrc: ServicesSlide3,
        }}
      />

      <Slide
        background={{
          backgroundImageSrc: ServicesSlide4,
        }}
      />
      <Nav />
    </HeroSlider>
  );
};
export default HomeSlider;
