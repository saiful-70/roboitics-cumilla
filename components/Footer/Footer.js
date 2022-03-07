import React from "react";
import Image from "next/image";
import Link from "next/link";

import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { GrMail } from "react-icons/gr";
import { BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <div className=" bg-indigo-900 py-10 px-3 text-white">
      <div className="border-b-2 border-gray-400 pb-5">
        <div className="relative my-2 mx-auto h-32 w-2/3 border-2 shadow-md shadow-gray-600 md:h-40 lg:h-60 lg:w-1/3">
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
            <div className="flex ">
              <a
                href="#"
                className="rounded-full bg-blue-900 p-1 transition-transform hover:scale-125"
              >
                <FaFacebookF className="text-white" />
              </a>

              <a
                href="#"
                className="rounded-full bg-blue-700 p-1 transition-transform hover:scale-125"
              >
                <FaLinkedinIn className="text-white" />
              </a>
              <a
                href="#"
                className="rounded-full p-1 text-white transition-transform hover:scale-125"
              >
                <BsGithub className="" />
              </a>
            </div>
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
            <Link href="/course-plan">
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
          href="https://github.com/ICT-CoU"
          className="text-blue md:text-md text-sm font-bold underline"
        >
          &nbsp;Developers Team
        </a>
      </p>
    </div>
  );
};

export default Footer;
