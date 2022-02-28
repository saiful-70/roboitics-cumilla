import React from "react";
import { FaRegDotCircle } from "react-icons/fa";

import styles from "../../styles/Course.module.css";

import Footer from "../../components/Footer/Footer";
import Nav from "../../components/Nav/Nav";
import Sidebar from "../../components/Common/CourseMenu/Sidebar";
import Card from "../../components/Home/Card";

const Session = () => {
  return (
    <>
      <Nav />
      <main className={`relative ${styles.syllabusMain}`}>
        {/* <h1 className="py-20 text-3xl font-bold text-gray-400">
          Comming Soon....
        </h1> */}

        <div className={`flex`}>
          <Sidebar />

          <div className=" w-full lg:w-5/6">
            <div className="">
              <p className="mt-2 mb-4 rounded-full border-2 border-solid bg-sky-900 px-9  py-3 text-3xl font-semibold leading-8 tracking-tight  text-white sm:text-4xl">
                Book List
              </p>
            </div>

            <div className="flex">
              <div className="border-2 bg-sky-900  px-4 py-5">
                <FaRegDotCircle style={{ color: "white", fontSize: "30px" }} />
              </div>
              <div className="flex space-x-4 border-2 bg-white px-6 py-5">
                <p className="inline text-lg font-bold text-black ">
                  BOOK NAME |
                </p>{" "}
                <p className="inline text-lg font-bold text-gray-600 ">
                  Writer Name
                </p>
                <button className="rounded-full bg-green-500 px-5 font-bold text-white hover:bg-green-700">
                  {" "}
                  Visit{" "}
                </button>
              </div>
            </div>

            <div className="flex">
              <div className="border-2 bg-sky-900  px-4 py-5">
                <FaRegDotCircle style={{ color: "white", fontSize: "30px" }} />
              </div>
              <div className="flex space-x-4 border-2 bg-white px-6 py-5">
                <p className="inline text-lg font-bold text-black ">
                  BOOK NAME |
                </p>{" "}
                <p className="inline text-lg font-bold text-gray-600 ">
                  Writer Name
                </p>
                <button className="rounded-full bg-green-500 px-5 font-bold text-white hover:bg-green-700">
                  {" "}
                  Visit{" "}
                </button>
              </div>
            </div>

            <div className="flex">
              <div className="border-2 bg-sky-900  px-4 py-5">
                <FaRegDotCircle style={{ color: "white", fontSize: "30px" }} />
              </div>
              <div className="flex space-x-4 border-2 bg-white px-6 py-5">
                <p className="inline text-lg font-bold text-black ">
                  BOOK NAME |
                </p>{" "}
                <p className="inline text-lg font-bold text-gray-600 ">
                  Writer Name
                </p>
                <button className="rounded-full bg-green-500 px-5 font-bold text-white hover:bg-green-700">
                  {" "}
                  Visit{" "}
                </button>
              </div>
            </div>

            <div className="flex">
              <div className="border-2 bg-sky-900  px-4 py-5">
                <FaRegDotCircle style={{ color: "white", fontSize: "30px" }} />
              </div>
              <div className="flex space-x-4 border-2 bg-white px-6 py-5">
                <p className="inline text-lg font-bold text-black ">
                  BOOK NAME |
                </p>{" "}
                <p className="inline text-lg font-bold text-gray-600 ">
                  Writer Name
                </p>
                <button className="rounded-full bg-green-500 px-5 font-bold text-white hover:bg-green-700">
                  {" "}
                  Visit{" "}
                </button>
              </div>
            </div>

            <div className="flex">
              <div className="border-2 bg-sky-900  px-4 py-5">
                <FaRegDotCircle style={{ color: "white", fontSize: "30px" }} />
              </div>
              <div className="flex space-x-4 border-2 bg-white px-6 py-5">
                <p className="inline text-lg font-bold text-black ">
                  BOOK NAME |
                </p>{" "}
                <p className="inline text-lg font-bold text-gray-600 ">
                  Writer Name
                </p>
                <button className="rounded-full bg-green-500 px-5 font-bold text-white hover:bg-green-700">
                  {" "}
                  Visit{" "}
                </button>
              </div>
            </div>

            <div className="flex">
              <div className="border-2 bg-sky-900  px-4 py-5">
                <FaRegDotCircle style={{ color: "white", fontSize: "30px" }} />
              </div>
              <div className="flex space-x-4 border-2 bg-white px-6 py-5">
                <p className="inline text-lg font-bold text-black ">
                  BOOK NAME |
                </p>{" "}
                <p className="inline text-lg font-bold text-gray-600 ">
                  Writer Name
                </p>
                <button className="rounded-full bg-green-500 px-5 font-bold text-white hover:bg-green-700">
                  {" "}
                  Visit{" "}
                </button>
              </div>
            </div>

            <div className="flex">
              <div className="border-2 bg-sky-900  px-4 py-5">
                <FaRegDotCircle style={{ color: "white", fontSize: "30px" }} />
              </div>
              <div className="flex space-x-4 border-2 bg-white px-6 py-5">
                <p className="inline text-lg font-bold text-black ">
                  BOOK NAME |
                </p>{" "}
                <p className="inline text-lg font-bold text-gray-600 ">
                  Writer Name
                </p>
                <button className="rounded-full bg-green-500 px-5 font-bold text-white hover:bg-green-700">
                  {" "}
                  Visit{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Session;
