import React from "react";
import Image from "next/image";
import Link from "next/link";

import { FaFacebookF, FaTelegramPlane } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { GrMail } from "react-icons/gr";
import { BsBoxArrowInUpRight } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="commonWidth bg-indigo-900 py-10 px-3 text-white">
      <div className="border-b-2 border-gray-400 pb-5">
        <div className="relative my-2 mx-auto h-32 w-2/3 border-2 shadow-md shadow-gray-600 md:h-40 lg:w-1/3">
          <Image
            src="/images/crpc-logo-footer.jpg"
            alt="front-pic"
            layout="fill"
            className=""
            priority="true"
          />
        </div>
        <p className="pt-2 text-center font-bold md:text-lg lg:text-xl">
          Advancing Towards 4IR
        </p>
      </div>

      <div className="flex flex-col border-b-2 border-gray-400 md:flex-row md:justify-around lg:mx-auto lg:w-2/3">
        <div className="py-3 px-10">
          <h4 className="w-max border-b-2 text-sm font-bold">CONTACT</h4>
          <div className="py-3">
            <p className="my-1 flex items-center text-white">
              <span className="mr-2 rounded-full bg-gray-200 p-1">
                <FiPhoneCall className="text-sm font-bold text-black" />
              </span>
              <span>01733354918</span>
            </p>
            <p className="mb-1 flex text-white">
              <span className="mr-2 rounded-full bg-gray-200 p-1">
                <GrMail className="text-sm font-bold text-black" />
              </span>
              <span className="">acictcomilla@gmail.com</span>
            </p>

            <a
              href="https://facebook.com/groups/1118663255337090/"
              target="_blank"
              rel="noreferrer"
              className="mb-1 mt-3 flex items-center font-bold text-white hover:underline"
            >
              <span className="mr-1 rounded-full bg-black p-2">
                <FaFacebookF className="" />
              </span>
              <span className="text-md mr-1 xl:text-lg">Facebook Group</span>
              <BsBoxArrowInUpRight />
            </a>
            <a
              href="https://t.me/+NsQhhLHwDE1lYTU1"
              target="_blank"
              rel="noreferrer"
              className="mb-1 mt-1 flex items-center font-bold text-white hover:underline"
            >
              <span className="mr-1 rounded-full bg-black p-2">
                <FaTelegramPlane className="" />
              </span>
              <span className="text-md mr-1 xl:text-lg">Telegram Channel</span>
              <BsBoxArrowInUpRight />
            </a>
          </div>
        </div>

        <div className="px-10 pb-3 md:pt-3">
          <h4 className="w-max border-b-2 text-sm font-bold">
            IMPORTANT LINKS
          </h4>
          <div className="flex flex-col pt-3 text-sm font-bold text-gray-300">
            <a
              href="https://drive.google.com/file/d/14j29Cz3Osbzdx3FRj7hRWq0UpRZZRHeu/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="w-min transition-transform hover:scale-105 hover:underline"
            >
              Constitution
            </a>
            <Link href="/course-plan">
              <a className="w-min transition-transform hover:scale-105 hover:underline">
                Events
              </a>
            </Link>
            <Link href="/bulletin">
              <a className="w-min transition-transform hover:scale-105 hover:underline">
                Bulletin
              </a>
            </Link>
            <Link href="/notices">
              <a className="w-min transition-transform hover:scale-105 hover:underline">
                Notices
              </a>
            </Link>
            <Link href="/news">
              <a className="w-min font-bold transition-transform hover:scale-105 hover:underline">
                News
              </a>
            </Link>
          </div>
        </div>

        <div className="px-10 pb-3 md:pt-3">
          <h4 className="w-max border-b-2 text-sm font-bold">QUICK LINKS</h4>
          <div className="flex flex-col pt-3 text-sm font-bold text-gray-300">
            <Link href="/register">
              <a className="w-min transition-transform hover:scale-105 hover:underline">
                Register
              </a>
            </Link>
            <Link href="/events">
              <a className="w-min transition-transform hover:scale-105 hover:underline">
                Courses
              </a>
            </Link>
            <Link href="/faq">
              <a className="w-min font-bold transition-transform hover:scale-105 hover:underline">
                FAQ
              </a>
            </Link>
          </div>
        </div>
      </div>

      <p className="mt-5 text-center">
        Copyright &copy;
        <Link href="/">
          <a className="text-blue md:text-md text-sm font-bold underline">
            Robotics & Programming Club,
          </a>
        </Link>
        &nbsp;Cumilla
      </p>
      <p className="text-center">
        Made with love by
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/saiful-70"
          className="text-blue md:text-md text-sm font-bold underline"
        >
          &nbsp;Developers Team
        </a>
      </p>
    </div>
  );
};

export default Footer;
