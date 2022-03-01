import React from "react";
import { MdPlace } from "react-icons/md";
import { BsBoxArrowInUpRight } from "react-icons/bs";

const TraingingCenterList = ({ item }) => {
  return (
    <div>
      <div className="mx-5 my-2 flex items-center rounded bg-white py-2 pl-3 shadow-md shadow-gray-500/50 md:mx-auto md:w-2/3">
        <MdPlace className="mx-1 text-lg text-gray-800" />
        <p className=" text-lg font-bold text-gray-800">{item}</p>
        <BsBoxArrowInUpRight className="mx-1 cursor-pointer text-lg font-bold text-blue-600" />
      </div>
    </div>
  );
};

export default TraingingCenterList;
