import Head from "next/head";

// Import Home style
import styles from "../styles/Home.module.css";

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
  "/images/homepage/slide/0.jpg",
  "/images/homepage/slide/1.jpg",
  "/images/homepage/slide/2.jpg",
  "/images/homepage/slide/3.jpg",
  "/images/homepage/slide/4.jpg",
];

export default function Home() {
  return (
    <div className="background-all">
      <Head>
        <title>Robotics | Programming</title>
        <meta
          name="description"
          content="Cumilla Robotics and Programming Club"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />
      <Marquee />
      <div className=" w-full bg-gray-400/70 py-3 px-5">
        <Slider slideImage={slideImage} />
      </div>
      <main className={`bg-heroSvg container mx-auto mt-5 h-full w-full px-5`}>
        <Card />
        <VideoMessage />
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
