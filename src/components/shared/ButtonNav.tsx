import { motion } from "framer-motion";
import React from "react";

type Props = {
  content: string | React.ReactNode;
  onClick: () => void;
};

const ButtonNav = (props: Props) => {
  return (
    <motion.button
      onClick={props.onClick}
      className="flex items-center justify-center bg-button p-3 rounded-lg"
    >
      {props.content}
    </motion.button>
  );
};

export default ButtonNav;
