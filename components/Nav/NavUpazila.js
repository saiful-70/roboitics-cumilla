import { useState } from "react";

import Link from "next/link";

import NavLists from "./NavLists";
import Image from "next/image";

const Nav = ({ navItemUpazila }) => {
  const [mobileMenu, setMobileMenu] = useState(true);

  const handleClick = () => {
    setMobileMenu(!mobileMenu);
  };
  return (
    <nav className="commonWidth relative z-50 flex items-center justify-around bg-indigo-900/90 py-1 font-bold text-white shadow-md shadow-gray-300">
      <div className="mr-3 hidden py-1 lg:block">
        <Link href="/" passHref>
          <div className="relative h-14 w-14 cursor-pointer">
            <Image
              alt="logo"
              src="/images/homepage/logo.jpg"
              layout="fill"
              className="rounded-full"
            />
          </div>
        </Link>
      </div>
      {/* mobile menu */}
      <div className="w-full px-5 lg:hidden">
        <div
          className="z-50 flex cursor-pointer items-center justify-center rounded-sm px-3  py-4 shadow-inner shadow-gray-100 lg:hidden"
          onClick={() => handleClick()}
        >
          <div className={mobileMenu ? "mobileMenu" : "mobileMenuCross"}></div>
          <span className="ml-3">Main Menu</span>
        </div>

        <ul
          className={`flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-blue-500 to-blue-900 text-xl text-white ${
            !mobileMenu ? "transition-height h-96 pt-3 ease-in" : "h-0 "
          }`}
        >
          <NavLists navItem={navItemUpazila} />
        </ul>
      </div>

      {/* pc */}
      <ul className="hidden lg:flex lg:h-full lg:items-center lg:justify-center">
        <NavLists navItem={navItemUpazila} />
      </ul>
    </nav>
  );
};

export default Nav;
