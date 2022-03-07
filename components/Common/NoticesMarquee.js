import Link from "next/link";
import { useState, useEffect } from "react";
import Marquee from "react-fast-marquee";

import { IoIosArrowDroprightCircle } from "react-icons/io";

const NoticesMarquee = () => {
  const [data, setData] = useState();
  useEffect(() => {
    const fetchTopic = async () => {
      const response = await fetch("/data/jsonData/notices.json");
      const data = await response.json();
      setData(data);
    };
    fetchTopic();
  }, []);

  return (
    <>
      <div className="mx-auto mt-10 h-auto border border-black bg-white">
        <h3 className="bg-indigo-700 px-2 py-1 text-center text-lg font-bold text-white ">
          Notices
        </h3>
        {data && (
          <Marquee
            speed={100}
            pauseOnHover="true"
            pauseOnClick="false"
            className="my-3 w-full cursor-text"
            gradient={false}
          >
            {data.map((item) => (
              <div key={item} className="mx-5 w-full border-r-2 border-black">
                <h4 className="font-bold">
                  {item.date.day} {item.date.month}, {item.date.year}
                </h4>
                <p className="text-lg">{item.heading}</p>
                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    className="w-max rounded bg-indigo-600 p-1 text-left text-white"
                  >
                    <span className="pr-1">details</span>
                    <IoIosArrowDroprightCircle className="inline" />
                  </a>
                )}
              </div>
            ))}
          </Marquee>
        )}
        <Link href="/notices">
          <a className="ml-auto block w-max bg-indigo-800 px-2 py-1 text-sm font-bold text-white">
            View All&nbsp;»
          </a>
        </Link>
      </div>
    </>
  );
};

export default NoticesMarquee;
