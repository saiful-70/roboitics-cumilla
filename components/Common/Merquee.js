import React from "react";
import Marquee from "react-fast-marquee";

const Merquee = () => {
  return (
    <Marquee speed={60} pauseOnHover="true" className="h-10 w-full bg-white">
      Site is Under Construction! Please be Patient. It will be ready soon...
    </Marquee>
  );
};

export default Merquee;
