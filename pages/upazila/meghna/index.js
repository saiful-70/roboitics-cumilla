import { useState } from "react";
import { useRouter } from "next/router";

import styles from "../../../styles/Background.module.css";

import Footer from "../../../components/Footer/Footer";
import Nav from "../../../components/Nav/Nav";
import SidebarUpazila from "../../../components/Common/CourseMenu/SidebarUpazila";

import { sideBarItemUpazilaMeghna } from "../../../public/data/objectAndArrayData/sideBarUpazila";

const Index = () => {
  return (
    <>
      <Nav />
      <main
        className={`commonWidth relative shadow-lg shadow-gray-300 lg:shadow-lg  ${styles.backgroundCourse}`}
      >
        <div className="flex">
          <SidebarUpazila sideBarItemUpazila={sideBarItemUpazilaMeghna} />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Index;
