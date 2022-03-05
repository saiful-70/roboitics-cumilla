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
import SubSubTopics from "./SubSubTopics";

const Topics = ({ data }) => {
  return (
    <>
      {Object.keys(data).map((item) => (
        <div key={item} className="ml-5">
          <div className="my-1 flex items-center rounded-full bg-cyan-800 py-1 text-white">
            <IoMdCheckmarkCircleOutline className="ml-0.5 mr-1 text-xl" />
            <p className="text-md font-bold md:text-lg ">{item}</p>
          </div>
          <div>
            <SubSubTopics data={data[item]} />
          </div>
        </div>
      ))}
    </>
  );
};

export default Topics;
