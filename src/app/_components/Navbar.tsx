"use client";

import { DisplayText } from "./text/DisplayText";
import { FaShoppingCart, FaSearch, FaUserCircle, FaBars } from "react-icons/fa";
import { NavDropdown } from "./navigation/NavDropdown";
import { useState } from "react";

export function NavBar() {
  const [isCategoriesOpen, setIsCategoriesOpen] = useState<boolean>(false);

  console.log(isCategoriesOpen);

  return (
    <>
      <div className="relative flex h-24 w-full items-center justify-between bg-green-900 p-8 px-16 text-green-50 z-50">
        <div className=" flex gap-x-8">
          <FaBars
            onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
            className="text-2xl cursor-pointer hover:text-green-200 transition-all duration-200"
          />
          <FaSearch className="text-2xl cursor-pointer hover:text-green-200 transition-all duration-200" />
        </div>
        <div>
          <DisplayText className="text-4xl">NuSkin</DisplayText>
        </div>
        <div className="flex gap-x-8">
          <FaShoppingCart className="text-2xl cursor-pointer hover:text-green-200 transition-all duration-200" />
          <FaUserCircle className="text-2xl cursor-pointer hover:text-green-200 transition-all duration-200" />
        </div>
      </div>

      <NavDropdown
        isOpen={isCategoriesOpen}
        setIsOpen={setIsCategoriesOpen}
        className="h-32 bg-green-200"
      ></NavDropdown>
    </>
  );
}
