import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import "./App.css";

// import required modules
import { Pagination } from "swiper/modules";

export default function App() {
  const [swiper, setSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    "Slide 1",
    "Slide 2",
    "Slide 3",
    "Slide 4",
    "Slide 5",
    "Slide 6",
    "Slide 7",
    "Slide 8",
    "Slide 9",
  ];

  const handleSlideChange = (swiperInstance) => {
    setActiveIndex(swiperInstance.realIndex); // Use realIndex when loop is true
  };

  const handlePaginationClick = (index) => {
    swiper.slideToLoop(index); // Use slideToLoop for correct behavior with loop
  };

  const handlePrevClick = () => {
    if (swiper) {
      if (activeIndex === 0) {
        swiper.slideToLoop(slides.length - 1);
      } else {
        swiper.slidePrev();
      }
    }
  };

  const handleNextClick = () => {
    if (swiper) {
      if (activeIndex === slides.length - 1) {
        swiper.slideToLoop(0);
      } else {
        swiper.slideNext();
      }
    }
  };

  return (
    <div style={{ height: "500px" }}>
      <Swiper
        onSwiper={setSwiper}
        onSlideChange={handleSlideChange}
        modules={[Pagination]}
        loop={true} // Enable loop
        className="mySwiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>{slide}</SwiperSlide>
        ))}
      </Swiper>

      <div className="controls">
        <button className="nav-button" onClick={handlePrevClick}>
          Prev
        </button>
        <div className="custom-pagination">
          {slides.map((_, index) => (
            <span
              key={index}
              className={`custom-bullet ${
                index === activeIndex ? "active" : ""
              }`}
              onClick={() => handlePaginationClick(index)}
            >
              {index + 1}
            </span>
          ))}
        </div>
        <button className="nav-button" onClick={handleNextClick}>
          Next
        </button>
      </div>
    </div>
  );
}
