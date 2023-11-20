"use client";
import React, { useState } from "react";
import Link from "next/link";
import NavItem from "./NavItem";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";

const navItem = [
  {
    title: "About",
    href: "#about",
  },
  {
    title: "Projects",
    href: "#projects",
  },
  {
    title: "Contact",
    href: "#contact",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <nav className="fixed top-0 right-0 left-0 z-10 bg-[#181818] bg-opacity-50 font-code">
      <div className="flex flex-wrap items-center justify-between mx-auto px-6 md:px-[7rem] py-2">
        <Link href={"/"} className="text-4xl text-white font-semibold mt-0">
          M76
        </Link>
        <div className="mobile-menu block md:hidden">
          {navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded borded-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border  rounded borded-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-12 mt-0">
            {navItem.map((item, index) => (
              <li key={index}>
                <NavItem href={item.href} title={item.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay items={navItem} /> : null}
    </nav>
  );
};

export default Navbar;
