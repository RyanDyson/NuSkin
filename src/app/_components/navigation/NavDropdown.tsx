import { SetStateAction, type Dispatch } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { twMerge } from "tailwind-merge";
import useMeasure from "react-use-measure";

type DropdownProps = {
  children?: React.ReactNode;
  className?: string;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

const defaultClassName =
  "w-full absolute bg-white text-green-900 h-screen rounded-lg";

export function NavDropdown({
  children,
  className,
  isOpen,
  setIsOpen,
}: DropdownProps) {
  const [ref, { height }] = useMeasure();
  console.log(height);

  return (
    <>
      <motion.div
        ref={ref}
        initial={{ y: -240 }}
        animate={isOpen ? { y: 0 } : { y: -240 }}
        exit={{ y: -128 }}
        transition={{ ease: "easeInOut", duration: 0.3 }}
        className={twMerge(defaultClassName, className)}
      >
        {children}
      </motion.div>
    </>
  );
}
