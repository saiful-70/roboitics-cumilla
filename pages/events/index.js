import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";

import Nav from "../../components/Nav/Nav";

// Import Swiper styles
import "swiper/css/bundle";
import Image from "next/image";
import Footer from "../../components/Footer/Footer";

SwiperCore.use([Navigation, Pagination, Autoplay]);

const Index = () => {
  return (
    <>
      <Nav />
      <main className="flex h-96 w-screen items-center justify-center py-20">
        <h1 className="text-3xl font-bold text-gray-400">Comming Soon....</h1>
        {/* <Swiper
          spaceBetween={50}
          slidesPerView={1}
          navigation
          autoplay
          pagination={{ clickable: true }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          className="h-72 w-full bg-blue-500"
          wrapperTag="ul"
        >
          <SwiperSlide>
            <div className="h-full w-full">
              <Image
                alt="slider image"
                src="/images/for-design/slide1.jpg"
                layout="fill"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
        </Swiper> */}
      </main>
      <Footer />
    </>
  );
};

export default Index;
