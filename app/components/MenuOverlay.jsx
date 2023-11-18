import React from "react";
import NavItem from "./NavItem";

const MenuOverlay = ({ items }) => {
  return (
    <ul className=" flex flex-col py-4 items-center">
      {items.map((item, index) => (
        <li key={index}>
          <NavItem href={item.href} title={item.title} />
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;
