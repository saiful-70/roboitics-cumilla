import Head from "next/head";
import Image from "next/image";

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
import Marquee from "../components/Common/Merquee";

// images for slider
const slideImage = [
  // "/images/homepage/slide/0.jpg",
  // "/images/homepage/slide/1.jpg",
  "/images/homepage/slide/homeImage.jpeg",
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

      <Nav />

      {/* <Marquee /> */}
      <div className={`relative h-screen`}>
        <Slider slideImage={slideImage} />
        <div className="absolute top-0 left-0 z-10 h-screen w-full bg-gradient-to-br from-black/80 to-black/20"></div>
        <h1 className="absolute top-1/2 left-1/2 z-20 -translate-x-1/2  text-center text-4xl font-bold text-gray-300">
          মুজিব শতবর্ষ ও বাংলাদেশের সূবর্ণ জয়ন্তী উপলক্ষে কুমিল্লা জেলাপ্রশাসন
          কর্তৃক আয়োজিত রোবটিক্স ও প্রোগ্রামিং কোর্স।
        </h1>
      </div>

      <main
        className={`${styles.backgroundHome} container mx-auto mt-5 h-full w-full px-5`}
      >
        <Card />
        {/* <VideoMessage /> */}
        <Messages />
        <div className="mx-auto flex flex-col md:w-2/3 md:flex-row">
          <div className="relative mx-auto mb-5 h-32 w-5/6 py-5 shadow-md shadow-gray-300 md:mb-0 md:mr-3 lg:h-36 lg:w-2/3">
            <Image
              alt="digital bangladesh"
              src="/images/homepage/digital-bangladesh.png"
              layout="fill"
              className=""
            />
          </div>
          <div className="relative mx-auto h-32 w-5/6 py-5 shadow-md shadow-gray-300 lg:h-36 lg:w-2/3">
            <Image
              alt="digital bangladesh"
              src="/images/homepage/mujib-shotoborso.png"
              layout="fill"
              className=""
            />
          </div>
        </div>
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
