import { useState, useEffect } from "react";
import { Tab } from "@headlessui/react";

import Nav from "../../components/Nav/Nav";
import AboutCard from "../../components/AboutUs/AboutCard";
import Footer from "../../components/Footer/Footer";

const categories = [
  "ORGANIZER",
  "ROBOTICS TEAM",
  "DEVELOPERS TEAM",
  "PROGRAMMING TRAINERS",
];

const Index = () => {
  const [data, setData] = useState();
  useEffect(() => {
    const fetchTopic = async () => {
      const response = await fetch("/data/jsonData/about.json");
      const data = await response.json();
      setData(data);
    };
    fetchTopic();
  }, []);

  const categories = [];
  return (
    <div className="">
      <div className="hidden">
        {data && Object.keys(data).map((item) => categories.push(item))}
      </div>
      <Nav />
      <main className=" mx-auto lg:container">
        <div className="w-full px-2 py-10 md:px-10 lg:px-16">
          <Tab.Group>
            <Tab.List className="flex rounded-xl bg-gradient-to-br from-blue-500 to-blue-900 p-1">
              {categories.map((category) => (
                <Tab
                  key={category}
                  className={({
                    selected,
                  }) => `w-1/3 rounded-lg px-1 py-2 text-sm font-bold text-blue-900
                  ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2 
                  ${
                    selected
                      ? "bg-white  shadow"
                      : "text-blue-100 hover:bg-white hover:text-blue-900"
                  }`}
                >
                  {category}
                </Tab>
              ))}
            </Tab.List>

            {data && (
              <Tab.Panels className="mt-2 ">
                <Tab.Panel className="flex flex-col items-center md:flex-row md:flex-wrap md:items-start md:justify-center">
                  {data[categories[0]].map((item) => (
                    <AboutCard key={item.id} item={item} />
                  ))}
                </Tab.Panel>

                <Tab.Panel className="flex flex-col items-center md:flex-row md:flex-wrap md:items-start md:justify-center">
                  {data[categories[1]].map((item) => (
                    <AboutCard key={item.id} item={item} />
                  ))}
                </Tab.Panel>

                <Tab.Panel className="flex flex-col items-center md:flex-row md:flex-wrap md:items-start md:justify-center">
                  {data[categories[2]].map((item) => (
                    <AboutCard key={item.id} item={item} />
                  ))}
                </Tab.Panel>

                <Tab.Panel className="flex flex-col items-center md:flex-row md:flex-wrap md:items-start md:justify-center">
                  {data[categories[3]].map((item) => (
                    <AboutCard key={item.id} item={item} />
                  ))}
                </Tab.Panel>
              </Tab.Panels>
            )}
          </Tab.Group>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;

// export const getStaticProps = async () => {
//   const response = await fetch("./data/jsonData/about.json");

//   const data = await response.json();

//   return {
//     props: {
//       data,
//     },
//   };
// };
