"use client";

import { AnchorHTMLAttributes, PropsWithChildren } from "react";
import { cn } from "../utils/cn";
import { HomeIcon } from "@heroicons/react/24/outline";
import { Typography } from "./Typography";
import useScrollSpy from "../hooks/useScrollSpy";
import ThemeDropdown from "./ThemeDropdown";

function NavbarItem({
  children,
  className,
  href,
}: PropsWithChildren & AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <li>
      <a
        href={href}
        className={cn(
          "flex h-10 items-center rounded-full px-4 font-medium hover:bg-zinc-800",
          className,
        )}
      >
        {children}
      </a>
    </li>
  );
}

type NavbarProps = {
  sectionIds: string[];
};

function Navbar({ sectionIds }: NavbarProps) {
  const activeId = useScrollSpy(sectionIds, 54);
  return (
    <nav className="fixed top-8 flex w-full items-center justify-between px-12">
      <Typography.H5 className="font-bold">V</Typography.H5>
      <ul className="flex items-center justify-center gap-1 rounded-full border border-zinc-800 bg-zinc-950 p-1">
        {sectionIds.map((id) => (
          <NavbarItem
            key={id}
            href={`#${id}`}
            className={cn("capitalize transition-all", {
              "bg-white text-zinc-900 hover:bg-white": id === activeId,
            })}
          >
            {id === "home" ? <HomeIcon className="h-5 w-5" /> : id}
          </NavbarItem>
        ))}
      </ul>
      <ThemeDropdown />
    </nav>
  );
}

export default Navbar;
