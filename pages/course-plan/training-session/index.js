import React from "react";
import { MdPlace } from "react-icons/md";
import { BsBoxArrowInUpRight } from "react-icons/bs";

import Footer from "../../../components/Footer/Footer";
import Nav from "../../../components/Nav/Nav";
import Sidebar from "../../../components/Common/CourseMenu/Sidebar";
import TraingingCenterList from "../../../components/Course/TraingingCenterList";

const trainingCenterList = {
  "Comilla Sadar South Upazila": "",
  "Comilla Adarsa Sadar Upazila": "",
  "Chandina Upazila": "",
  "Chauddagram Upazila": "",
  "Daudkandi Upazila": "",
  "Brahmanpara Upazila": "",
  "Homna Upazila": "",
  "Monohorgonj Upazila": "",
  "Laksam Upazila": "",
  "Meghna Upazila": "",
  "Titas Upazila": "",
};

const Session = () => {
  return (
    <>
      <Nav />
      <main className="relative">
        <div className={`flex`}>
          <Sidebar />

          <div className=" mx-3 w-full bg-gray-200">
            <h3 className="mx-auto mb-5 w-max border-b-2 border-gray-400 px-10 py-2 text-center text-3xl text-gray-700">
              Training Center List
            </h3>
            <div>
              <div className="mx-5 my-2 flex items-center rounded border-2 bg-white py-2 pl-3 shadow-md shadow-gray-500/50 md:mx-auto md:w-2/3">
                <MdPlace className="mx-1 text-lg text-gray-800" />
                <p className=" text-lg font-bold text-gray-800">
                  The office of Deputy Comissioner, Cumilla
                </p>
                <a
                  href="https://www.cumillarobotics.cf/start-course/index.html"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsBoxArrowInUpRight className="mx-1 cursor-pointer text-lg font-bold text-blue-600" />
                </a>
              </div>
            </div>
            {Object.keys(trainingCenterList).map((item) => (
              <TraingingCenterList
                key={item}
                item={item}
                link={trainingCenterList[item]}
              />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Session;
