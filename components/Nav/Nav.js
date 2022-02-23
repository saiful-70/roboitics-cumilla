import { useState } from "react";

import Link from "next/link";

import React from "react";
import NavLists from "./NavLists";

const Nav = () => {
  const [mobileMenu, setMobileMenu] = useState(true);

  const handleClick = () => {
    setMobileMenu(!mobileMenu);
  };

  return (
    <nav className="relative z-50 flex items-center justify-between bg-gradient-to-br from-blue-500 to-blue-900 px-4 font-bold text-white shadow-md ">
      <h3
        className={`font-weight-bold w-1/6 px-4 py-2 text-center text-3xl text-white`}
      >
        logo
      </h3>
      <div
        className="z-50 cursor-pointer rounded-sm px-2 py-4 shadow-inner  shadow-gray-100 lg:hidden"
        onClick={() => handleClick()}
      >
        <div className={mobileMenu ? "mobileMenu" : "mobileMenuCross"}></div>
      </div>

      <ul
        className={`absolute top-0 flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-blue-500 to-blue-900 text-xl text-white ${
          !mobileMenu ? "left-0 flex transition delay-500" : "-left-full"
        }`}
      >
        <NavLists />
      </ul>

      <ul className="hidden px-10 lg:flex lg:h-full lg:items-center lg:justify-center xl:px-20">
        <NavLists />
      </ul>
    </nav>
  );
};

export default Nav;
