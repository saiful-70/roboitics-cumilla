import { useState } from "react";

import { Tab } from "@headlessui/react";

import Head from "next/head";
import Image from "next/image";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";

import styles from "../styles/Home.module.css";
// Import Swiper styles
import "swiper/css/bundle";

import Nav from "../components/Nav/Nav";

import HomeCard from "../components/Home/HomeCard";
import HomeMessages from "../components/Home/HomeMessages";
import HomeOrganizer from "../components/Home/HomeOrganizer";
import Footer from "../components/Footer/Footer";

const slideImage = [
  "/images/homepage/slide/0.jpg",
  "/images/homepage/slide/1.jpg",
  "/images/homepage/slide/2.jpg",
  "/images/homepage/slide/3.jpg",
  "/images/homepage/slide/4.jpg",
];

export default function Home() {
  return (
    <div className={`${styles.background}`}>
      <Head>
        <title>Robotics Cumilla</title>
        <meta
          name="description"
          content="Cumilla Robotics and Programming Club"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />

      <main className={`bg-heroSvg container mx-auto mt-5 h-full w-full px-5`}>
        <div>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            slidesPerView={1}
            navigation
            autoplay
            pagination={{ clickable: true }}
            className="mt-5 mb-10 h-64 w-full rounded-sm border-2 border-white shadow-md shadow-blue-500 md:h-72 md:w-5/6 lg:h-96"
            wrapperTag="ul"
          >
            <SwiperSlide>
              <div className="relative h-full w-full">
                <Image
                  src={slideImage[0]}
                  alt="slider-image"
                  layout="fill"
                  className=""
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative h-full w-full">
                <Image alt="slider image" src={slideImage[1]} layout="fill" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative h-full w-full">
                <Image alt="slider image" src={slideImage[2]} layout="fill" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative h-full w-full">
                <Image alt="slider image" src={slideImage[3]} layout="fill" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative h-full w-full">
                <Image alt="slider image" src={slideImage[4]} layout="fill" />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        <HomeCard />
        <HomeMessages />
        <HomeOrganizer />
      </main>
      <Footer />
    </div>
  );
}

// export const getServerSideProps = async () => {
//   const response = await fetch(
//     "https://json.extendsclass.com/bin/26301d924e23"
//   );
//   const data = await response.json();

//   return {
//     props: {
//       data,
//     },
//   };
// };
