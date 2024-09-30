"use client";
import React from "react";
import { ModeToggle } from "../SwitchMode";
import ButtonNav from "../shared/ButtonNav";
import HomeIcon from "../shared/icons/home";
import PeopleIcon from "../shared/icons/people";
import FacebookIcon from "../shared/icons/FacebookIcon";
import InstagramIcon from "../shared/icons/InstagramIcon";
import XIcon from "../shared/icons/XIcon";
import LinkedinIcon from "../shared/icons/LinkedinIcon";
import BookIcon from "../shared/icons/BookIcon";
import ImageIcon from "../shared/icons/ImageIcon";

const listNav = [
  {
    icon: <HomeIcon />,
    name: "Home",
    href: "/",
  },
  {
    icon: <PeopleIcon />,
    name: "About Me",
    href: "/info",
  },
  {
    icon: <BookIcon />,
    name: "My Blog",
    href: "/blog",
  },
  {
    icon: <ImageIcon />,
    name: "My Photos",
    href: "/photo",
  },
  {
    icon: <FacebookIcon />,
    name: "My Facebook",
    href: "https://www.facebook.com/haladie.de.kaiju/",
  },
  {
    icon: <InstagramIcon />,
    name: "My Insta",
    href: "https://www.instagram.com/__haladie/",
  },
  {
    icon: <XIcon />,
    name: "My X",
    href: "https://x.com/Haladie_dK",
  },
  {
    icon: <LinkedinIcon />,
    name: "My LinkedIn",
    href: "https://www.linkedin.com/in/doanh-nguyen-028665216/",
  },
];

const Nav = () => {
  return (
    <div className="fixed z-10 bottom-3 flex w-[calc(100dvw-32px)] overflow-auto items-center max-w-[720px] border border-solid border-gray-700 rounded-xl p-3 gap-3">
      {listNav.map((e, index) => {
        return (
          <ButtonNav icon={e.icon} tooltip={e.name} key={index} href={e.href} />
        );
      })}
      <ModeToggle />
    </div>
  );
};

export default Nav;
