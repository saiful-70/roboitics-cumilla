import { useState } from "react";
import SidebarListItem from "./SidebarListItem";

const sideBarItem = {
  Intro: "/course-plan",
  Syllabus: "/course-plan/syllabus",
  Booklist: "/course-plan/booklist",
  "Training Session": "/course-plan/training-session",
};

const Sidebar = () => {
  const [mobileMenu, setMobileMenu] = useState(true);

  const handleClick = () => {
    setMobileMenu(!mobileMenu);
  };

  return (
    <>
      <div
        className="z-10 h-max cursor-pointer bg-indigo-900 px-2 py-4 lg:hidden"
        onClick={() => handleClick()}
      >
        <div className={mobileMenu ? "mobileMenu" : "mobileMenuCross"}></div>
      </div>
      <ul
        className={`absolute bg-indigo-900/90 pt-8 transition-all duration-300 lg:w-1/6 ${
          mobileMenu ? "-left-full" : "left-0 h-full"
        }`}
      >
        {Object.keys(sideBarItem).map((item) => (
          <SidebarListItem key={item} item={item} link={sideBarItem[item]} />
        ))}
      </ul>
      <ul className="hidden bg-indigo-900 lg:block">
        {Object.keys(sideBarItem).map((item) => (
          <SidebarListItem key={item} item={item} link={sideBarItem[item]} />
        ))}
      </ul>
    </>
  );
};

export default Sidebar;
