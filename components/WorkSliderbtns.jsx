"use client";
import { useSwiper } from "swiper/react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
const WorkSliderBtns = ({ containerStyles, btnStyles, iconsStyles }) => {
  const swiper = useSwiper();
  return (
    <div className={containerStyles}>
      <button className={btnStyles}
        onClick={() => swiper.slidePrev()}>
        <MdKeyboardArrowRight  className={iconsStyles} />
      </button>
      <button className={btnStyles}  onClick={() => swiper.slideNext()}>
        <MdKeyboardArrowLeft  className={iconsStyles} />
      </button>
    </div>
  );
};

export default WorkSliderBtns;
