import Iframe from "react-iframe";
import { HeadingSecondary } from "../Common/Heading";

const VideoMessage = () => {
  return (
    <div className="lg:w-4/6 lg:px-5">
      <HeadingSecondary
        text="মাননীয় প্রধানমন্ত্রীর বক্তব্য"
        extraClasses="lg:w-max"
      />
      <Iframe
        url="https://www.youtube.com/embed/6EzaKHdBFX0"
        className="xl:h-100 mx-auto mt-5 h-64  w-full md:h-72 md:w-5/6 lg:h-80 lg:w-full"
        allow="fullscreen"
      />
    </div>
  );
};

export default VideoMessage;
