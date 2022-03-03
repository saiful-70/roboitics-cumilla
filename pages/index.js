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

// images for slider
const slideImage = [
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

      {/* <Marquee /> */}
      <div className={`relative h-80 pt-20 lg:h-screen`}>
        <Slider slideImage={slideImage} />
        <div className="absolute top-0 left-0 z-10 h-full w-full bg-gradient-to-br from-black/70 to-black/20"></div>
        <h1 className="absolute top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-1/4 bg-gradient-to-r  from-gray-100 to-gray-400 bg-clip-text text-center text-xl font-extrabold leading-normal text-transparent sm:text-3xl lg:-translate-y-1/2 lg:text-6xl lg:leading-relaxed">
          কুমিল্লা রোবটিক্স এবং প্রোগ্রামিং ক্লাব
        </h1>
      </div>
      <Nav />

      <main
        className={`${styles.backgroundHome} container mx-auto mt-5 h-full w-full px-5`}
      >
        <Card />
        <VideoMessage />
        <Messages />
        <div className="mx-auto flex flex-col bg-white px-5 py-3 md:w-2/3 md:flex-row">
          <div className="relative mx-auto mb-5 h-32 w-5/6 py-5 shadow-lg shadow-gray-300 md:mb-0 md:mr-3 lg:h-40 lg:w-2/3">
            <Image
              alt="digital bangladesh"
              src="/images/homepage/digital-bangladesh.png"
              layout="fill"
              className="bg-white"
            />
          </div>
          <div className="relative mx-auto h-32 w-5/6 py-5 shadow-lg shadow-gray-300 lg:h-40 lg:w-2/3">
            <Image
              alt="digital bangladesh"
              src="/images/homepage/mujib-shotoborso.png"
              layout="fill"
              className="bg-white"
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
