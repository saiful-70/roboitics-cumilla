import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { IoIosArrowDroprightCircle } from "react-icons/io";

const SidebarListItem = ({ item, link }) => {
  const router = useRouter();

  const handleClick = () => {
    // e.preventDefault();
    router.push(link);
  };
  <li className="my-2 border-b border-gray-500 py-2 px-5 text-lg font-bold text-gray-400 hover:text-white">
    Intro
  </li>;
  return (
    <li
      className="my-2 border-b border-gray-500 py-2 px-5 text-lg font-bold text-gray-400 hover:text-white"
      onClick={handleClick ? () => handleClick() : null}
    >
      <Link href={link}>
        <a
          className={`border-white py-1 px-2 transition-all  hover:border-b-4 ${
            router.asPath === link ? "text-white" : ""
          }`}
        >
          {item}
          {router.asPath === link ? (
            <IoIosArrowDroprightCircle className="inline" />
          ) : (
            <></>
          )}
        </a>
      </Link>
    </li>
  );
};

export default SidebarListItem;
