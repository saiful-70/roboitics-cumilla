import { useState, useEffect } from "react";

import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";
import EventList from "../../components/Event/EventList";

const Index = () => {
  const [data, setData] = useState();
  useEffect(() => {
    const fetchTopic = async () => {
      const response = await fetch("/data/jsonData/events.json");
      const data = await response.json();
      setData(data);
    };
    fetchTopic();
  }, []);

  return (
    <>
      <Nav />
      <main className="container mx-auto w-full pt-16">
        {/* <h1 className="text-3xl font-bold text-gray-400">Comming Soon....</h1> */}
        <h2 className="mx-auto mb-5 w-max border-b-4 px-10 py-1 text-center text-3xl text-gray-700 md:w-5/6 lg:w-2/3">
          Our Events and Activities
        </h2>
        {data &&
          Object.keys(data).map((item) => (
            <div key={item} className="my-5 w-full px-5">
              <h3 className="w-max border-b-2 border-gray-300 font-bold text-gray-800">
                {item}
              </h3>
              <EventList data={data[item]} />
            </div>
          ))}
      </main>
      <Footer />
    </>
  );
};

export default Index;
