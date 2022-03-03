import React, { useState } from "react";
import Link from "next/link";
import NavListItem from "./NavListItem";

const navItem = {
  HOME: "/",
  "COURSE PLAN": "/course-plan",
  EVENTS: "/events",
  NOTICES: "/notices",
  GALLERY: "/gallery",
  FABLAB: "/fablab",
  "ABOUT US": "/about-us",
  "MEMBER REGISTRATION": "/register",
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
