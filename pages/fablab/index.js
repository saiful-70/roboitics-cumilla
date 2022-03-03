import React from "react";
import Image from "next/image";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css/bundle";

import Footer from "../../components/Footer/Footer";
import Nav from "../../components/Nav/Nav";

const slideImage = [
  "/images/fab-lab/0.jpg",
  "/images/fab-lab/1.jpg",
  "/images/fab-lab/2.jpg",
];

const Index = () => {
  return (
    <>
      <Nav />
      <main className="relative bg-gray-200  ">
        <div className="md:w-105 mx-auto  w-full rounded bg-white px-5 py-5 shadow-lg shadow-gray-300 lg:w-2/3">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            slidesPerView={1}
            autoplay
            pagination={{ clickable: true }}
            className="xl:h-100 h-48 shadow-lg shadow-indigo-300 md:h-64 md:w-full lg:h-80 lg:w-5/6"
            wrapperTag="ul"
          >
            {slideImage.map((item) => (
              <SwiperSlide key={item}>
                <div className="relative h-full w-full">
                  <Image
                    src={item}
                    alt="slider-image"
                    layout="fill"
                    className="shadow-lg shadow-gray-300"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="mx-auto w-5/6 rounded-md py-5 lg:w-2/3">
          <h3 className=" bg-blue-900 py-2 text-center text-xl font-bold text-white">
            What is a Fablab?
          </h3>
          <p className="text-md bg-gray-100 py-5 px-2 text-center shadow-md shadow-blue-500">
            A Fab Lab, or digital fabrication laboratory, is a place to play, to
            create, to mentor and to invent: a place for learning and
            innovation. Fab Labs provide access to the environment, the skills,
            the materials and the advanced technology to allow anyone anywhere
            to make (almost) anything.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Index;
