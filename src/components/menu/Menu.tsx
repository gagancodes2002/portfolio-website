"use client";

import React, { useEffect, useRef, useState } from "react";

import "./menu.scss";
import Link from "next/link";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const menuItems = [
  {
    name: "HOME",
    link: "/",
  },
  {
    name: "ABOUT ME",
    link: "/about",
  },
  {
    name: "PORTFOLIO",
    link: "/projects",
  },
  {
    name: "EXPERIENCE",
    link: "/experience",
  },
  {
    name: "CONTACT",
    link: "/contact",
  },
];

const Menu = () => {
  return (
    <div className="menu">
      <div className="menu-logo">Gagan Bindoria </div>
      <div className="menu-container">
        {menuItems.map((item, index) => {
          return (
            <Link href={item.link} key={index} className="menu-item-link">
              {" "}
              {item.name}{" "}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Menu;
