"use client";

import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
type Props = {
  icon: string | React.ReactNode;
  tooltip: string;
  href: string;
};

const ButtonNav = (props: Props) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <motion.div
            whileHover={{
              marginRight: 10,
              marginLeft: 10,
              scale: 1.2,
              transition: { duration: 0.2, ease: "easeInOut" },
            }}
            whileTap={{ scale: 0.9 }}
            className="flex items-center justify-center bg-icon p-4 rounded-lg"
          >
            <Link href={props.href} target="_blank" rel="noopener noreferrer">
              {typeof props.icon === "string" ? (
                <Image src={props.icon} alt="" width="24" height="24" />
              ) : (
                props.icon
              )}
            </Link>
          </motion.div>
        </TooltipTrigger>
        <TooltipContent>
          <p>{props.tooltip}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default ButtonNav;
