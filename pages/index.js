import Head from "next/head";
import Image from "next/image";

import { BsFillArrowUpRightCircleFill } from "react-icons/bs";

// Import Home style
import styles from "../styles/Background.module.css";

// import custom component
import Nav from "../components/Nav/Nav";
import Card from "../components/Home/Card";
import Messages from "../components/Home/Message";
import VideoMessage from "../components/Home/VideoMessage";
import Organizer from "../components/Home/Organizer";
import Footer from "../components/Footer/Footer";
import Slider from "../components/Common/Slider";
import EventsMarquee from "../components/Common/EventsMerquee";
import NoticesMarquee from "../components/Common/NoticesMarquee";
import HeaderStripe, {
  HeaderStripeMobile,
} from "../components/Common/HeaderStripe";
import Link from "next/link";

// images for slider
const slideImage = [
  "/images/homepage/slide/homeImage0.jpg",
  "/images/homepage/slide/homeImage1.jpeg",
  "/images/homepage/slide/homeImage2.jpeg",
];

export default function Home() {
  return (
    <div className={`${styles.backgroundHome} relative`}>
      <Head>
        <title>Robotics | Programming</title>
        <meta
          name="description"
          content="Cumilla Robotics and Programming Club"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HeaderStripe />
      <HeaderStripeMobile />
      <div className="commonWidth relative h-64 xl:h-98">
        <Slider slideImage={slideImage} />
      </div>
      <Nav />

      <main
        className={`commonWidth mx-auto lg:bg-white lg:px-5 lg:shadow-md lg:shadow-gray-400`}
      >
        <div className="mx-8 my-5 motion-safe:animate-pulse lg:mx-auto lg:w-1/2">
          {/* <Link href="/register">
            <a className="xl:text-md text-md  flex items-center justify-center rounded-full border-b-0 border-white bg-gradient-to-br from-indigo-500 to-indigo-800 px-5 py-3 font-bold text-white transition-all">
              Member Registration is going on!
              <BsFillArrowUpRightCircleFill className="ml-1 text-xl" />
            </a>
          </Link> */}

          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdieRAFJB5roHM4eaL3CV-AmhAHBGntdPqf_3BlMmLqw0Xmqg/viewform"
            target="_blank"
            rel="noreferrer"
            className="xl:text-md text-md  flex items-center justify-center rounded-full border-b-0 border-white bg-gradient-to-br from-indigo-500 to-indigo-800 px-5 py-3 font-bold text-white transition-all"
          >
            নতুন ব্যাচের রেজিস্ট্রেশন শুরু হয়েছে।
            <BsFillArrowUpRightCircleFill className="ml-1 text-xl" />
          </a>
        </div>

        <div className="flex w-full flex-col px-3 lg:flex-row  lg:justify-center lg:px-0 lg:pt-5">
          <VideoMessage />
          <Card />
        </div>
        <div className="px-3 lg:px-0">
          <EventsMarquee />
          <NoticesMarquee />
        </div>
        <Messages />
        <Organizer />
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
