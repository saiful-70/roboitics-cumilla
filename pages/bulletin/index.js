import React from "react";
import { IoIosArrowDroprightCircle } from "react-icons/io";

import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";

const bulletin = {
  "December, 2021":
    "https://drive.google.com/file/d/1U7eJQkKjuqIH2rDiENxTJPoanxMPLkiE/view?usp=sharing",
  "January, 2022":
    "https://drive.google.com/file/d/1q8S3qth7h6JisbdjHSAva3x0C4lK6Bio/view?usp=sharing",
};

const Index = () => {
  return (
    <>
      <Nav />
      <main className="container mx-auto py-10">
        <h3 className="mx-auto mb-5 w-max border-b-4 px-10 py-1 text-center text-3xl text-gray-700">
          Monthly Bulletin
        </h3>
        <div>
          {Object.keys(bulletin).map((item) => (
            <div
              key={item.id}
              className="mx-3 my-3 flex border border-gray-500 px-2 py-3 md:mx-auto md:w-5/6 lg:w-2/3"
            >
              <div
                className="notices-center flex h-20 w-max flex-col justify-center bg-blue-600 p-3 text-center text-white
          "
              >
                <span className="text-2xl font-bold">{item}</span>
              </div>
              <div className="flex flex-col justify-center pl-3">
                <a
                  href={bulletin[item]}
                  target="_blank"
                  rel="noreferrer"
                  className="w-max bg-indigo-600 p-1 text-left text-white"
                >
                  <span className="pr-1">View</span>
                  <IoIosArrowDroprightCircle className="inline" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Index;
