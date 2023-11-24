"use client";

import { AnchorHTMLAttributes, PropsWithChildren } from "react";
import { cn } from "@utils/cn";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import useScrollSpy from "@hooks/useScrollSpy";

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
          "flex h-10 select-none items-center rounded-full px-4 text-sm font-medium hover:bg-zinc-100 dark:hover:bg-zinc-800",
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
  const activeId = useScrollSpy(sectionIds, 200) || "about";
  return (
    <nav className="mr-auto w-48">
      <ul className="flex flex-col gap-1">
        {sectionIds.map((id) => {
          const isActive = id === activeId;
          return (
            <NavbarItem
              key={id}
              href={`#${id}`}
              className={cn(
                "flex items-center overflow-hidden bg-transparent capitalize transition-all",
                {
                  "bg-zinc-900 text-white  hover:bg-zinc-900 dark:bg-white dark:text-zinc-900 dark:hover:bg-white":
                    isActive,
                },
              )}
            >
              <ArrowLongRightIcon
                className={cn(
                  "h-5 w-5 shrink-0 -translate-x-10 transition-transform",
                  {
                    "mr-3 translate-x-0": isActive,
                  },
                )}
              />
              {id}
            </NavbarItem>
          );
        })}
      </ul>
    </nav>
  );
}

export default Navbar;
