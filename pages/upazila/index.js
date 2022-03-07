import React from "react";
import { MdPlace } from "react-icons/md";
import { BsBoxArrowInUpRight } from "react-icons/bs";

import styles from "../../styles/Background.module.css";

import Footer from "../../components/Footer/Footer";
import Nav from "../../components/Nav/Nav";
import Sidebar from "../../components/Common/CourseMenu/Sidebar";
import TraingingCenterList from "../../components/Course/TraingingCenterList";

const trainingCenterList = {
  "Cumilla Sadar South Upazila": "upazila/cumilla-sadar-south",
  "Barura Upazila": "upazila/barura",
  "Cumilla Adarsa Sadar Upazila": "upazila/cumilla-adarsa-sadar",
  "Chandina Upazila": "upazila/chandina",
  "Chauddagram Upazila": "upazila/chauddagram",
  "Daudkandi Upazila": "upazila/daudkandi",
  "Brahmanpara Upazila": "upazila/brahmanpara",
  "Homna Upazila": "upazila/homna",
  "Monohorgonj Upazila": "upazila/monohorgonj",
  "Laksam Upazila": "upazila/laksam",
  "Meghna Upazila": "upazila/meghna",
  "Titas Upazila": "upazila/titas",
  "Burichong Upazila": "upazila/burichong",
  "Nangalkot Upazila": "upazila/nangalkot",
  "Muradnagar Upazila": "upazila/muradnagar",
  "Lalmai Upazila": "upazila/lalmai",
  "Debidwar Upazila": "upazila/debidwar",
};

const Session = () => {
  return (
    <>
      <Nav />
      <main className={`relative    ${styles.backgroundCourse}`}>
        <div className="flex">
          <div className=" my-3 py-3 md:mx-auto md:w-5/6 lg:w-2/3">
            <h3 className="mx-auto mb-5 w-max border-b-2 border-gray-400 px-10 py-2 text-center text-3xl text-gray-700">
              Upazila Lists
            </h3>
            <div>
              <div className="mx-2 my-2 flex items-center rounded bg-white py-2 pl-3 shadow-md shadow-gray-500/50 md:mx-auto md:w-2/3">
                <MdPlace className="mx-1 text-lg text-gray-800" />
                <p className="text-md font-bold text-gray-800 lg:text-lg">
                  The office of Deputy Comissioner, Cumilla
                </p>
                <a
                  href="https://www.cumillarobotics.cf/start-course/index.html"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsBoxArrowInUpRight className="mx-1 inline cursor-pointer text-lg font-bold text-blue-600" />
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
