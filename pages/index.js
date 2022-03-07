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
import EventsMarquee from "../components/Common/EventsMerquee";
import NoticesMarquee from "../components/Common/NoticesMarquee";
import HeaderStripe, {
  HeaderStripeMobile,
} from "../components/Common/HeaderStripe";

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

      <main
        className={`commonWidth mx-auto lg:bg-white lg:px-5 lg:shadow-md lg:shadow-gray-400`}
      >
        <HeaderStripe />
        <HeaderStripeMobile />
        <div className="xl:h-98 relative h-64">
          <Slider slideImage={slideImage} />
          {/* <div className="absolute left-5 top-0 z-10 hidden h-full w-full -translate-y-10  items-center lg:flex">
          <div className="bg-white/70">
            <div className="relative z-20 h-52 w-52 ">
              <Image
                src="/images/crpc-logo.png"
                alt="crpc logo"
                layout="fill"
                className=""
              />
            </div>
          </div>
          <div className="h-max w-max bg-white/50 font-bold leading-4">
            <h4 className="text-lg text-indigo-900">CUMILLA</h4>
            <h3 className="text-2xl ">ROBOTICS &</h3>
            <h3 className="text-2xl ">PROGRAMMING CLUB</h3>
            <h4 className="text-lg text-indigo-900">CLUB</h4>
            <h5 className="bg-orange-600 text-white">
              District Administration, Cumilla
            </h5>
          </div>
        </div> */}
        </div>
        <Nav />

        <div className="flex w-full flex-col px-3 lg:flex-row lg:items-center lg:justify-center lg:px-0">
          <VideoMessage />
          {/* <div className="relative h-96 w-full">
            <Image
              src="/images/crpc-leaflet.jpg"
              alt="crpc leaflet"
              layout="fill"
            />
          </div> */}
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
