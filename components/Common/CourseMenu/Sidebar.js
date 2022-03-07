import { useState } from "react";

import SidebarListItem from "./SidebarListItem";

const Sidebar = ({ sideBarItem }) => {
  const [mobileMenu, setMobileMenu] = useState(true);

  const handleClick = () => {
    setMobileMenu(!mobileMenu);
  };

  return (
    <>
      <div
        className="z-10 flex h-max cursor-pointer items-center bg-indigo-900 px-2 py-4 lg:hidden "
        onClick={() => handleClick()}
      >
        <div className={mobileMenu ? "mobileMenu" : "mobileMenuCross"}></div>
        <span className="ml-2 font-bold text-white">Menu</span>
      </div>
      <ul
        className={`absolute bg-indigo-900/90 pt-12 transition-all duration-300 lg:w-1/6 ${
          mobileMenu ? "-left-full" : "left-0 h-full"
        }`}
      >
        {Object.keys(sideBarItem).map((item) => (
          <SidebarListItem key={item} item={item} link={sideBarItem[item]} />
        ))}
      </ul>
      <ul className=" hidden bg-indigo-900 lg:block">
        {Object.keys(sideBarItem).map((item) => (
          <SidebarListItem key={item} item={item} link={sideBarItem[item]} />
        ))}
      </ul>
    </>
  );
};

export default Sidebar;
