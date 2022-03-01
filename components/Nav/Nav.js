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
    <nav className="fixed z-50 flex w-screen items-center justify-between bg-indigo-900/90 px-4 font-bold text-white shadow-sm shadow-gray-300 ">
      <div className="w-1/6 px-4 py-1">
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
      </div>
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
