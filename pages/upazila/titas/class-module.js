import { useState } from "react";
import { useRouter } from "next/router";

import styles from "../../../styles/Background.module.css";

import Footer from "../../../components/Footer/Footer";
import Nav from "../../../components/Nav/Nav";
import SidebarUpazila from "../../../components/Common/CourseMenu/SidebarUpazila";

import { sideBarItemUpazilaTitas } from "../../../public/data/objectAndArrayData/sideBarUpazila";

const Index = () => {
  return (
    <>
      <Nav />
      <main
        className={`commonWidth relative shadow-lg shadow-gray-300 lg:shadow-lg  ${styles.backgroundCourse}`}
      >
        <div className="flex">
          <SidebarUpazila sideBarItemUpazila={sideBarItemUpazilaTitas} />
          <div className="mx-auto mt-5 w-full">
            <h3 className="mx-auto mb-5 w-max border-b-2 border-gray-400 px-10 py-1 text-center text-3xl text-gray-700">
              Class Module
            </h3>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Index;
