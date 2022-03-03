import React from "react";
import Link from "next/link";
import { IoIosArrowDroprightCircle } from "react-icons/io";

const EventList = ({ data }) => {
  return (
    <>
      {data.map((item, index) => (
        <div
          key={item}
          className="mx-auto my-3 flex border border-gray-500 px-2 py-3  md:w-5/6 lg:w-2/3"
        >
          <div
            className="notices-center flex h-20 w-max flex-col justify-center bg-blue-600 p-3 text-center text-white
          "
          >
            <span className="text-2xl font-bold">{data[index].date.day}</span>
            <span className="w-max text-gray-200">
              {data[index].date.month}, {data[index].date.year}
            </span>
          </div>
          <div className="flex flex-col justify-center pl-3">
            <p>{data[index].heading}</p>
            {data[index].link && (
              <a
                href={data[index].link}
                target="_blank"
                rel="noreferrer"
                className="w-max bg-indigo-600 p-1 text-left text-white"
              >
                <span className="pr-1">details</span>
                <IoIosArrowDroprightCircle className="inline" />
              </a>
            )}
          </div>
        </div>
      ))}
    </>
  );
};

export default EventList;
