import Iframe from "react-iframe";
import { HeadingSecondary } from "../Common/Heading";

const VideoMessage = () => {
  return (
    <div>
      <HeadingSecondary text="মাননীয় প্রধানমন্ত্রীর বক্তব্য" />
      <Iframe
        url="https://www.youtube.com/embed/6EzaKHdBFX0"
        className="lg:h-100 mx-auto mt-5 mb-10 h-64 w-full md:h-72 md:w-5/6"
        allow="fullscreen"
      />
    </div>
  );
};

export default VideoMessage;
