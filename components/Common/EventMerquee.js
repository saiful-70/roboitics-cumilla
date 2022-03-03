import { useState, useEffect } from "react";
import Marquee from "react-fast-marquee";
import EventList from "../Event/EventList";

export const EventsMarquee = () => {
  const [data, setData] = useState();
  useEffect(() => {
    const fetchTopic = async () => {
      const response = await fetch("/data/jsonData/events.json");
      const data = await response.json();
      setData(data["Current Events"]);
    };
    fetchTopic();
  }, []);

  return (
    <>
      <div className="mx-auto mt-10 border border-black">
        <h3 className="bg-indigo-700 px-2 py-1 text-center font-bold text-white ">
          Upcoming Events&nbsp;»
        </h3>
        {data && (
          <Marquee speed={100} pauseOnHover="true" className="my-3 w-full px-5">
            <EventList data={data} extraClass="mx-5" />
          </Marquee>
        )}
      </div>
    </>
  );
};
