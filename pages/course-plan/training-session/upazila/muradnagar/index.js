import styles from "../../../../../styles/Background.module.css";

import Footer from "../../../../../components/Footer/Footer";
import Nav from "../../../../../components/Nav/Nav";
import SidebarUpazila from "../../../../../components/Common/CourseMenu/SidebarUpazila";

import { sideBarItemUpazilaMuradnagar } from "../../../../../public/data/objectAndArrayData/sideBarUpazila";

const Index = () => {
  return (
    <>
      <Nav />
      <main className={`relative   ${styles.backgroundCourse}`}>
        <div className="flex">
          <SidebarUpazila sideBarItemUpazila={sideBarItemUpazilaMuradnagar} />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Index;
