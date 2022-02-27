import React from "react";
import Footer from "../../components/Footer/Footer";
import Nav from "../../components/Nav/Nav";

import { BsFillArrowUpRightSquareFill } from "react-icons/bs";

const index = () => {
  return (
    <>
      <Nav />
      <main className="flex w-screen flex-col items-center justify-center py-10">
        <h1 className="py-20 text-3xl font-bold text-gray-400">
          Comming Soon....
        </h1>
        {/* <div className="mb-5 w-5/6 border-b-2 border-blue-500 pb-5 text-center">
          <a
            href="https://www.cumillarobotics.cf/start-course/index.html"
            target="_blank"
            rel="noreferrer"
            className="rounded bg-gradient-to-br from-indigo-500 to-indigo-700 py-3 px-5 text-center font-bold text-white"
          >
            <h3 className="inline pr-1">কুমিল্লা সদর</h3>
            <BsFillArrowUpRightSquareFill className="font-lg inline text-white " />
          </a>
        </div>
        <div className="">
          <h3 className="rounded bg-gradient-to-br from-indigo-500 to-indigo-700 py-3 px-5 text-center font-bold text-white">
            উপজিলা
          </h3>
          <a href="https://www.cumillarobotics.cf/">
            Session <BsFillArrowUpRightSquareFill className="inline" />
          </a>
        </div> */}
      </main>
      <Footer />
    </>
  );
};

export default index;
