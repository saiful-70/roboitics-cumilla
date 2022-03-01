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
      className="mb-5 rounded border-2 transition ease-in-out hover:scale-110 hover:transform lg:m-0 lg:mx-2"
      onClick={handleClick ? () => handleClick() : null}
    >
      <Link href={link}>
        <a
          className={`border-b-0 border-white py-1 px-2 transition-all hover:border-b-4 ${
            router.asPath === link
              ? "rounded-none rounded-tl-lg rounded-br-lg bg-white text-blue-900"
              : ""
          }`}
        >
          {item}
        </a>
      </Link>
    </li>
  );
};

export default NavListItem;
