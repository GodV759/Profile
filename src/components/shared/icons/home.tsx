import React from "react";
import clsx from "clsx";

const HomeIcon = ({ className = "" }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="512"
      height="512"
      className={clsx("w-6 h-6 text-color-icon", { [className]: !!className })}
    >
      <g id="_01_align_center" data-name="01 align center">
        <path
          d="M13.338.833a2,2,0,0,0-2.676,0L0,10.429v10.4a3.2,3.2,0,0,0,3.2,3.2H20.8a3.2,3.2,0,0,0,3.2-3.2v-10.4ZM15,22.026H9V17a3,3,0,0,1,6,0Zm7-1.2a1.2,1.2,0,0,1-1.2,1.2H17V17A5,5,0,0,0,7,17v5.026H3.2a1.2,1.2,0,0,1-1.2-1.2V11.319l10-9,10,9Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
};

export default HomeIcon;
