import React from "react";
import Image from "next/image";

import { HeadingSecondary } from "../Common/Heading";

import dcOfficeLogo from "../../public/images/homepage/administrator.jpg";
import couLogo from "../../public/images/homepage/university.jpg";
import quantaLogo from "../../public/images/homepage/quanta.png";

const Organizer = () => {
  return (
    <div>
      <HeadingSecondary text="আয়োজনে" />
      <div>
        <div className="relative mx-auto mt-6 h-32 w-72">
          <Image
            src={dcOfficeLogo}
            alt="dc office logo"
            layout="fill"
            className={`rounded shadow-md shadow-gray-500`}
          />
        </div>
        <h4 className="mt-2 text-center text-xl font-bold  hover:underline">
          <a href="http://comilla.gov.bd/">জেলা প্রশাসন, কুমিল্লা</a>
        </h4>
      </div>

      <HeadingSecondary text="বাস্তবায়নে সহযোগী" />
      <div className="md:flex md:justify-center">
        {/* <div>
          <div className="relative mx-auto mt-8 h-48 w-48 md:mr-4">
            <Image
              src={couLogo}
              alt="dc office logo"
              layout="fill"
              className={`rounded-full`}
            />
          </div>
          <h4 className="mt-2 text-center text-xl font-bold hover:underline">
            <a href="http://cou.ac.bd/">
              কুমিল্লা বিশ্ববিদ্যালয়, <br />
              কুমিল্লা
            </a>
          </h4>
        </div> */}

        <div>
          <div className="relative mx-auto mt-8 h-48 w-48 md:ml-4">
            <Image
              src={quantaLogo}
              alt="dc office logo"
              layout="fill"
              className={`rounded-full`}
            />
          </div>
          <h4 className="mt-2 text-center text-xl font-bold hover:underline">
            <a href="https://quantarobotics.com/">Quanta Robotics</a>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Organizer;
