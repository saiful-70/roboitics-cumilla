import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { BsFillCircleFill, BsBoxArrowInUpRight } from "react-icons/bs";

const NavLists = ({ item, link }) => {
  const router = useRouter();

  const handleClick = () => {
    // e.preventDefault();
    router.push(link);
  };

  return (
    <li
      className="mb-5 w-max rounded border-2 transition ease-in-out hover:scale-110 hover:transform lg:m-0 lg:mx-1"
      onClick={handleClick ? () => handleClick() : null}
    >
      <Link href={link}>
        <a
          className={`xl:text-md flex items-center border-b-0 border-white px-2 py-2 text-xs transition-all hover:border-b-4 ${
            router.asPath === link ? "bg-white text-blue-900" : ""
          }`}
        >
          {item}
          {router.asPath === link && (
            <BsFillCircleFill className="ml-1 inline text-sm" />
          )}
        </a>
      </Link>
    </li>
  );
};

export default NavLists;

export const NavListsUpazila = ({ item, link }) => {
  const router = useRouter();

  const handleClick = () => {
    // e.preventDefault();
    router.push(link);
  };

  return (
    <li
      className="mb-5 w-max rounded border-2 transition ease-in-out hover:scale-110 hover:transform lg:m-0 lg:mx-1"
      onClick={handleClick ? () => handleClick() : null}
    >
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        className={
          "xl:text-md flex cursor-pointer items-center border-b-0 border-white px-2 py-1 text-xs transition-all hover:border-b-4"
        }
      >
        {item}
        <BsBoxArrowInUpRight className="ml-1 inline text-sm" />
      </a>
    </li>
  );
};
