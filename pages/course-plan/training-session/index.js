import React from "react";
import { MdPlace } from "react-icons/md";
import { BsBoxArrowInUpRight } from "react-icons/bs";

import styles from "../../../styles/Background.module.css";

import Footer from "../../../components/Footer/Footer";
import Nav from "../../../components/Nav/Nav";
import Sidebar from "../../../components/Common/CourseMenu/Sidebar";
import TraingingCenterList from "../../../components/Course/TraingingCenterList";

const trainingCenterList = {
  "Cumilla Sadar South Upazila": "training-session/upazila/cumilla-sadar-south",
  "Barura Upazila": "training-session/upazila/barura",
  "Cumilla Adarsa Sadar Upazila":
    "training-session/upazila/cumilla-adarsa-sadar",
  "Chandina Upazila": "training-session/upazila/chandina",
  "Chauddagram Upazila": "training-session/upazila/chauddagram",
  "Daudkandi Upazila": "training-session/upazila/daudkandi",
  "Brahmanpara Upazila": "training-session/upazila/brahmanpara",
  "Homna Upazila": "training-session/upazila/homna",
  "Monohorgonj Upazila": "training-session/upazila/monohorgonj",
  "Laksam Upazila": "training-session/upazila/laksam",
  "Meghna Upazila": "training-session/upazila/meghna",
  "Titas Upazila": "training-session/upazila/titas",
  "Burichong Upazila": "training-session/upazila/burichong",
  "Nangalkot Upazila": "training-session/upazila/nangalkot",
  "Muradnagar Upazila": "training-session/upazila/muradnagar",
  "Lalmai Upazila": "training-session/upazila/lalmai",
  "Debidwar Upazila": "training-session/upazila/debidwar",
};

const Session = () => {
  return (
    <>
      <Nav />
      <main className={`relative pt-16  ${styles.backgroundCourse}`}>
        <div className={`flex`}>
          <Sidebar />

          <div className=" mx-3 my-3 px-2 py-3 md:mx-auto md:w-5/6 lg:w-2/3">
            <h3 className="mx-auto mb-5 w-max border-b-2 border-gray-400 px-10 py-2 text-center text-3xl text-gray-700">
              Training Center List
            </h3>
            <div>
              <div className="mx-5 my-2 flex items-center rounded bg-white py-2 pl-3 shadow-md shadow-gray-500/50 md:mx-auto md:w-2/3">
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
