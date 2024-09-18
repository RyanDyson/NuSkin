"use client";

import { type SetStateAction, type Dispatch } from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import useMeasure from "react-use-measure";
import { useOnClickOutside } from "usehooks-ts";
import { useRef } from "react";

type DropdownProps = {
  children?: React.ReactNode;
  className?: string;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

const defaultClassName =
  "w-full h-auto absolute bg-white text-green-900 h-screen rounded-lg px-8 py-4";

export function NavDropdown({
  children,
  className,
  isOpen,
  setIsOpen,
}: DropdownProps) {
  const [ref, { height }] = useMeasure();
  const yTransform = 2 * height;

  const contRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = () => {
    setIsOpen(false);
  };

  useOnClickOutside(contRef, handleClickOutside);

  return (
    <>
      <div ref={contRef}>
        <motion.div
          ref={ref}
          initial={{ y: -yTransform }}
          animate={isOpen ? { y: 0 } : { y: -yTransform }}
          exit={{ y: -yTransform }}
          transition={{ ease: "easeInOut", duration: 0.3 }}
          className={twMerge(defaultClassName, className)}
        >
          {children}
        </motion.div>
      </div>
    </>
  );
}
