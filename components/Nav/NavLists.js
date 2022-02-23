import React, { useState } from "react";
import Link from "next/link";
import NavListItem from "./NavListItem";

const navItem = {
  HOME: "/",
  EVENTS: "/events",
  NOTICES: "/notices",
  "TRAINING SESSION": "/training-session",
  "ABOUT US": "/about-us",
};

const NavLists = () => {
  return (
    <>
      {Object.keys(navItem).map((item) => (
        <NavListItem key={item} item={item} link={navItem[item]} />
      ))}
    </>
  );
};

export default NavLists;
