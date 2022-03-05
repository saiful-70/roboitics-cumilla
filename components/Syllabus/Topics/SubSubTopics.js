import { useState, useEffect } from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";
import {
  BsArrowDownCircle,
  BsCircleFill,
  BsShieldFillCheck,
} from "react-icons/bs";
import { ImRadioUnchecked } from "react-icons/im";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { HiCheckCircle } from "react-icons/hi";

const SubSubTopics = ({ data }) => {
  return (
    <>
      {Object.keys(data).map((item) => (
        <div key={item} className="my-2 ml-5 ">
          <div className="flex items-center rounded-full bg-white shadow-lg">
            <ImRadioUnchecked className="text-md ml-0.5 mr-1 text-cyan-700" />
            <p className="text-sm md:text-lg">{item}</p>
          </div>
          {data[item] !== ""
            ? data[item].map((subItem) => (
                <div key={subItem} className="my-0.5 ml-5 flex items-center">
                  <HiCheckCircle className="text-md ml-0.5 mr-1 text-indigo-900" />
                  <p className="text-xs md:text-lg">{subItem}</p>
                </div>
              ))
            : ""}
        </div>
      ))}
    </>
  );
};

export default SubSubTopics;
