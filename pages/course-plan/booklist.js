import React from "react";

import styles from "../../styles/Background.module.css";

import Footer from "../../components/Footer/Footer";
import Nav from "../../components/Nav/Nav";
import Sidebar from "../../components/Common/CourseMenu/Sidebar";
import Booklist from "../../components/Course/Booklist";
import { sideBarItem } from "../../public/data/objectAndArrayData/sideBarCoursePlan";

const Index = () => {
  return (
    <>
      <Nav />
      <main className={`commonWidth relative ${styles.backgroundCourse}`}>
        {/* <h1 className="py-20 text-3xl font-bold text-gray-400">
          Comming Soon....
        </h1> */}

        <div className={`flex`}>
          <Sidebar sideBarItem={sideBarItem} />

          <div className="w-full lg:w-5/6">
            <h2 className="mx-auto mb-5 border-b-2 border-gray-400 px-10 py-1 text-center text-3xl text-gray-700 lg:w-max">
              Recommended Book List
            </h2>
            <Booklist />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Index;
