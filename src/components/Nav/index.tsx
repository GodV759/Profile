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
import { routes } from "@/lib/constants";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const Nav = () => {
  const pathName = usePathname();
  const listNav = [
    {
      icon: (
        <HomeIcon
          className={clsx({ ["!text-active-icon"]: pathName === routes.home })}
        />
      ),
      name: "Home",
      href: routes.home,
    },
    {
      icon: (
        <PeopleIcon
          className={clsx({ ["!text-active-icon"]: pathName === routes.about })}
        />
      ),
      name: "About Me",
      href: routes.about,
    },
    {
      icon: (
        <BookIcon
          className={clsx({ ["!text-active-icon"]: pathName === routes.blog })}
        />
      ),
      name: "My Blog",
      href: routes.blog,
    },
    {
      icon: (
        <ImageIcon
          className={clsx({
            ["!text-active-icon"]: pathName === routes.photos,
          })}
        />
      ),
      name: "My Photos",
      href: routes.photos,
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
  return (
    <div className="fixed z-10 bottom-3 flex w-[calc(100dvw-32px)] overflow-auto items-center max-w-[720px] border border-solid border-border rounded-xl p-3 gap-3 opacity-100 bg-card">
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
