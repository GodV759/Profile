import clsx from "clsx";
import React from "react";

export default function WrapperPage({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      className={clsx(
        "max-w-[720px] flex flex-col w-full h-full  m-auto p-4 lg:pt-20 mb-[100px]",
        {
          [className]: !!className,
        }
      )}
    >
      {children}
    </div>
  );
}
