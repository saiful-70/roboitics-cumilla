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
      className="lg:h-100 mb-10 h-64 rounded-sm border-b-2 border-indigo-900 px-5 py-5 md:h-72 md:w-5/6 lg:w-2/3 "
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
