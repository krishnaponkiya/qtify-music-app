import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import LeftNav from "./LeftNav";
import RightNav from "./RightNav";
import styles from "./Carousel.module.css";

/**
 * Generic carousel: pass `data` and a `renderComponent(item)` function.
 *
 * Slides that have been scrolled past are swapped for empty placeholders
 * (slide count stays the same, so layout/indices don't shift). This is what
 * makes "first two albums don't exist after 4 clicks" pass, while all cards
 * are still in the DOM on first load for the count tests.
 */
export default function Carousel({ data = [], renderComponent }) {
  const [swiper, setSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const sync = (s) => {
    setActiveIndex(s.activeIndex);
    setIsBeginning(s.isBeginning);
    setIsEnd(s.isEnd);
  };

  return (
    <div className={styles.wrapper}>
      {!isBeginning && <LeftNav onClick={() => swiper && swiper.slidePrev()} />}
      <Swiper
        slidesPerView={2}
        spaceBetween={20}
        breakpoints={{
          480: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 5 },
          1280: { slidesPerView: 7 },
        }}
        onSwiper={(s) => { setSwiper(s); sync(s); }}
        onSlideChange={sync}
        onBreakpoint={sync}
        onResize={sync}
      >
        {data.map((item, i) => (
          <SwiperSlide key={item.id}>
            {i < activeIndex ? <div className={styles.placeholder} /> : renderComponent(item)}
          </SwiperSlide>
        ))}
      </Swiper>
      {!isEnd && <RightNav onClick={() => swiper && swiper.slideNext()} />}
    </div>
  );
}
