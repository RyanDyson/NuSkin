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
  "w-full h-auto absolute bg-white text-green-900 h-screen rounded-lg p-8";

export function NavDropdown({
  children,
  className,
  isOpen,
  setIsOpen,
}: DropdownProps) {
  const [ref, { height }] = useMeasure();
  const yTransform = 2 * height;

  return (
    <>
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
    </>
  );
}
