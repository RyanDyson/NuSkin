"use client";

import { DisplayText } from "./text/DisplayText";
import { FaSearch, FaBars } from "react-icons/fa";
import { NavDropdown } from "./navigation/NavDropdown";
import { useState } from "react";
import { ProfileMenu } from "./navigation/ProfileMenu";
import { Cart } from "./navigation/Cart";
import { Search } from "./navigation/Search";
import { Categories } from "./navigation/Categories";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export function NavBar() {
  const [isCategoriesOpen, setIsCategoriesOpen] = useState<boolean>(false);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const { scrollY } = useScroll();
  const [isHidden, setIsHidden] = useState<boolean>(false);
  const router = useRouter();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const prev = scrollY.getPrevious();
    if (prev) {
      if (latest > prev && latest > 150) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
    }
  });

  const scrollVariants = {
    hidden: { y: -100 },
    visible: { y: 0 },
  };

  function toggleDropdown(dropdownName: string) {
    const dropdowns = {
      categories: setIsCategoriesOpen,
      search: setIsSearchOpen,
    };

    Object.entries(dropdowns).forEach(([name, setter]) => {
      if (name === dropdownName) {
        setter((prevState) => !prevState);
      } else {
        setter(false);
      }
    });
  }

  useEffect(() => {
    if (isHidden) {
      setIsCategoriesOpen(false);
      setIsSearchOpen(false);
    }
  }, [isHidden]);

  return (
    <div className="fixed w-full z-50">
      <motion.div
        variants={scrollVariants}
        animate={isHidden ? "hidden" : "visible"}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="relative flex h-20 w-full items-center justify-between bg-green-900 p-8 md:px-16 text-green-50 z-50 transition-all duration-300 ease-in-out"
      >
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
        <div onClick={() => router.push("/")}>
          <DisplayText className="text-4xl cursor-pointer">NuSkin</DisplayText>
        </div>
        <div className="flex gap-x-8">
          <Cart />
          <ProfileMenu />
        </div>
      </motion.div>

      <NavDropdown
        isOpen={isCategoriesOpen}
        setIsOpen={setIsCategoriesOpen}
        className="h-min max-h-96 drop-shadow-lg bg-green-50 transition-all duration-300 ease-out z-20"
      >
        <Categories />
      </NavDropdown>

      <NavDropdown
        isOpen={isSearchOpen}
        setIsOpen={setIsSearchOpen}
        className="h-min max-h-96 drop-shadow-lg bg-green-50 transition-all duration-300 ease-out z-20"
      >
        <Search />
      </NavDropdown>
    </div>
  );
}
