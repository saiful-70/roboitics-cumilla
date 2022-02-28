import React, { useState } from "react";
import Link from "next/link";
import NavListItem from "./NavListItem";

const navItem = {
  HOME: "/",
  EVENTS: "/events",
  GALLERY: "/gallery",
  "FAB-LAB": "/fab-lab",
  "COURSE PLAN": "/course-plan",
  "ABOUT US": "/about-us",
  REGISTER: "/register",
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
