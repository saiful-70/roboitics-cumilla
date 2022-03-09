import React from "react";
import { MdPlace } from "react-icons/md";
import { BsBoxArrowInUpRight } from "react-icons/bs";
import Link from "next/link";

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

const UpazilaLists = () => {
  return (
    <>
      {Object.keys(trainingCenterList).map((item) => (
        <div key={item}>
          <div className="mx-2 my-2 flex items-center rounded bg-white py-2 pl-3 shadow-md shadow-gray-500/50 md:mx-auto md:w-2/3">
            <MdPlace className="mx-1 text-lg text-gray-800" />
            <p className="text-md font-bold text-gray-800 lg:text-lg">{item}</p>
            <Link href={trainingCenterList[item]}>
              <a target="_blank" rel="noreferrer">
                <BsBoxArrowInUpRight className="mx-1 cursor-pointer text-lg font-bold text-blue-600" />
              </a>
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};

export default UpazilaLists;
