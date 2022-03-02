import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const NavListItem = ({ item, link }) => {
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
          className={`border-b-0 border-white px-2 text-lg transition-all hover:border-b-4 ${
            router.asPath === link ? "bg-white text-blue-900" : ""
          }`}
        >
          {item}
        </a>
      </Link>
    </li>
  );
};

export default NavListItem;
