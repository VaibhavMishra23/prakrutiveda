import React from "react";
import "./HeroSlider.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import slide1 from "../../assets/Slide1.png";
import slide1_1 from "../../assets/Slide1_1.png";
import slide2 from "../../assets/Slide2.png";
import slide2_1 from "../../assets/Slide2_1.png";
import slide3 from "../../assets/Slide3.png";
import slide3_1 from "../../assets/Slide3_1.png";

function HeroSlider() {

  const slides = [
    {
      desktop: slide1,
      mobile: slide1_1,
    },
    {
      desktop: slide2,
      mobile: slide2_1,
    },
    {
      desktop: slide3,
      mobile: slide3_1,
    },
  ];

  return (
    <section className="pv-hero">
      <Swiper
        modules={[Pagination, Autoplay]}
        slidesPerView={1}
        loop={true}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        className="pv-swiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>

            {/* Desktop */}
            <img
              src={slide.desktop}
              alt={`Slide ${index + 1}`}
              className="pv-slide-image desktop-slide"
            />

            {/* Mobile */}
            <img
              src={slide.mobile}
              alt={`Slide ${index + 1}`}
              className="pv-slide-image mobile-slide"
            />

          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default HeroSlider;