import React from "react";

type Props = {
  content: string | React.ReactNode;
};

const ButtonNav = (props: Props) => {
  return (
    <div className="flex items-center justify-center">{props.content}</div>
  );
};

export default ButtonNav;
