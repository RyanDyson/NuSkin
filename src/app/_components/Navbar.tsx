"use client";

import { DisplayText } from "./text/DisplayText";
import { FaShoppingCart, FaSearch, FaUserCircle, FaBars } from "react-icons/fa";
import { NavDropdown } from "./navigation/NavDropdown";
import { useState } from "react";
import { ProfileMenu } from "./navigation/ProfileMenu";
import { Cart } from "./navigation/Cart";

export function NavBar() {
  const [isCategoriesOpen, setIsCategoriesOpen] = useState<boolean>(false);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);

  function toggleDropdown(dropdownName: string) {
    const dropdowns = {
      categories: setIsCategoriesOpen,
      search: setIsSearchOpen,
      cart: setIsCartOpen,
    };

    Object.entries(dropdowns).forEach(([name, setter]) => {
      if (name === dropdownName) {
        setter((prevState) => !prevState);
      } else {
        setter(false);
      }
    });
  }

  return (
    <>
      <div className="relative flex h-24 w-full items-center justify-between bg-green-900 p-8 px-16 text-green-50 z-50">
        <div className="flex gap-x-8">
          <FaBars
            onClick={() => toggleDropdown("categories")}
            className="text-2xl cursor-pointer hover:text-green-200 transition-all duration-200"
          />
          <FaSearch
            onClick={() => toggleDropdown("search")}
            className="text-2xl cursor-pointer hover:text-green-200 transition-all duration-200"
          />
        </div>
        <div>
          <DisplayText className="text-4xl">NuSkin</DisplayText>
        </div>
        <div className="flex gap-x-8">
          <Cart />
          <ProfileMenu />
        </div>
      </div>

      <NavDropdown
        isOpen={isCategoriesOpen}
        setIsOpen={setIsCategoriesOpen}
        className="h-32 bg-green-200 transition-all duration-300 ease-out"
      >
        {/* Categories content */}
      </NavDropdown>

      <NavDropdown
        isOpen={isSearchOpen}
        setIsOpen={setIsSearchOpen}
        className="h-32 bg-yellow-200 transition-all duration-300 ease-out"
      >
        {/* Search content */}
      </NavDropdown>

      <NavDropdown
        isOpen={isCartOpen}
        setIsOpen={setIsCartOpen}
        className="h-32 bg-blue-200 transition-all duration-300 ease-out"
      >
        {/* Cart content */}
      </NavDropdown>
    </>
  );
}
