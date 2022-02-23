import React from "react";

import Image from "next/image";

import avatar from "../../public/images/download.png";

import { FiPhoneCall } from "react-icons/fi";
import { GrMail } from "react-icons/gr";
import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";
import { FaDiscord, FaFacebookF, FaLinkedinIn } from "react-icons/fa";

const AboutCard = ({ item }) => {
  const { image, name, department, phone, email, social, speciality } = item;

  return (
    <div className="mt-5 flex w-80 flex-col rounded-lg bg-gradient-to-br from-violet-600 to-violet-800 pt-2 md:mx-2 md:w-72 lg:w-72">
      <div className="mb-3 flex flex-col items-center px-3 font-bold text-white">
        <div className="relative mt-2 h-28 w-28 rounded-full border-4 border-gray-400">
          <Image
            src={image === "" ? avatar : image}
            alt="just image"
            layout="fill"
            className="rounded-full"
          />
        </div>
        <h4 className=" mt-2 rounded-full bg-gray-100 px-3 py-1 text-blue-900">
          {name}
        </h4>
        <p className="mt-1 text-center text-sm font-normal">
          {speciality === ""
            ? ""
            : speciality.map((item) => "| " + item + " | ")}
        </p>
        <h4 className="text-center text-sm">{`DEPT. of ${department}`}</h4>
      </div>

      <div className="flex flex-col items-center rounded-t-3xl rounded-b-lg bg-gradient-to-br from-indigo-900 to-indigo-600 px-3 py-3 shadow-lg shadow-indigo-500">
        <p className="my-1 flex items-center text-white">
          <span className="mr-2 rounded-full bg-gray-200 p-1">
            <FiPhoneCall className="text-sm font-bold text-black" />
          </span>
          <span>{phone === "" ? "01XXXXXXXXX" : phone}</span>
        </p>
        <p className="mb-1 flex flex-wrap items-center justify-center text-white">
          <span className="mr-2 rounded-full bg-gray-200 p-1">
            <GrMail className="text-sm font-bold text-black" />
          </span>
          <span className="text-w text-center">
            {email === "" ? `email_name@example.com` : email}
          </span>
        </p>
        <div className="my-1 flex w-2/3 rounded-full bg-amber-500">
          <span className=" h-full w-1/3 rounded-full bg-gray-200 px-2 py-1">
            Social
          </span>
          <div className="flex w-2/3 justify-around py-1 px-3">
            <a
              href={`https://www.facebook.com/${social.facebook}`}
              className="rounded-full bg-blue-900 p-1 transition-transform hover:scale-125"
            >
              <FaFacebookF className="text-white" />
            </a>

            <a
              href={`https://www.linkedin.com/in/${social.linkedin}`}
              className="rounded-full bg-blue-700 p-1 transition-transform hover:scale-125"
            >
              <FaLinkedinIn className="text-white" />
            </a>
            <a
              href={`https://github.com/${social.github}`}
              className="rounded-full bg-white p-1 transition-transform hover:scale-125"
            >
              <BsGithub className="" />
            </a>
            {/* <a
              href={`https://discord.com/channels/${social.discord}`}
              className="rounded-full bg-indigo-600 p-1 transition-transform hover:scale-125"
            >
              <FaDiscord className="text-white" />
            </a> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
