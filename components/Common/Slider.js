import Image from "next/image";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css/bundle";

const Slider = ({ slideImage }) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      slidesPerView={1}
      autoplay
      pagination={{ clickable: true }}
      className="z-0 h-full w-full"
      wrapperTag="ul"
    >
      {slideImage.map((item) => (
        <SwiperSlide key={item}>
          <div className="relative h-full w-full">
            <Image src={item} alt="slider-image" layout="fill" className="" />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
