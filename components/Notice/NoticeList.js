import React from "react";
import Link from "next/link";
import { useQuery } from "react-query";
import { IoIosArrowDroprightCircle } from "react-icons/io";

const NoticeList = () => {
  const { isLoading, data } = useQuery(
    "notices",
    async () => {
      const response = await fetch(
        "https://json.extendsclass.com/bin/3c3f3c08b23d"
      );

      const data = await response.json();
      return data;
    },
    { cacheTime: 100 }
  );

  if (isLoading) {
    return (
      <h1 className="height-screen flex items-center justify-center text-3xl text-blue-600">
        Loading....
      </h1>
    );
  }

  return (
    <>
      {data &&
        data.map((notice) => (
          <div
            key={notice.id}
            className="mx-3 my-3 flex border border-gray-500 px-2 py-3 md:mx-auto md:w-5/6 lg:w-2/3"
          >
            <div
              className="notices-center flex h-20 w-max flex-col justify-center bg-blue-600 p-3 text-center text-white
          "
            >
              <span className="text-2xl font-bold">{notice.date.day}</span>
              <span className="w-max text-gray-200">
                {notice.date.month}, {notice.date.year}
              </span>
            </div>
            <div className="flex flex-col justify-center pl-3">
              <p>{notice.heading}</p>
              <Link href={`/notices/${notice.id}`}>
                <a className="w-max bg-indigo-600 p-1 text-left text-white">
                  <span className="pr-1">View</span>
                  <IoIosArrowDroprightCircle className="inline" />
                </a>
              </Link>
            </div>
          </div>
        ))}
    </>
  );
};

export default NoticeList;
