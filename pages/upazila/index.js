import { Tab } from "@headlessui/react";
import styles from "../../styles/Background.module.css";

import Footer from "../../components/Footer/Footer";
import Nav from "../../components/Nav/Nav";

import UpazilaLists from "../../components/Upazila/UpazilaLists";
import Topics from "../../components/Syllabus/Topics/Topics";

const Session = () => {
  return (
    <>
      <Nav />
      <main
        className={`relative ${styles.backgroundCourse} commonWidth px-3 lg:px-0 lg:shadow-lg lg:shadow-gray-400`}
      >
        <div className="py-3 md:mx-auto md:w-5/6 lg:w-2/3">
          <Tab.Group className="w-full py-5 px-2 lg:px-5" as="div">
            <Tab.List className="mb-5 flex rounded-xl bg-gradient-to-br from-blue-500 to-blue-900 p-1">
              <Tab
                className={({
                  selected,
                }) => `w-1/2 rounded-lg px-1 py-2 text-sm font-bold text-blue-900
                  ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2 
                  ${
                    selected
                      ? "bg-white  shadow"
                      : "text-blue-100 hover:bg-white hover:text-blue-900"
                  }`}
              >
                <h3>Upazila Lists</h3>
              </Tab>
              <Tab
                className={({
                  selected,
                }) => `w-1/2 rounded-lg px-1 py-2 text-sm font-bold text-blue-900
                  ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2 
                  ${
                    selected
                      ? "bg-white  shadow"
                      : "text-blue-100 hover:bg-white hover:text-blue-900"
                  }`}
              >
                <h3>Primary Syllabus</h3>
              </Tab>
            </Tab.List>

            <Tab.Panels>
              <Tab.Panel>
                <UpazilaLists />
              </Tab.Panel>
              <Tab.Panel>
                <Topics dataUrl="/data/jsonData/syllabusUpazila.json" />
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Session;
