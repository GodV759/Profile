import clsx from "clsx";
import { motion } from "framer-motion";
import React from "react";
const variants = {
  hidden: { opacity: 0, x: 0, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
};
export default function WrapperPage({
  children,
  className = "",
}: // keyAnim,
{
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  // keyAnim: string;
}) {
  return (
    <motion.main
      variants={variants}
      initial="hidden"
      exit="hidden"
      animate="enter"
      transition={{ type: "linear", duration: 0.25 }}
      className={clsx(
        "max-w-[720px] flex flex-col w-full h-full  m-auto p-4 lg:pt-20 mb-[100px]",
        {
          [className]: !!className,
        }
      )}
      // key={keyAnim}
    >
      {children}
    </motion.main>
  );
}
