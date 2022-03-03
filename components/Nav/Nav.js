import { useState } from "react";

import Link from "next/link";

import NavLists from "./NavLists";
import Image from "next/image";

import logo from "../../public/images/homepage/logo.jpg";

const Nav = () => {
  const [mobileMenu, setMobileMenu] = useState(true);

  const handleClick = () => {
    setMobileMenu(!mobileMenu);
  };

  return (
    <nav className="relative z-50 flex w-full items-center justify-between bg-indigo-900/90 py-2 font-bold text-white shadow-sm shadow-gray-300 lg:justify-center">
      {/* <div className="hidden w-1/6 px-4 py-1 lg:block">
        <Link href="/" passHref>
          <div className="relative h-14 w-14 cursor-pointer">
            <Image
              alt="logo"
              src={logo}
              layout="fill"
              className="rounded-full"
            />
          </div>
        </Link>
      </div> */}
      {/* mobile menu */}
      <div className="w-full px-5 lg:hidden">
        <div
          className="z-50 flex cursor-pointer items-center justify-center rounded-sm px-3  py-4 shadow-inner shadow-gray-100 lg:hidden"
          onClick={() => handleClick()}
        >
          <div className={mobileMenu ? "mobileMenu" : "mobileMenuCross"}></div>
          <span className="ml-3">Mobile Menu</span>
        </div>

        <ul
          className={`flex flex-col items-center overflow-hidden bg-gradient-to-br from-blue-500 to-blue-900 text-xl text-white ${
            !mobileMenu ? "transition-height h-100 pt-3 ease-in" : "h-0 "
          }`}
        >
          <NavLists />
        </ul>
      </div>

      {/* pc */}
      <ul className="hidden px-10 lg:flex lg:h-full lg:items-center lg:justify-center xl:px-20">
        <NavLists />
      </ul>
    </nav>
  );
};

export default Nav;
