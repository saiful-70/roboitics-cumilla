import { useState, useEffect } from "react";
import Marquee from "react-fast-marquee";

import { IoIosArrowDroprightCircle } from "react-icons/io";

const EventsMarquee = () => {
  const [data, setData] = useState();
  useEffect(() => {
    const fetchTopic = async () => {
      const response = await fetch("/data/jsonData/events.json");
      const data = await response.json();
      setData(data["Upcoming Events"]);
    };
    fetchTopic();
  }, []);

  return (
    <>
      <div className="mx-auto mt-10 h-auto border border-black">
        <h3 className="bg-indigo-700 px-2 py-1 text-center font-bold text-white ">
          Upcoming Events&nbsp;»
        </h3>
        {data && (
          <Marquee
            speed={100}
            pauseOnHover="true"
            pauseOnClick="false"
            className="my-3 w-full"
            gradient={false}
          >
            {data.map((item, index) => (
              <div key={item} className="mx-5 w-full">
                <h4>
                  {data[index].date.day}, {data[index].date.month},
                  {data[index].date.year}
                </h4>
                <p>{data[index].heading}</p>
                {data[index].link && (
                  <a
                    href={data[index].link}
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
      </div>
    </>
  );
};

export default EventsMarquee;
