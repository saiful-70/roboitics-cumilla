import { useState } from "react";
import { useRouter } from "next/router";

import styles from "../../../../../styles/Background.module.css";

import Footer from "../../../../../components/Footer/Footer";
import Nav from "../../../../../components/Nav/Nav";
import SidebarUpazila from "../../../../../components/Common/CourseMenu/SidebarUpazila";
import SidebarListItem from "../../../../../components/Common/CourseMenu/SidebarListItem";
import TopicsUpazila from "../../../../../components/Syllabus/TopicsUpazila";

import { sideBarItemUpazilaDaudkandi } from "../../../../../public/data/objectAndArrayData/sideBarUpazila";

const Index = () => {
  const [mobileMenu, setMobileMenu] = useState(true);

  const handleClick = () => {
    setMobileMenu(!mobileMenu);
  };
  return (
    <>
      <Nav />
      <main className={`relative pt-16 ${styles.backgroundCourse}`}>
        <div className="flex">
          <SidebarUpazila sideBarItemUpazila={sideBarItemUpazilaDaudkandi} />
          <div className="mx-auto mt-5 w-full">
            <h3 className="mx-auto mb-5 w-max border-b-2 border-gray-400 px-10 py-1 text-center text-3xl text-gray-700">
              Syllabus
            </h3>
            <TopicsUpazila />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Index;
