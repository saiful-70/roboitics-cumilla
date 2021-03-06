import React from "react";

import styles from "../../styles/Background.module.css";

import Footer from "../../components/Footer/Footer";
import Nav from "../../components/Nav/Nav";
import Sidebar from "../../components/Common/CourseMenu/Sidebar";
import Topics from "../../components/Syllabus/Topics/Topics";
import { sideBarItem } from "../../public/data/objectAndArrayData/sideBarCoursePlan";

const Index = () => {
  return (
    <>
      <Nav />
      <main className={`commonWidth relative ${styles.backgroundCourse}`}>
        <div className="flex">
          <Sidebar sideBarItem={sideBarItem} />
          <div className="mx-auto mt-5 w-full">
            <h3 className="mx-auto mb-5 w-max border-b-2 border-gray-400 px-5 py-1 text-center text-3xl text-gray-700">
              Primary Syllabus
            </h3>
            <Topics dataUrl="/data/jsonData/syllabusMain.json" />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Index;
