import Image from "next/image";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Navigation,
  Pagination,
  Autoplay,
  EffectFade,
} from "swiper";

// Import Swiper styles
import "swiper/css/bundle";

SwiperCore.use([Navigation, Pagination, Autoplay, EffectFade]);

const Slider = ({ slideImage }) => {
  return (
    <Swiper
      autoplay={{
        delay: 2000,
        disableOnInteraction: true,
      }}
      loop={true}
      effect="fade"
      className="z-0 h-full w-full shadow-lg  shadow-indigo-400"
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
