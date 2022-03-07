import { useState, useEffect } from "react";
import { Tab } from "@headlessui/react";

import styles from "../../styles/Background.module.css";

import Nav from "../../components/Nav/Nav";
import AboutCard from "../../components/AboutUs/AboutCard";
import Footer from "../../components/Footer/Footer";

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

  return (
    <>
      <Nav />
      <main
        className={`${styles.backgroundHome} commonWidth mx-auto shadow-lg shadow-gray-400`}
      >
        <Tab.Group className="w-full py-10 px-2 lg:px-5" as="div">
          <Tab.List className="flex rounded-xl bg-gradient-to-br from-blue-500 to-blue-900 p-1">
            {data &&
              Object.keys(data).map((category) => (
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

          <Tab.Panels className="mt-2 ">
            {data &&
              Object.keys(data).map((category, index) => (
                <Tab.Panel
                  key={category}
                  className="flex flex-col items-center md:flex-row md:flex-wrap md:items-start md:justify-center"
                >
                  {data[category].map((item) => (
                    <AboutCard key={item.id} item={item} />
                  ))}
                </Tab.Panel>
              ))}
          </Tab.Panels>
        </Tab.Group>
      </main>
      <Footer />
    </>
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
