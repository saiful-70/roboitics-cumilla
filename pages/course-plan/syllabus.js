import React from "react";

import styles from "../../styles/Course.module.css";

import Footer from "../../components/Footer/Footer";
import Nav from "../../components/Nav/Nav";
import Sidebar from "../../components/Common/CourseMenu/Sidebar";
import Topics from "../../components/Syllabus/Topics";

const Index = () => {
  return (
    <>
      <Nav />
      <main className={`relative ${styles.syllabusMain}`}>
        <div className="flex">
          <Sidebar />
          <div className="mx-auto mt-5">
            <h3 className="mx-auto mb-5 w-max border-b-2 border-gray-400 px-10 py-1 text-center text-3xl text-gray-700">
              Syllabus
            </h3>
            <Topics />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Index;
