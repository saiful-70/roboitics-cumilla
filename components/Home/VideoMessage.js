import Iframe from "react-iframe";
import { HeadingSecondary } from "../Common/Heading";

const VideoMessage = () => {
  return (
    <div>
      <HeadingSecondary text="ভিডিও বার্তা" />
      <Iframe
        url="https://www.youtube.com/embed/OTroAxvRNbw"
        className="lg:h-100 mx-auto mt-5 mb-10 h-64 w-full md:h-72 md:w-5/6"
        allow="fullscreen"
      />
    </div>
  );
};

export default VideoMessage;
