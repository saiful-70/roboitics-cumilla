import { useState } from "react";
import { Tab } from "@headlessui/react";

import Nav from "../../components/Nav/Nav";
import AboutCard from "../../components/AboutUs/AboutCard";
import Footer from "../../components/Footer/Footer";

const categories = [
  "ORGANIZER",
  "ROBOTICS TEAM",
  "DEVELOPERS TEAM",
  "TRAINERS TEAM",
];

const Index = ({ data }) => {
  const { organizers, robotics, trainers, developers } = data;
  return (
    <div className="">
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

            <Tab.Panels className="mt-2 ">
              <Tab.Panel className="flex flex-col items-center md:flex-row md:flex-wrap md:items-start md:justify-center">
                {organizers.map((item) => (
                  <AboutCard key={item.id} item={item} />
                ))}
              </Tab.Panel>

              <Tab.Panel className="flex flex-col items-center md:flex-row md:flex-wrap md:items-start md:justify-center">
                {robotics.map((item) => (
                  <AboutCard key={item.id} item={item} />
                ))}
              </Tab.Panel>

              <Tab.Panel className="flex flex-col items-center md:flex-row md:flex-wrap md:items-start md:justify-center">
                {developers.map((item) => (
                  <AboutCard key={item.id} item={item} />
                ))}
              </Tab.Panel>

              <Tab.Panel className="flex flex-col items-center md:flex-row md:flex-wrap md:items-start md:justify-center">
                {trainers.map((item) => (
                  <AboutCard key={item.id} item={item} />
                ))}
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;

export const getServerSideProps = async () => {
  const response = await fetch(
    "https://json.extendsclass.com/bin/fa99fd08289c"
  );

  const data = await response.json();

  return {
    props: {
      data,
    },
  };
};
