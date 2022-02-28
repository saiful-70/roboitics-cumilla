import { useState } from "react";
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";

import styles from "../../styles/Course.module.css";
import Card from "../../components/Home/Card";
import Sidebar from "../../components/Common/CourseMenu/Sidebar";

const Index = () => {
  return (
    <>
      <Nav />
      <main className={`relative ${styles.syllabusMain}`}>
        {/* <h1 className="py-20 text-3xl font-bold text-gray-400">
          Comming Soon....
        </h1> */}

        <div className={`flex`}>
          <Sidebar />

          <div className=" w-full lg:w-5/6">
            <Card />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Index;
