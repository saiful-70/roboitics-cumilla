import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const NavListItem = ({ item, link, onHandleClick }) => {
  const router = useRouter();

  const handleClick = () => {
    // e.preventDefault();
    router.push(link);
  };

  return (
    <li
      className="mb-5 transition ease-in-out hover:scale-110 hover:transform lg:m-0"
      onClick={handleClick ? () => handleClick() : null}
    >
      <Link href={link}>
        <a
          href={link}
          className={`border-white py-2 px-3 transition-all  hover:border-b-4 ${
            router.asPath === link
              ? "rounded-tl-lg rounded-br-lg bg-white text-blue-900"
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
