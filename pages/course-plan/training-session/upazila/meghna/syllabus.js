import { useState } from "react";
import { useRouter } from "next/router";

import styles from "../../../../../styles/Background.module.css";

import Footer from "../../../../../components/Footer/Footer";
import Nav from "../../../../../components/Nav/Nav";
import SidebarUpazila from "../../../../../components/Common/CourseMenu/SidebarUpazila";
import SidebarListItem from "../../../../../components/Common/CourseMenu/SidebarListItem";
import Topics from "../../../../../components/Syllabus/Topics/Topics";

import { sideBarItemUpazilaMeghna } from "../../../../../public/data/objectAndArrayData/sideBarUpazila";

const Index = () => {
  return (
    <>
      <Nav />
      <main className={`relative   ${styles.backgroundCourse}`}>
        <div className="flex">
          <SidebarUpazila sideBarItemUpazila={sideBarItemUpazilaMeghna} />
          <div className="mx-auto mt-5 w-full">
            <h3 className="mx-auto mb-5 w-max border-b-2 border-gray-400 px-10 py-1 text-center text-3xl text-gray-700">
              Syllabus
            </h3>
            <Topics dataUrl="/data/jsonData/syllabusUpazila.json" />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Index;
