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
        "max-w-[720px] flex flex-col  w-full  overflow-auto h-[100dvh]  m-auto p-4 lg:pt-20",
        {
          [className]: !!className,
        }
      )}
    >
      {children}
    </div>
  );
}
