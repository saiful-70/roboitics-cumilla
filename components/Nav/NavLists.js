import React, { useState } from "react";
import Link from "next/link";
import NavListItem from "./NavListItem";



const NavLists = ({navItem}) => {
  return (
    <>
      {Object.keys(navItem).map((item) => (
        <NavListItem key={item} item={item} link={navItem[item]} />
      ))}
    </>
  );
};

export default NavLists;
