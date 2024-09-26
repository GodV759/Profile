import React from "react";
import { ModeToggle } from "../SwitchMode";

const Nav = () => {
  return (
    <div className="fixed bottom-3 flex w-full items-center max-w-[720px] border border-solid border-white rounded-xl py-2 px-2">
      <ModeToggle />
    </div>
  );
};

export default Nav;
