
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "./Carousel.css";

import LeftNavigation from "./LeftNavigation";
import RightNavigation from "./RightNavigation";

const Carousel = ({ items = [], renderItem }) => {
  const [swiper, setSwiper] = useState(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const updateNavigation = (instance) => {
    setIsBeginning(instance.isBeginning);
    setIsEnd(instance.isEnd);
  };

  return (
    <div className="carousel-container">
      {swiper && !isBeginning && (
        <LeftNavigation onClick={() => swiper.slidePrev()} />
      )}

      <Swiper
        onSwiper={(instance) => {
          setSwiper(instance);
          updateNavigation(instance);
        }}
        onSlideChange={updateNavigation}
        onResize={updateNavigation}
        spaceBetween={20}
        slidesPerView={2}
        breakpoints={{
          600: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 5,
          },
        }}
      >
        {items.map((item, index) => (
          <SwiperSlide key={item.id || item.slug || index}>
            {renderItem(item)}
          </SwiperSlide>
        ))}
      </Swiper>

      {swiper && !isEnd && (
        <RightNavigation onClick={() => swiper.slideNext()} />
      )}
    </div>
  );
};

export default Carousel;
